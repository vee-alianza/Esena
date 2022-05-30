import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasks";
// import "./CreateProjectForm.css";

const DeleteTaskForm = ({ setShowModal, taskId }) => {
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(deleteTask(taskId));

        // remove associated comments
        // await dispatch(removeComment());

        setShowModal(false);
    };
  return (
    <div className="">
      Do you really want to delete this task?
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Yes
        </button>
      </form>
    </div>
  );
};

export default DeleteTaskForm;
