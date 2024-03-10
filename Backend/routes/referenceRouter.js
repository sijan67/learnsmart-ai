const express = require('express');
const router = express.Router();
const referenceController = require('../controllers/referenceController');

// Define a route for getting all lectures
router.get('/lectures', referenceController.getReferece);

// Define a route for adding a new lecture
router.post('/lectures', referenceController.addReference);

// Define more routes as needed...

module.exports = router;