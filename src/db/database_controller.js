const sqlite3 = require('sqlite3').verbose();
// open database in memory
let db = new sqlite3.Database('./db/reparo.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

// Create Users_info table
db.run(`
  CREATE TABLE IF NOT EXISTS Users (
    uid INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )`);

// Create Annonces table
db.run(`
  CREATE TABLE IF NOT EXISTS Annonces (
    aid INTEGER PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT NOT NULL,
    Lien_Photo TEXT,
    uid INTEGER,
    FOREIGN KEY (uid)
      REFERENCES Users (uid)
      ON DELETE CASCADE
      ON UPDATE NO ACTION
  )`);

// Function to add a new user
function addUser(username, password, email) {
  let db = new sqlite3.Database('./db/reparo.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQLite database.');
  });

  // Insert new user into Users table
  const insertQuery = `INSERT INTO Users (username, password, email) VALUES (?, ?, ?)`;
  db.run(insertQuery, [username, password, email], function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`A new user has been added with ID: ${this.lastID}`);
    }
  });
  
  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}

module.exports = {
  addUser,
  // Add other database-related functions as needed
};

// close the database connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
});