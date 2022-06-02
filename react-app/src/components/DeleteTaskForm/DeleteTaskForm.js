import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasks";
import "./DeleteTaskForm.css";

const DeleteTaskForm = ({ setShowModal, taskId, taskname }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(deleteTask(taskId));

    setShowModal(false);
  };
  return (
    <div className="delete-task-form-outer-container">
      <h3>{taskname}</h3>
      <p>Do you really want to delete this task?</p>
      <form onSubmit={handleSubmit}>
        <button type="cancel" className="delete-task-cancel">
          Cancel
        </button>
        <button type="submit" className="delete-task-confirm">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteTaskForm;
