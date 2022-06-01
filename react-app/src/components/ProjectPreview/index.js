import { useHistory } from "react-router-dom";
import "./index.css";
const ProjectPreview = ({ project }) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/projects/${project?.id}`);
  };
  return (
    <div className="project" onClick={handleOnClick}>
      <div className="project-icon">
        <div className="rectangle-icon">
          <i className="fa-solid fa-list-ul"></i>
        </div>
      </div>
      <div className="project-details">
        {project && (
          <>
            <div className="project-name">{project.name}</div>
            <div className="project-date">{project.end_date}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectPreview;
