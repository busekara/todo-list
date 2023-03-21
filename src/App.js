import './App.css';
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import FilterTasks from './components/FilterTasks';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTaskForm />
      <FilterTasks />
      <TaskList />
    </div>
  );
}

export default App;
