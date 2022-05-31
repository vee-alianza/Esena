import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import { Modal } from "../../context/Modal";

const EditProfileModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-profile-btn" onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-pen-to-square"/>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProfileForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default EditProfileModal;
