import { useState } from "react";
import EditProjectForm from "./EditProjectForm";
import { Modal } from "../../context/Modal";

const Pencil = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="fa-solid fa-pencil" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProjectForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default Pencil;
