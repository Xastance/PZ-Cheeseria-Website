const express = require('express');
const router = express.Router();
const cheeseController = require('../controllers/cheeseController');

// Define CRUD routes
router.get('/', cheeseController.getAllCheeses);
router.get('/:id', cheeseController.getCheeseById);
router.post('/', cheeseController.createCheese);
router.put('/:id', cheeseController.updateCheese);
router.delete('/:id', cheeseController.deleteCheese);

module.exports = router;
