import { useState } from "react";
import CreateTaskForm from "./CreateTaskForm";
import { Modal } from "../../context/Modal";

const CreateTaskModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-project-btn" onClick={() => setShowModal(true)}>
        Create Task
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateTaskForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default CreateTaskModal;
