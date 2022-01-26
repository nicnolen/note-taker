// Import dependencies
const express = require('express');

// Import personal files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Set PORT. NOTE: Herokus apps are served using port 80. When Heroku runs the app, it sets the environment variable `process.env.PORT`
const PORT = process.env.PORT || 3001;
// Initialize the app by running the express() function
const app = express();

// Tells Express.js how to handle data parsing
// What sort of encoding we are going to do for our URL. When you do a post and send the URL sometimes plain text is sent across and you dont want that with something like a password
app.use(express.urlencoded({ extended: true }));
// Telling us we are getting information as json using the json() method
app.use(express.json());
// Allow us to use the files in the public folder
app.use(express.static('public'));

// Use API Routes
// Route to the apiRoutes folder
app.use('/api', apiRoutes);
// Route to the HTMLRoutes folder
app.use('/', htmlRoutes);

// Make the server listen
app.listen(PORT, () => {
  console.info(`API server is now on port ${PORT}!`);
});
