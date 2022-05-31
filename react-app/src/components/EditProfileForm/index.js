import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import { Modal } from "../../context/Modal";

const EditProfileModal = ({ taskId, projectName }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-project-btn" onClick={() => setShowModal(true)}>
        Edit Profile
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProfileForm
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
};

export default EditProfileModal;
