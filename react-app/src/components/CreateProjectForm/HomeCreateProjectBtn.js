import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import { Modal } from "../../context/Modal";

const HomeCreateProjectBtn = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="create-project-container"
        onClick={() => setShowModal(true)}
      >
        <img src="/images/addicon.png" />
        <p>Create Project</p>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateProjectForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default HomeCreateProjectBtn;
