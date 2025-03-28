import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'To Do' });
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axiosInstance.get('/tasks', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();

    const response = await axiosInstance.post(
      '/tasks',
      { ...newTask },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    setTasks([...tasks, response.data]);
    setNewTask({ title: '', description: '', status: 'To Do' });
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const updatedTasks = [...tasks];
    const movedTask = updatedTasks[source.index];
    movedTask.status = destination.droppableId;

    axiosInstance.put('/tasks', { taskId: movedTask._id, status: movedTask.status }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    setTasks(updatedTasks);
  };

  const openTaskModal = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  const refreshTasks = () => {
    // Fetch the updated task list after editing a task
    const fetchTasks = async () => {
      const response = await axiosInstance.get('/tasks', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setTasks(response.data);
    };

    fetchTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button type="submit">Add Task</button>
      </form>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex' }}>
          {['To Do', 'In Progress', 'Completed'].map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ margin: '20px', padding: '20px', width: '300px', background: '#f0f0f0' }}
                >
                  <h3>{status}</h3>
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task, index) => (
                      <TaskCard key={task._id} task={task} index={index} onClick={openTaskModal} />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {selectedTask && (
        <TaskModal task={selectedTask} closeModal={closeModal} refreshTasks={refreshTasks} />
      )}
    </div>
  );
}

export default Dashboard;
