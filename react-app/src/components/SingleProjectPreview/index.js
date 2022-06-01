import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import SideBar from "../SideBar";
import ProjectMembers from "../ProjectMembers";
import ProjectTasksInProgress from "../ProjectTasksInProgress";
import ProjectTasksCompleted from "../ProjectTasksCompleted";

import { viewProfile } from "../../store/profile";

import "./index.css";

const tabFocusClass = {
  overview: "",
  tasks: "",
};

const SingleProjectPreview = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { projectId } = useParams();
  const projects = useSelector((state) => state.projects);
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const profileUser = useSelector((state) => state.profile);
  const tasksObj = useSelector((state) => state.tasks);

  const [tabClass, setTabClass] = useState({
    ...tabFocusClass,
    overview: "tab-focused",
  });
  const [dispOverview, setDispOverview] = useState("");
  const [dispTasks, setDispTasks] = useState("hide");

  console.log(history);

    // useEffect(async () => {
    //   await dispatch(viewProfile(userId));
    // }, [dispatch]);

    // setSingleProject

  let project;
  let allTasks;
  if (projectId in projects) {
    project = projects[parseInt(projectId)];
    allTasks = Object.values(tasksObj);
  } else if (profileUser && profileUser.projects) {
    // console.log(profileUser)
    project = profileUser.projects[projectId];
    allTasks = Object.values(profileUser.tasks);
  }

  allTasks?.sort((a, b) => {
    const keyA = new Date(a?.end_date);
    const keyB = new Date(b?.end_date);
    return keyA > keyB ? 1 : -1;
  });

  let members;
  if (project) {
    members = [...project.members, project.owner_id];
  }

  const calculatePercentage = () => {
    let numCompleted = 0;
    Object.values(project.tasks).forEach((task) => {
      if (task.is_completed) {
        numCompleted++;
      }
    });
    return Math.floor(
      (numCompleted / Object.values(project.tasks).length) * 100
    );
  };

  const focusTab = (e) => {
    if (e.target.innerText === "Overview") {
      setTabClass({ ...tabFocusClass, overview: "tab-focused" });
      setDispOverview("");
      setDispTasks("hide");
    } else if (e.target.innerText === "Tasks") {
      setTabClass({ ...tabFocusClass, tasks: "tab-focused" });
      setDispOverview("hide");
      setDispTasks("");
    }
  };

  return (
    <>
      <div className="project-view">
        <SideBar />
        {project && (
          <div className="single-project-view">
            <h1>{project.name}</h1>
            <div className="tabs">
              <p onClick={focusTab} className={tabClass.overview}>
                Overview
              </p>
              <p onClick={focusTab} className={tabClass.tasks}>
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
                    <ProjectMembers
                      members={members.map(
                        (memberId) => allUsers[parseInt(memberId)]
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`tasks-description ${dispTasks}`}>
              <ProjectTasksInProgress
                tasks={allTasks.filter(
                  (task) =>
                    task.project_id == projectId && task.is_completed == false
                )}
              />
              <ProjectTasksCompleted
                tasks={allTasks.filter(
                  (task) =>
                    task.project_id == projectId && task.is_completed == true
                )}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProjectPreview;
