/* IMPORTS */
// Import dependencies
const router = require('express').Router();
const fs = require('fs');

// Import node packages
// Import uuid which generates unque ids for each note
const { v4: uuidv4 } = require('uuid');

// Import personal files
let db = require('../db/db.json');

/* ROUTING */
// API GET request
router.get('/notes', (req, res) => {
  // read `db.json` file
  fs.readFile('./db/db.json', 'utf8', err => {
    if (err) throw err;
    // return the parsed saved notes
    res.json(db);
  });
});

// POST REQUESTS
router.post('/notes', (req, res) => {
  // Destructure the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // add the note to req.body
    req.body.id = uuidv4();
    db.push(req.body);

    // write the string to a file
    // The JSON.stringify parameters are as follows:
    // first parameter is the value to be converted to a json string
    // second parameter is used to filter the stringify. If null or blank, all objects are inluded
    // third parameter is used to control spacing of the JSON up to 10 characters
    fs.writeFile('./db/db.json', JSON.stringify(db), err => {
      if (err) {
        console.error(err);
      } else {
        console.info('New note added to JSON file!');
      }
    });

    const response = {
      status: 'success',
      body: db,
    };

    console.info(response);
    res.json(response);
  } else {
    res.json('Please input a title and body to create a note!');
  }
});

// DELETE REQUEST
router.delete('/notes/:id', (req, res) => {
  // fetched id to delete
  let noteId = req.params.id.toString();

  if (noteId) {
    // filter data to get notes except the one to delete
    db = db.filter(note => note.id.toString() !== noteId);

    // write the new data to the 'db.json' file
    fs.writeFile('./db/db.json', JSON.stringify(db), err => {
      if (err) {
        console.error(err);
      } else {
        console.info('Note successfully deleted!');
      }
    });

    const response = {
      status: 'success',
      body: db,
    };

    console.info(response);
    res.json(response);
  } else {
    res.json('Note not found!');
  }
});

// Export the file
module.exports = router;
