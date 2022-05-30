
import "./index.css";

const SingleProjectPreview = ({ project }) => {
  console.log(project)
  return (
    <div className="project-view">
      <h1>Project Name</h1>
      <div className="tabs">
        <p>Overview</p>
        <p>Tasks</p>
        <div className="project-description">
          <h3>Description</h3>
          <p>aldfkalsjfljsldfl;jsadkjfjsf</p>
          <div className="progress-bar">
            <h3>Progress</h3>
            <p>75%</p>
            <p>---------------------</p>
            <div className="project-teammates">
              <p>Teammates</p>
              <p>User 1</p>
              <p>User 2</p>
              <p>User 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


{/* <div className="project-name">{project.name}
        <div className="project-description">
          {project.description}
          <div className="progress-bar">

          </div>
        </div>
      </div> */}

export default SingleProjectPreview;
