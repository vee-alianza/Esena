import { useState } from "react";
import EditTaskForm from "./EditTaskForm";
import { Modal } from "../../context/Modal";

const EditTaskModal = ({ taskId }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-project-btn" onClick={() => setShowModal(true)}>
        Edit Task
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTaskForm setShowModal={setShowModal} taskId={taskId}/>
        </Modal>
      )}
    </>
  );
};

export default EditTaskModal;
