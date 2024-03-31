// src/components/Filters.js
import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [filterOptions, setFilterOptions] = useState({
    startDate: '',
    endDate: '',
    assignee: '',
    priority: '',
    status: 'All', // Default status option
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilterOptions({ ...filterOptions, [name]: value });
  };

  const handleFilterApply = () => {
    onFilterChange(filterOptions);
  };

  return (
    <div className="task-form">
      <h5>Filter by : </h5>
      <input type="date" name="startDate" value={filterOptions.startDate} onChange={handleInputChange} />
      <input type="date" name="endDate" value={filterOptions.endDate} onChange={handleInputChange} />
      <input type="text" name="assignee" value={filterOptions.assignee} placeholder="Assignee" onChange={handleInputChange} />
      <select name="priority" value={filterOptions.priority} onChange={handleInputChange}>
        <option value="">All Priorities</option>
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
      </select>
      <select name="status" value={filterOptions.status} onChange={handleInputChange}>
        <option value="All">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Deployed">Deployed</option>
        <option value="Deferred">Deferred</option>
      </select>
      <button className='btn btn-warning' onClick={handleFilterApply}>Apply Filters</button>
    </div>
  );
};

export default Filters;
