import ProjectPreview from "../ProjectPreview";
import "./index.css";

const HomeProjectContainer = ({projects}) => {

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
        {projects ? Object.keys(projects).slice(0,6).map((key, idx) => {
          return <ProjectPreview project={projects[key]} key={`project-${idx}`}/>
        }) : ""}
      </div>
    </div>
  );
};

export default HomeProjectContainer;
