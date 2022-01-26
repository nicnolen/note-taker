// Import dependencies
// Path lets us create relative paths to come from the local host or heroku depoloyment instead of our computer
const path = require('path');
// Importing express and using the Router object because app would be completely different on this page
const router = require('express').Router();

// Make a GET route to our homepage (index.html)
router.get('/', (req, res) => {
  // transfers the file at the given path and sets the  HTTP URL based on the filename extension.
  // __dirname is the directory we are on, ../ is how we get out of routes and into the public/index.html
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Make a GET route to our notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// If no matching route is found, default to the home page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export the router to other files
module.exports = router;
