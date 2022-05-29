import "./index.css";
const ProjectPreview = () => {
  return (
    <div className="project">
      <div className="project-icon">
        <div className="rectangle-icon">
          <i class="fa-solid fa-list-ul"></i>
        </div>
      </div>
      <div className="project-details">
        <div className="project-name">Project One</div>
        <div className="project-date">Ends 7/30/2022</div>
      </div>
    </div>
  );
};

export default ProjectPreview;
