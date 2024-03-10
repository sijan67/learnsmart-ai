const express = require('express');
const router = express.Router();
const textController = require('../controllers/speechToTextController');

// Define a route for getting all lectures
router.get('/lectures', textController.getSpeechToText);

// Define a route for adding a new lecture
router.post('/lectures', textController.addSpeechToText);

// Define more routes as needed...

module.exports = router;