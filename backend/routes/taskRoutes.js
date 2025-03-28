const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask } = require('../controllers/taskController'); // Ensure this is correct

// POST route for creating a task
router.post('/', createTask);  // Ensure createTask is correctly imported

// GET route for getting all tasks
router.get('/', getTasks);  // Ensure getTasks is correctly imported

// PUT route for updating a task status
router.put('/', updateTask);  // Ensure updateTask is correctly imported

module.exports = router;
