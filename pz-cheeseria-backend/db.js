const sqlite3 = require('sqlite3').verbose();

function initializeDB(dbPath = './cheeseria.db') {
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log(`Connected to the SQLite database at ${dbPath}`);
  });
  return db;
}

module.exports = initializeDB; // Export the function

