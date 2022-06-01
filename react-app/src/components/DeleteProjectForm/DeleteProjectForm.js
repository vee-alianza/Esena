import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteProject } from "../../store/projects";
import { removeProject } from "../..store/projects";

const DeleteProjectForm = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const { projectId } = useParams();

    const projects = useSelector((state) => state.projects);
    const allUsers = useSelector((state) => state.teammates.allUsers);
    const allUserObjects = Object.values(allUsers);

    const project = projects[projectId];

    const handleDelete = (projectId) => {
        dispatch(deleteProject(projectId));
        history.push("/projects/:projectId/tasks")
    }

    return (
        <>
            <div className="delete-form-container">
                <h3>Are you sure you want to delete {project.name}?</h3>
            </div>
            <div className="message-btns">
                <button
                    className="deleteBtn"
                    onClick={() => setShowModal(false)}
                >
                    Delete
                </button>
                <button
                    className="cancelBtn"
                    onClick={() => setShowModal(false)}
                >
                    Cancel
                </button>
            </div>
        </>
    )
}
