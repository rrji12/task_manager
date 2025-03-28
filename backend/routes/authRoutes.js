const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Define POST routes for registering and logging in users
router.post('/register', registerUser); // Check if this function is properly imported
router.post('/login', loginUser); // Check if this function is properly imported

module.exports = router;
