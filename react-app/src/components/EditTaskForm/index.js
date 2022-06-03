import { useState } from "react";
import EditTaskForm from "./EditTaskForm";
import { Modal } from "../../context/Modal";

const EditTaskModal = ({ taskId, projectName, projectEndDate }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-project-btn" onClick={() => setShowModal(true)}>
        Edit Task
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTaskForm
            setShowModal={setShowModal}
            taskId={taskId}
            projectName={projectName}
            projectEndDate={projectEndDate}
            />
        </Modal>
      )}
    </>
  );
};

export default EditTaskModal;
