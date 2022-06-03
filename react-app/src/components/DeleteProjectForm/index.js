import { useState } from "react";
import DeleteProjectForm from "./DeleteProjectForm";
import { Modal } from "../../context/Modal";

const DeleteProjectModal = ({ setIsClicked }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="delete-project-btn edit-delete-project-btn"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setIsClicked(false);
            setShowModal(false);
          }}
        >
          <DeleteProjectForm
            setShowModal={setShowModal}
            setIsClicked={setIsClicked}
          />
        </Modal>
      )}
    </>
  );
};

export default DeleteProjectModal;
