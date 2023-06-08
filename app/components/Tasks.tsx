'use client';
import { ITask } from '@/types/tasks';
import React, { FormEventHandler, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';

interface TaskProps {
  task: ITask;
}
const Tasks: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const handleSubmitEditTodo: FormEventHandler<
    HTMLFormElement
  > = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setTaskToEdit('');
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    router.refresh();
  };
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td className="flex space-x-4">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          size={20}
          className="text-blue-500"
          cursor={'pointer'}
        />
        <FiTrash2
          size={20}
          className="text-red-500"
          cursor={'pointer'}
          onClick={() => handleDeleteTodo(task.id)}
        />
      </td>
      <Modal
        modalOpen={openModalEdit}
        setModalOpen={setOpenModalEdit}
      >
        <form onSubmit={handleSubmitEditTodo}>
          <h3 className="font-bold text-lg">Edit task</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
              value={taskToEdit}
              onChange={(e) => setTaskToEdit(e.target.value)}
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </tr>
  );
};

export default Tasks;
