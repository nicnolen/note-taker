/* IMPORTS */
// Import dependencies
const fs = require('fs');
const router = require('express').Router();

// Import node packages
// Import uuid which generates unque ids for each note
const { v4: uuidv4 } = require('uuid');

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
  // extracted new note from request body
  const newNote = (req.body);

  // read data from 'db.json' file
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;

    // assigned unique id's for each not using the UUID npm package
    notes.id = uuidv4();

    const notes = JSON.parse(data);
    // pushed the new note to 'db.json'
    notes.push(newNote);

    // revert notes object to string and rewrite it to the respective file for later use
    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
      if (err) throw err;
    });
  });
  // send response
  res.json(newNote);
});

// Export the file
module.exports = router;
