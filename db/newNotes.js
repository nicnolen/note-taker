// Path lets us create relative paths to come from the local host or heroku depoloyment instead of our computer
const path = require('path');
const fs = require('fs');

// Function to add a new note
const addNewNote = (newNote, notes) => {
  notes.push(newNote);
  fs.writeFile(
    path.join(__dirname, '..db/db.json'),
    // Convert the data to a string so we can save it
    // first parameter is the value to be converted to a json string
    // second parameter is used to filter the stringify. If null or blank, all objects are inluded
    // third parameter is used to control spacing of the JSON up to 10 characters
    JSON.stringify({ notes }, null, 2)
  );
  return notes;
};

// Export the module
module.exports = { addNewNote }