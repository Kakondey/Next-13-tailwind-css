import { ITask } from '@/types/tasks';
import React from 'react';
import Tasks from './Tasks';

interface TodoListProps {
  tasks: ITask[];
}

const Todolist: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Todo items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Tasks key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
