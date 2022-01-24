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
// File to make new notes
const newNotes = require('../db/newNotes');
// File to post new notes
let { notes } = require('../db/db.json');

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

    const response = {
      status: 'success',
      body: newNote,
    };

    console.info(response);
    res.json(response);
  } else {
    res.json('Please input a title and body to create a note!');
  }
});

// Export the file
module.exports = router;
