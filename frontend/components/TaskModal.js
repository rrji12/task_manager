import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

function TaskModal({ task, closeModal, refreshTasks }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = async () => {
    try {
      const updatedTask = { title, description };
      await axiosInstance.put(`/tasks/${task._id}`, updatedTask, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      refreshTasks();  // Refresh tasks in the parent component
      closeModal();  // Close modal after saving
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <form>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
