import { useState } from "react";
import EditTaskForm from "./EditTaskForm";
import { Modal } from "../../context/Modal";
import "./EditTaskTableBtn.css";

const EditTaskTableBtn = ({ taskId, projectName }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="table-edit-btn" onClick={() => setShowModal(true)}>
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTaskForm
            setShowModal={setShowModal}
            taskId={taskId}
            projectName={projectName}
          />
        </Modal>
      )}
    </>
  );
};

export default EditTaskTableBtn;
