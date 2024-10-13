// cheeseController.js
const cheeseModel = require('../models/cheeseModel');
const db = require('../db')(); // Connect to the database

// Get all active cheeses
exports.getAllCheeses = (req, res) => {
    cheeseModel.getAll(db, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ data: rows });
    });
};

// Get a cheese by ID
exports.getCheeseById = (req, res) => {
    const id = req.params.id;
    cheeseModel.getById(db, id, (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ data: row });
    });
};

// Create a new cheese
exports.createCheese = (req, res) => {
    const newCheese = req.body;
    cheeseModel.create(db, newCheese, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Cheese added successfully!' });
    });
};

// Update an existing cheese
exports.updateCheese = (req, res) => {
    const id = req.params.id;
    const updatedCheese = req.body;
    cheeseModel.update(db, id, updatedCheese, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Cheese updated successfully!' });
    });
};

// Soft delete a cheese (set isActive = 0)
exports.deleteCheese = (req, res) => {
    const id = req.params.id;
    cheeseModel.delete(db, id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Cheese deleted successfully!' });
    });
};
