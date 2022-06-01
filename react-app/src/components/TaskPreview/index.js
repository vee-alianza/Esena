import { useState } from "react";
import { Modal } from "../../context/Modal";
import TaskModal from "../TaskModal/TaskModal";
import "./index.css";

const TaskPreview = ({ task }) => {

  const [showModal, setShowModal] = useState(false);

  const handleOnClick = (id, e) => {

    if (e.target.id !== "modal-background") {
      setShowModal(true);
    }
  }

  return (
    <div
      className="task"
      onClick={(e) => {
        handleOnClick(task.id, e);
      }}
    >
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <TaskModal taskId={task.id} />
        </Modal>
      )}
      <div className="task-icon">
        <div className="circle-icon">
          <i className="fa-regular fa-circle-check fa-lg"></i>
        </div>
      </div>
      <div className="task-details">
        <div className="home-task-name">{task.name}</div>
        <div className="task-date">{task.end_date}</div>
      </div>
    </div>
  );
};

export default TaskPreview;
