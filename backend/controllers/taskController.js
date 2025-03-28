const Task = require('../models/Task');

// Function to create a task
const createTask = async (req, res) => {
    const { title, description, status } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            status,
            user: req.user.id,
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Function to get tasks for the logged-in user
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Function to update a task
const updateTask = async (req, res) => {
    const { taskId, status } = req.body;

    try {
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.status = status;
        await task.save();
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createTask, getTasks, updateTask };
