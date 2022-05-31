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

  const calculatePercentage = () => {
    let numCompleted = 0;
    Object.values(project.tasks).forEach(task => {
      if (task.is_completed) {
        numCompleted++;
      }
    });
    return (numCompleted / project.tasks.length) * 100
  };


  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [projectId]);

  return (
    <div className="project-view">
      <h1>test</h1>
      {project &&
        <>
          <h1>{project.name}</h1>
          <div className="tabs">
            <p>Overview</p>
            <p>Tasks</p>
            <div className="project-description">
              <h3>Description</h3>
              <p>{project.description}</p>
              <div className="progress-bar">
                <h3>Progress</h3>
                <div className="progress-percent">
                  <ProgressBar percent={calculatePercentage()} />
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
        </>
      }
    </div>
  );
};


export default SingleProjectPreview;
