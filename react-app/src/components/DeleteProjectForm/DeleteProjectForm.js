import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteProject } from "../../store/projects";
import "./DeleteProjectForm.css";

const DeleteProjectForm = ({ setShowModal, setIsClicked }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { projectId } = useParams();

  const projects = useSelector((state) => state.projects);

  const project = projects[projectId];

  const handleDelete = () => {
    dispatch(deleteProject(projectId));
    history.push("/my-projects");
  };

  return (
    <div className="delete-task-form-outer-container">
      <h3> {project?.name} </h3>
      <p>Are you sure you want to delete this project?</p>
      <div>
        <button
          className="delete-task-cancel"
          onClick={(e) => {
            e.preventDefault();
            setIsClicked(false);
            setShowModal(false);
          }}
        >
          Cancel
        </button>
        <button className="delete-task-confirm" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteProjectForm;
