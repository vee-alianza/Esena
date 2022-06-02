import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";
import { Modal } from "../../context/Modal";

const MyProjectCreateSVG = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <svg
        className="w-6 h-6"
        fill="#9095a0"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => setShowModal(true)}
      >
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" />
      </svg>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateProjectForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default MyProjectCreateSVG;
