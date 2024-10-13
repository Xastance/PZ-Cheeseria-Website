const request = require('supertest');
const express = require('express');
const cheeseRoutes = require('../routes/cheeseRoutes');
const sqlite3 = require('sqlite3').verbose();
const assert = require('assert');

// Initialize Express app
const app = express();
app.use(express.json());
app.use('/cheeses', cheeseRoutes);

// Mock SQLite database for testing
const db = new sqlite3.Database(':memory:');

// Seed data for testing
const seedData = `
  INSERT INTO cheese (made_from, country_of_origin, family, type, texture, color, flavour, aroma, is_vegetarian, price_per_kilo, description, image_url, isActive)
  VALUES ('Cow', 'France', 'Blue Cheese', 'Soft', 'Creamy', 'Blue', 'Strong', 'Pungent', 1, 40.5, 'Delicious blue cheese', 'image1.jpg', 1);
`;

before((done) => {
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
        if (err) return done(err);
        db.run(seedData, done);
    });
});

// Test the GET /cheeses route
describe('GET /cheeses', () => {
    it('should return all active cheeses', (done) => {
        request(app)
            .get('/cheeses')
            .expect(200)
            .expect((res) => {
                assert(res.body.data.length > 0);
            })
            .end(done);
    });
});

// Test the GET /cheeses/:id route
describe('GET /cheeses/:id', () => {
    it('should return a cheese by ID', (done) => {
        request(app)
            .get('/cheeses/1')
            .expect(200)
            .expect((res) => {
                assert.strictEqual(res.body.data.id, 1);
            })
            .end(done);
    });
});

// Test the POST /cheeses route
describe('POST /cheeses', () => {
    it('should create a new cheese', (done) => {
        request(app)
            .post('/cheeses')
            .send({
                made_from: 'Goat',
                country_of_origin: 'Spain',
                family: 'Fresh Cheese',
                type: 'Soft',
                texture: 'Creamy',
                color: 'White',
                flavour: 'Mild',
                aroma: 'Fresh',
                is_vegetarian: 1,
                price_per_kilo: 35.0,
                description: 'Soft goat cheese',
                image_url: 'image2.jpg'
            })
            .expect(200)
            .expect((res) => {
                assert.strictEqual(res.body.message, 'Cheese added successfully!');
            })
            .end(done);
    });
});

// Test the PUT /cheeses/:id route
describe('PUT /cheeses/:id', () => {
    it('should update a cheese', (done) => {
        request(app)
            .put('/cheeses/1')
            .send({
                made_from: 'Sheep',
                country_of_origin: 'Italy',
                family: 'Semi-Hard',
                type: 'Aged',
                texture: 'Crumbly',
                color: 'Yellow',
                flavour: 'Sharp',
                aroma: 'Strong',
                is_vegetarian: 0,
                price_per_kilo: 55.0,
                description: 'Updated cheese description',
                image_url: 'image3.jpg'
            })
            .expect(200)
            .expect((res) => {
                assert.strictEqual(res.body.message, 'Cheese updated successfully!');
            })
            .end(done);
    });
});

// Test the DELETE /cheeses/:id route
describe('DELETE /cheeses/:id', () => {
    it('should soft delete a cheese', (done) => {
        request(app)
            .delete('/cheeses/1')
            .expect(200)
            .expect((res) => {
                assert.strictEqual(res.body.message, 'Cheese deleted successfully!');
            })
            .end(done);
    });
});
