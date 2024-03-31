// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, status, onEdit, filters, onDelete }) => {
    const filteredTasks = tasks.filter(task => {
        if (filters.startDate && new Date(task.startDate) < new Date(filters.startDate)) {
            return false;
        }
        if (filters.endDate && new Date(task.startDate) > new Date(filters.endDate)) {
            return false;
        }
        if (filters.assignee && task.assignee.toLowerCase().indexOf(filters.assignee.toLowerCase()) === -1) {
            return false;
        }
        if (filters.priority && task.priority !== filters.priority) {
            return false;
        }
        if (filters.status !== 'All' && task.status !== filters.status) {
            return false;
        }
        return true;
    });

    const tasksByStatus = filteredTasks.filter(task => task.status === status);

    return (
        <div className="">
            <div className="card">
                <div className="card-header list-header" >{status}
                </div>
                <div className="card-body">
                    {tasksByStatus.map(task => (
                        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TaskList;
