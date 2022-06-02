import { useDispatch } from "react-redux";
import { markTaskComplete } from "../../store/tasks";
import "./index.css";

const CompleteTaskButton = ({ setShowModal, taskId }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(markTaskComplete(taskId));
    setShowModal(false);
  };
  return (
    <button className="completed-btn" type="submit" onClick={handleSubmit}>
      Mark as Completed
    </button>
  );
};

export default CompleteTaskButton;
