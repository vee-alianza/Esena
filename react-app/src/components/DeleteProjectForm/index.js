import { useState } from "react";
import DeleteProjectForm from "./DeleteProjectForm";
import { Modal } from "../../context/Modal";

const DeleteProjectModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="delete-project-btn" onClick={() => setShowModal(true)}
            >
                Delete Project
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteProjectForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
};

export default DeleteProjectModal;
