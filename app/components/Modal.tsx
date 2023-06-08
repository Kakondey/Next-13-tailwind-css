import React from 'react';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void | boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
  children,
}) => {
  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      {/* You can open the modal using ID.showModal() method */}
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen(false)}
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          x
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
