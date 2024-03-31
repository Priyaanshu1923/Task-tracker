// src/App.js
import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filters from './components/Filters';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    assignee: '',
    priority: '',
    status: 'All', // Default status option
  });

  const handleAddTask = newTask => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const handleEditTask = editedTask => {
    const updatedTasks = tasks.map(task => (task.id === editedTask.id ? editedTask : task));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <center>
        <h1>Task Board</h1>
      </center>

      <TaskForm onSubmit={handleAddTask} />
      <div className='filter-tasklist'>
      <Filters onFilterChange={handleFilterChange} />
      <br></br>
      <div className="task-form">
        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} filters={filters} status="Pending" />
        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} filters={filters} status="In Progress" />
        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} filters={filters} status="Completed" />
        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} filters={filters} status="Deployed" />
        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} filters={filters} status="Deferred" />
      </div>
      </div>
    </div>
  );
}

export default App;
