import "./index.css";
const ProjectPreview = ({project}) => {
  return (
    <div className="project">
      <div className="project-icon">
        <div className="rectangle-icon">
          <i className="fa-solid fa-list-ul"></i>
        </div>
      </div>
      <div className="project-details">
        <div className="project-name">{project.name}</div>
        <div className="project-date">{project.end_date}</div>
      </div>
    </div>
  );
};

export default ProjectPreview;
