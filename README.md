# Note Taker

![MIT License](https://img.shields.io/badge/license-MIT-important)

## Table of Contents

- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Technologies Used](#technologies-used)
- [Usage Instructions](#usage-instructions)
- [License Section](#license)

- [Testing](#testing)
- [Contact Me](#contact-me)

## Description

This application will use an Express.js back end and will save and retrieve note data from a JSON file. This project was built so that users can easily organize their thoughts and keep track of tasks they need to complete.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Jest

## Installation Instructions

### Node.js Installation

Make sure that you have Node.js installed on your computer by entering node -v in the command line. If successful, the command prompt will return a version number. If not, try reinstalling Node.js by following this link: https://nodejs.org/en/ and clicking on the LTS version. If you are on Windows, make sure to look for the section that says `Download for Windows (x64)`. If you are using macOS, make sure to look for the section that says `Download for MacOS (x64)`

### Clone the Code

Once Node.js is downloaded, click on the green code button and copy the link to this repository. Then open up your favorite code editor and open the terminal. In the terminal use `cd` to go to the root directory you want this repository to be cloned to. Finally, in the terminal, type `git clone <file link>` to clone this repository to your directory.

### Express.js Installation

You must also install the Express.js npm package to run the server. Since Express.js is an npm package instead of being built directly into node.js, you must type `npm init` into the command line to allow npm packages to be installed. Next, go to the server.js file, and in the command line, type `npm install express` to install Express.js on your computer. For documentation on Express.js follow this link https://expressjs.com/en/4x/api.html.

### Jest Installation (optional)

If you would like to run tests that check for empty objects, you must install Jest. To install Jest, type `npm install jest` in the command line. Then, go to the `package.json` file and look for the `test` property under `scripts` and change the value to `"jest"`. For more documentation on Jest, follow this link https://jestjs.io/docs/getting-started.

## Usage Instructions

When you first clone the code and open the index.js file, you should see the same folders and code as shown below

![Note Taker Folders](https://user-images.githubusercontent.com/88728912/151385922-a8d50403-b447-4ee9-8661-2ea830f8d62e.png)

1. To start the server, make sure Node.js and Express.js are installed and type 'npm start' in the command line and press enter. After pressing enter, you should see a message that says "API server is now on port 3001!" as shown below.

![Start Server](https://user-images.githubusercontent.com/88728912/151386881-66fe0922-7449-47f5-acff-2a46ce8116b7.png)

2. Follow the link to heroku to get to the deployed version of the app https://protected-basin-46289.herokuapp.com/. Upon clicking the link, you should see a homepage like the screenshot below.

![Note Taker Homepage](https://user-images.githubusercontent.com/88728912/151387649-af452f12-1d56-4b31-a06e-09e0197d7f7a.png)


3. Click the black "Get Started" button to get to a page that displays previous notes in the left hand column, and gives you the option to add a new note title and a new note body on the right hand side as shown in the screenshot below.

![Notes Page](https://user-images.githubusercontent.com/88728912/151389113-6ca8191a-25df-47b0-adb6-8e11718b3ae3.png).

4. Once you add a new note title and a new note body, a save icon should appear in the top right corner.

![new-note](https://user-images.githubusercontent.com/88728912/151389649-2d557464-ca02-4ac9-8569-803431c4b81e.png)

When you click the save button, a new note will appear in the left hand column. 

5. If you wish to view a previous note, click on a note in the left hand column and that note will appear in the right hand column. 

6. If you wish to add a new note, click the + icon in the top right corner and you will have the option to add a new note title and a new note body.

7. If you wish to delete a note, click the red trash can icon next to the note you wish to delete and that note will be deleted.

8. When you are done adding notes, make sure to either type "exit" and then press return for Mac users, or hold "ctrl c" for windows users to stop the server. Whenever you want to view the notes again, just type "npm start" in the command line to restart the server and go to the deployeed Heroku link.

### Heroku Link

To see the deployed version of the app, follow this link: https://protected-basin-46289.herokuapp.com/

### Visual Walkthrough
For a visual walkthrough about how to create the team profile, click on the link: https://watch.screencastify.com/v/7gfWfCTKUYpmEIO2JYBc

## License

Permission to use this application is granted under the MIT license.
Click on the link for more information: [MIT License Information](https://opensource.org/licenses/MIT)

## Testing

Tests have been written in the `__tests__` folder to check if an object has the required properties using the `inputCheck.js` file located in the `utils` folder. If the object does have the required properties, `inputCheck()` returns null. If the object's property is blank or doesn't exist, an error is added to errors array. To run the tests, first make sure Jest is installed by checking the `package.json` file. If Jest is not installed, refer to the Installation section above. After confirming that Jest is installed, type `npm test` into the command line and a series of tests will be returned.

## Contact Me

GitHub Link: (https://github.com/nicnolen)<br>
Email Address: <nicnolen@ymail.com>
