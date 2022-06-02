import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteProject, removeProject } from "../../store/projects";
import "./DeleteProjectForm.css"

const DeleteProjectForm = ({ setShowModal, setIsClicked }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { projectId } = useParams();

    const projects = useSelector((state) => state.projects);
    const allUsers = useSelector((state) => state.teammates.allUsers);
    // const allUserObjects = Object.values(allUsers);

    const project = projects[projectId];

    const handleDelete = () => {
        dispatch(deleteProject(projectId));
        history.push("/my-projects")
    }

    return (
        <div className="delete-container">
            <div className="delete-form-container">
                <h3>Are you sure you want to delete {project?.name} ?</h3>
            </div>
            <div className="message-btns">
                <button
                    className="deleteBtn"
                    onClick={() => handleDelete()}
                >
                    Delete
                </button>
                <button
                    className="cancelBtn"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsClicked(false);
                        setShowModal(false)
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default DeleteProjectForm;
