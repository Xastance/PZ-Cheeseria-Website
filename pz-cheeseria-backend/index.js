const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const cheeseRoutes = require('./routes/cheeseRoutes'); // Import the routes
const app = express();
const port = 3001;

// Middleware for parsing JSON requests
app.use(cors());
app.use(express.json());

// Load Swagger JSON from file
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8')
);

// Serve Swagger API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const seedData = require('./seeds/initial_seed.js');

// Connect to the SQLite database
const db = new sqlite3.Database('./cheeseria.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the cheeseria SQLite database.');

  // Create the cheese table if it doesn't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS cheese (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      made_from TEXT,
      country_of_origin TEXT,
      family TEXT,
      type TEXT,
      texture TEXT,
      color TEXT,
      flavour TEXT,
      aroma TEXT,
      is_vegetarian INTEGER,
      price_per_kilo REAL,
      description TEXT,
      image_url TEXT,
      isActive INTEGER DEFAULT 1
    )
  `, (err) => {
    if (err) {
      console.error("Error creating cheese table:", err.message);
    } else {
      console.log("Cheese table created or already exists.");

      // Check if the cheese table is empty
      db.get('SELECT COUNT(*) AS count FROM cheese', (err, row) => {
        if (err) {
          console.error("Error checking cheese table:", err.message);
        } else if (row.count === 0) {
          console.log("Cheese table is empty, seeding initial data.");
          seedData(db);
        } else {
          console.log("Cheese table already has data, skipping seed.");
        }
      });
    }
  });
});

// Register the cheese routes
app.use('/cheeses', cheeseRoutes); // This line registers all routes defined in cheeseRoutes.js

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
