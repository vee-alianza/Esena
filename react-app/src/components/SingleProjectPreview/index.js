import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import SideBar from "../SideBar";
import ProjectMembers from "../ProjectMembers";
import "./index.css";

const tabFocusClass = {
  overview: '',
  tasks: ''
};

const SingleProjectPreview = () => {
  const { projectId } = useParams();
  const projects = useSelector(state => state.projects);
  const allUsers = useSelector(state => state.teammates.allUsers);
  const [tabClass, setTabClass] = useState({ ...tabFocusClass, overview: 'tab-focused' });
  const [dispOverview, setDispOverview] = useState('');
  const [dispTasks, setDispTasks] = useState('hide');
  const project = projects[parseInt(projectId)];

  const calculatePercentage = () => {
    let numCompleted = 0;
    Object.values(project.tasks).forEach(task => {
      if (task.is_completed) {
        numCompleted++;
      }
    });
    return Math.floor((numCompleted / Object.values(project.tasks).length) * 100);
  };

  const focusTab = (e) => {
    if (e.target.innerText === 'Overview') {
      setTabClass({ ...tabFocusClass, overview: 'tab-focused' });
      setDispOverview('');
      setDispTasks('hide');
    } else if (e.target.innerText === 'Tasks') {
      setTabClass({ ...tabFocusClass, tasks: 'tab-focused' });
      setDispOverview('hide');
      setDispTasks('');
    }
  };

  return (
    <>
      <div className="project-view">
        <SideBar />
        {project &&
          <div className="single-project-view">
            <h1>{project.name}</h1>
            <div className="tabs">
              <p
                onClick={focusTab}
                className={tabClass.overview}>
                Overview
              </p>
              <p
                onClick={focusTab}
                className={tabClass.tasks}>
                Tasks
              </p>
            </div>
            <div className={`project-description ${dispOverview}`}>
              <h3>Description</h3>
              <p>{project.description}</p>
              <div className="progress-bar">
                <h3>Progress</h3>
                <div className="progress-percent">
                  <ProgressBar percent={calculatePercentage()} />
                  <div className="project-teammates">
                    <h3>Teammates</h3>
                    <ProjectMembers members={project.members.map((memberId) => allUsers[parseInt(memberId)])} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`tasks-description ${dispTasks}`}>
              <h3>Complete:</h3>
              {Object.values(project.tasks).map((task, idx) => {
                if (task.is_completed) {
                  return (
                    <div key={idx}>
                      <p>
                        {task.description}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
              <h3>Incomplete:</h3>
              {Object.values(project.tasks).map((task, idx) => {
                if (!task.is_completed) {
                  return (
                    <div key={idx}>
                      <p>
                        {task.description}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        }
      </div>
    </>
  );
};


export default SingleProjectPreview;
