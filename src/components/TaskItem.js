import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditClick = () => {
    setShowOptions(false);
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
    setShowOptions(false);
  };

  const handleOptionsToggle = () => {
    setShowOptions(!showOptions);
  };

  const handleSaveClick = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div className="task-item">
      <div className="card card-item">
        <div className="card-header change">
          <div>{task.title}</div>
          <button className="btn btn-primary priority">{task.priority}</button>
        </div>
        <div className="card-body">
          <p className="card-text des">{task.description}</p>
          <div className='change'>
            <div>
          <h6>@{task.assignee}</h6>
            </div>
            <div>

            <BsThreeDotsVertical className="edit-class" onClick={handleOptionsToggle} />
            {showOptions && (
                <div className="options">
                <button className='btn btn-info custom' onClick={handleEditClick}>Edit</button>
                <button className='btn btn-danger custom' onClick={handleDeleteClick}>Delete</button>
              </div>
            )}
            </div>
          </div>
          <button className="btn btn-primary custom-status">{task.status}</button>
          
        </div>
      </div>
      {isEditing && (
        <div className="edit-form">
          <h4>Edit Task</h4>
          <input type="text" name="title" value={editedTask.title} onChange={handleInputChange} readOnly />
          <textarea name="description" value={editedTask.description} onChange={handleInputChange} readOnly />
          <input type="text" name="assignee" value={editedTask.assignee} onChange={handleInputChange} readOnly />
          {/* Priority and Status fields are editable */}
          <select name="priority" value={editedTask.priority} onChange={handleInputChange}>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <select name="status" value={editedTask.status} onChange={handleInputChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deferred">Deferred</option>
          </select>
          <div className="edit-buttons">
            <button className="btn btn-success custom" onClick={handleSaveClick}>Save</button>
            <button className="btn btn-danger custom" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
