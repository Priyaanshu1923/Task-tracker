// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('Pending'); // Default status

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ title, description, assignee, priority, status }); // Pass task data to parent component
        setTitle('');
        setDescription('');
        setAssignee('');
        setPriority('');
        setStatus('Pending'); // Reset status after submission
    };

    return (
        <form onSubmit={handleSubmit} >
            <div class='task-form'>
                
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
                <input type="text" value={assignee} onChange={e => setAssignee(e.target.value)} placeholder="Assignee" required />
                <select value={priority} onChange={e => setPriority(e.target.value)} required>
                    <option value="">Select Priority</option>
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                </select>
                <select value={status} onChange={e => setStatus(e.target.value)} required>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Deployed">Deployed</option>
                    <option value="Deferred">Deferred</option> {/* New status option */}
                </select>
                <button className='btn btn-primary' type="submit">Add Task</button>
            </div>
        </form>
    );
};

export default TaskForm;
