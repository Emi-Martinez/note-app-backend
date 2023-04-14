# note-app-backend
This is an **API** for [note-app](https://github.com/Emi-Martinez/note-app-frontend) application

This API is used to:
* Get the notes in the database.
* Create notes.
* Update them.
* Delete notes.

## How to set up the API on your local machine
To clone and run this application, you will need [Git](https://git-scm.com/),  [Node.js](https://nodejs.org/en/download/) (wich comes with [npm](https://www.npmjs.com/)) and [MySQL](https://dev.mysql.com/downloads/) (a relational database management system), MySQL Shell it's required, installed in your computer.
From your command line:
```bash
# Clone this repository
$ git clone https://github.com/Emi-Martinez/note-app-backend

# Go into the folder
$ cd note-app-backend

# Install dependencies
$ npm install

# Set up the database
$ npm run setUpDataBase
# And follow its instructions

# Run the app
$ npm start
```