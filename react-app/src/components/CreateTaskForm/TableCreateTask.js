import { useState } from "react";
import CreateTaskForm from "./CreateTaskForm";
import { Modal } from "../../context/Modal";
import ReactTooltip from "react-tooltip";
import "./TableCreateTask.css";

const TableCreateTask = ({ projectName, endDate, overdue }) => {
  const [showModal, setShowModal] = useState(false);

  return overdue ? (
    <>
      <div
        className="create-task-btn-container"
        onClick={() => setShowModal(true)}
        data-tip="Unable to add new task. This project has ended."
      >
        <i className="fa-regular fa-plus table-plus"></i>
        <p>Add Task</p>
      </div>
      <ReactTooltip place="bottom" type="dark" effect="solid" />
    </>
  ) : (
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
