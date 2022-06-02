import { useState } from "react";
import DeleteTaskForm from "./DeleteTaskForm";
import { Modal } from "../../context/Modal";
import "./DeleteTaskTableBtn.css";

const DeleteTaskTableBtn = ({ taskId }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="table-delete-btn" onClick={() => setShowModal(true)}>
        Delete
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteTaskForm setShowModal={setShowModal} taskId={taskId} />
        </Modal>
      )}
    </>
  );
};

export default DeleteTaskTableBtn;
