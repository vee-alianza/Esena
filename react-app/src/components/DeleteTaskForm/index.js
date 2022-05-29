import { useState } from "react";
import DeleteTaskForm from "./DeleteTaskForm";
import { Modal } from "../../context/Modal";

const DeleteTaskModal = ({ taskId }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-project-btn" onClick={() => setShowModal(true)}>
        Delete Task
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteTaskForm setShowModal={setShowModal} taskId={taskId} />
        </Modal>
      )}
    </>
  );
};

export default DeleteTaskModal;
