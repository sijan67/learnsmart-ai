const express = require('express');
const router = express.Router();
const clarifyMoreController = require('../controllers/clarifyMoreController');

// Define a route for getting all lectures
router.get('/lectures', clarifyMoreController.getLectures);

// Define a route for adding a new lecture
router.post('/lectures', clarifyMoreController.addLecture);

// Define more routes as needed...

module.exports = router;