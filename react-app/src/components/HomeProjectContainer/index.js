import ProjectPreview from "../ProjectPreview";
import "./index.css";

const HomeProjectContainer = () => {
  return (
    <div className="projects-container">
      <div className="container-header">
        <h3>Projects</h3>
        <p>Recents</p>
      </div>
      <div className="create-project-container">
        <img src="/images/addicon.png" />
        <p>Create Project</p>
      </div>
      <div className="projects-container-body">
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
      </div>
    </div>
  );
};

export default HomeProjectContainer;
