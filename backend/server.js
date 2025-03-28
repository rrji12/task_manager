const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes); // Register your auth routes
app.use('/api/tasks', taskRoutes); // Register your task routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
