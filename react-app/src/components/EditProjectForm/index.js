import { useState } from "react";
import EditProjectForm from "./EditProjectForm";
import { Modal } from "../../context/Modal";
import "./EditProjectForm.css";


const EditProjectModal = ({ setIsClicked }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-project-btn edit-project-btn" onClick={(e) => {e.stopPropagation(); setShowModal(true)}}>
        Edit Project
      </button>
      {showModal && (
        <Modal onClose={() => {setIsClicked(false); setShowModal(false)}}>
          <EditProjectForm setShowModal={setShowModal} setIsClicked={setIsClicked} />
        </Modal>
      )}
    </>
  );
};

export default EditProjectModal;
