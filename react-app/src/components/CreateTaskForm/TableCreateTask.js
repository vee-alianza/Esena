import { useState } from "react";
import CreateTaskForm from "./CreateTaskForm";
import { Modal } from "../../context/Modal";
import "./TableCreateTask.css";

const TableCreateTask = ({ projectName, endDate }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="create-task-btn-container"
        onClick={() => setShowModal(true)}
      >
        <i className="fa-regular fa-plus table-plus"></i>
        <p>Add Task</p>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateTaskForm
            setShowModal={setShowModal}
            projectName={projectName}
            projectEndDate={endDate}
          />
        </Modal>
      )}
    </>
  );
};

export default TableCreateTask;
