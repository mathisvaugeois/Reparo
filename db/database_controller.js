const sqlite3 = require('sqlite3').verbose();
// open database in memory
let db = new sqlite3.Database('./db/reparo.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE Annonces(aid Integer PRIMARY KEY,'+
                             'Title TEXT NOT NULL,'+
                             'Description Text NOT NULL,'+
                             'Lien_Photo TEXT,'+
                             'uid INTEGER,'+
                             'FOREIGN KEY (uid) '+
                               'REFERENCES Users_info (uid) '+
                                 'ON DELETE CASCADE '+
                                 'ON UPDATE NO ACTION)');

// close the database connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
});