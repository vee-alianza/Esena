import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./index.css";

const SingleProjectPreview = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  let projects = useSelector(state => state.projects);
  if !(projects && Object.keys(projects).includes(projectId) {
    projects = useSelector(state => state.profile.projects);
  }
  const project = projects[projectId]

  const calculatePercentage = () => {
    let numCompleted = 0;
    Object.values(project.tasks).forEach(task => {
      if (task.is_completed) {
        numCompleted++;
      }
    });
    return ((numCompleted / Object.values(project.tasks).length) * 100).toFixed(2);
  };
  
  if (!project) {
    return null
  }
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
              <p>{project.description}</p>
              <div className="progress-bar">
                <h3>Progress</h3>
                <div className="progress-percent">
                  <ProgressBar percent={calculatePercentage()} />
                  <div className="project-teammates">
                    <p>Teammates</p>
                    {project.members.map((member) => (
                      <p key={member.id}>{member.first_name}</p>
                    ))}
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
