import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProject } from "../../store/projects";
import ProgressBar from "../ProgressBar";
import "./index.css";

const SingleProjectPreview = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(state => state.projects.currentProject);



  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [projectId]);

  return (
    <div className="project-view">
      {project &&
        <>
          <h1>{project.name}</h1>
          <div className="tabs">
            <p>Overview</p>
            <p>Tasks</p>
            <div className="project-description">
              <h3>Description</h3>
              <p>aldfkalsjfljsldfl;jsadkjfjsf</p>
              <div className="progress-bar">
                <h3>Progress</h3>
                <ProgressBar percent={75} />
                <div className="project-teammates">
                  <p>Teammates</p>
                  <p>User 1</p>
                  <p>User 2</p>
                  <p>User 3</p>
                </div>
              </div>
            </div>
          </div>
        </>
      }
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
