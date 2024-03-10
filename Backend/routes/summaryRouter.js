const express = require('express');
const router = express.Router();
const keySummaryController = require('../controllers/keySummaryController');

// Define a route for getting all lectures
router.get('/lectures', keySummaryController.getSummary);

// Define a route for adding a new lecture
router.post('/lectures', keySummaryController.addKeySummary);

// Define more routes as needed...

module.exports = router;