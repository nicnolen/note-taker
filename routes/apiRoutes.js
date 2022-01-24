/* IMPORTS */
// Import dependencies
const fs = require('fs');
const router = require('express').Router();
// Path lets us create relative paths to come from the local host or heroku depoloyment instead of our computer
const path = require('path');

// Import node packages
// Import uuid which generates unque ids for each note
const { v4: uuidv4 } = require('uuid');

// Import personal files
const db = require('../db/db.json');

/* ROUTING */
// API GET request
router.get('/notes', (req, res) => {
  // read `db.json` file
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    // return the parsed saved notes
    res.json(JSON.parse(data));
  });
});

// POST REQUESTS
router.post('/notes', (req, res) => {
  // Destructure the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // variable for the object will save
    const newNote = {
      // gives notes unique id with uuid
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedNote = JSON.parse(data);
        parsedNote.push(newNote);
      }
    });

    // write the string to a file
    fs.writeFile('../db/db.json', newNoteString, err => {
      if (err) {
        console.error(err);
      } else {
        path.join(__dirname, '../db/db.json'),
          // Convert the data to a string so we can save it
          // first parameter is the value to be converted to a json string
          // second parameter is used to filter the stringify. If null or blank, all objects are inluded
          // third parameter is used to control spacing of the JSON up to 10 characters
          JSON.stringify(parsedNote, null, 2);
      }
    });

    const response = {
      status: 'success',
      body: newNote,
    };

    console.info(response);
    res.json(response);
    db.push(newNote);
  } else {
    res.json('Please input a title and body to create a note!');
  }
});

// Export the file
module.exports = router;
