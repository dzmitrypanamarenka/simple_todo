import React from 'react';
import ToDoForm from '../containers/ToDoForm';
import TaskList from '../containers/TaskList';
import Filters from './Filters';

export default () =>
  <div>
    <ToDoForm/>
    <TaskList/>
    <Filters/>
  </div>