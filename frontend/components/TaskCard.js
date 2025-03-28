import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ task, index, onClick }) {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            margin: '10px',
            padding: '10px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          onClick={() => onClick(task)}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
