import { useHistory } from "react-router-dom";
import "./index.css";
const ProjectPreview = ({ project }) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a12bf0d... update changes from staging branch on src/App.js, components: ProgressBar, ProjectPreview, ProjectTasksInProgress, SingleProjectPreview and store:project
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/projects/${project?.id}`);
  };
<<<<<<< HEAD
=======
>>>>>>> a7a24f6... add progress bar
=======
>>>>>>> a12bf0d... update changes from staging branch on src/App.js, components: ProgressBar, ProjectPreview, ProjectTasksInProgress, SingleProjectPreview and store:project
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
