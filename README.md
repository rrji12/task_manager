# Task Management App

A simple task management web app where users can log in, register, and manage their tasks with a "To Do", "In Progress", and "Completed" columns. The app allows users to add, edit, and move tasks between the columns using drag-and-drop functionality. The app also includes basic authentication with JWT.

## Features

- User authentication (login and registration)
- Task creation with title and description
- Drag-and-drop functionality to move tasks between "To Do", "In Progress", and "Completed"
- Edit tasks
- Authentication tokens stored using JWT (JSON Web Token)
- Persistent data storage with MongoDB

## Tech Stack

- **Frontend**: React.js, Axios, React Router, Formik, Yup, React Beautiful DnD
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Database**: MongoDB (local or hosted)
- **Authentication**: JWT

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 16 or higher)
- MongoDB database (local or cloud-based like MongoDB Atlas)
- `npm` or `yarn` installed
- A code editor (like Visual Studio Code)

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
Step 2: Backend Setup
Navigate to the backend directory.

bash
Copy
cd backend
Install the necessary dependencies:

bash
Copy
npm install
Create a .env file in the backend directory with the following content:

env
Copy
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
Replace your_mongo_db_uri with your MongoDB connection URI and your_jwt_secret with a secret string for JWT.

Start the backend server:

bash
Copy
node server.js
The backend should now be running on http://localhost:5000.

Step 3: Frontend Setup
Navigate to the frontend directory.

bash
Copy
cd frontend
Install the necessary dependencies:

bash
Copy
npm install
If you encounter issues with the dependency resolution, you can try running the following command:

bash
Copy
npm install --legacy-peer-deps
Start the frontend React application:

bash
Copy
npm start
This will start the frontend development server on http://localhost:3000.
