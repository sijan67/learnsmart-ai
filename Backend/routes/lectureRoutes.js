const express = require('express');
const router = express.Router();
const lecturesController = require('../controllers/lecturesController');

// Define a route for getting all lectures
router.get('/lectures', lecturesController.getLecture);

// Define a route for adding a new lecture
router.post('/lectures', lecturesController.addLecture);

// Define more routes as needed...

module.exports = router;
