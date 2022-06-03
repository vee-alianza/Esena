import { useState } from "react";
import DeleteTaskForm from "./DeleteTaskForm";
import { Modal } from "../../context/Modal";
import { useStateIfMounted } from "use-state-if-mounted";
import "./DeleteTaskTableBtn.css";

const DeleteTaskTableBtn = ({ taskId, taskname }) => {
  const [showModal, setShowModal] = useStateIfMounted(false);

  return (
    <>
      <button className="table-delete-btn" onClick={() => setShowModal(true)}>
        Delete
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteTaskForm
            setShowModal={setShowModal}
            taskId={taskId}
            taskname={taskname}
          />
        </Modal>
      )}
    </>
  );
};

export default DeleteTaskTableBtn;
