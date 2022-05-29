import { useDispatch } from "react-redux";
import { markTaskComplete } from "../../store/tasks";

const CompleteTaskButton = ({setShowModal, taskId }) => {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(markTaskComplete(taskId))
        setShowModal(false);
    }
    return (
        <button type="submit" onClick={handleSubmit}>
            Mark as Completed
        </button>
    )
}

export default CompleteTaskButton