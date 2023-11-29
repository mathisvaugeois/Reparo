const sqlite3 = require('sqlite3').verbose();
// open database in memory
let db = new sqlite3.Database('./db/reparo.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

/*db.run('CREATE TABLE Users(uid INTEGER PRIMARY KEY,'+
                          'first_name TEXT NOT NULL,'+
                          'last_name TEXT NOT NULL,'+
                          'email TEXT NOT NULL UNIQUE,'+
                          'phone TEXT NOT NULL UNIQUE,'+
                          'age INTEGER NOT NULL)');*/

const express = require("express")
var app = express()
app.use(express.static('front-end'))

app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});

// close the database connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
});
