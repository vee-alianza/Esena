import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import { Modal } from "../../context/Modal";

const CreateProjectModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-project-btn" onClick={() => setShowModal(true)}>
        Create Project
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateProjectForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default CreateProjectModal;
