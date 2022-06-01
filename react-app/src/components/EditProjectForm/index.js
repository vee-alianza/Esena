import { useState } from "react";
import EditProjectForm from "./EditProjectForm";
import { Modal } from "../../context/Modal";

const EditProjectModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-project-btn" onClick={() => setShowModal(true)}>
        Edit Project
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProjectForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default EditProjectModal;
