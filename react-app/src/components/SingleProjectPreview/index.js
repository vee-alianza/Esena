import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import SideBar from "../SideBar";
import ProjectTeamMembers from "../ProjectTeamMembers";
import ProjectTasksInProgress from "../ProjectTasksInProgress";
import ProjectTasksCompleted from "../ProjectTasksCompleted";
import Low from "../Priorities/Low";
import Medium from "../Priorities/Medium";
import High from "../Priorities/High";
import AtRisk from "../Statuses/AtRisk";
import OnTrack from "../Statuses/OnTrack";
import OffTrack from "../Statuses/OffTrack";
import Completed from "../Statuses/Completed";
import { viewProject } from "../../store/singleProject";
import "./index.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

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
  const sessionUser = useSelector((state) => state.session.user);

  allUsers[sessionUser?.id] = sessionUser;

  useEffect(async () => {
    await dispatch(viewProject(projectId));
    // console.log(projectId)
  }, [dispatch]);

  const [tabClass, setTabClass] = useState({
    ...tabFocusClass,
    overview: "tab-focused",
  });
  const [dispOverview, setDispOverview] = useState("");
  const [dispTasks, setDispTasks] = useState("hide");

  let project = useSelector((state) => state.singleProject);
  let allTasks;
  let members;

  if (project && project.tasks) {
    allTasks = Object.values(project.tasks);
    members = [project.owner_id, ...project.members];
  }

  if (projectId in projects) {
    project = projects[parseInt(projectId)];
    allTasks = Object.values(tasksObj);
    allTasks = allTasks?.filter((task) => task.project_id == project.id);
    members = [project.owner_id, ...project.members];
  }

  allTasks?.sort((a, b) => {
    const keyA = new Date(a?.end_date);
    const keyB = new Date(b?.end_date);
    return keyA > keyB ? 1 : -1;
  });

  const calculatePercentage = () => {
    let numCompleted = 0;
    allTasks?.forEach((task) => {
      if (task.is_completed) {
        numCompleted++;
      }
    });

    if (allTasks && allTasks.length) {
      return Math.floor((numCompleted / allTasks?.length) * 100);
    } else {
      return 0;
    }
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

  const renderPriority = (resource) => {
    if (resource.priority === "Low") {
      return <Low resource={resource} />;
    }
    if (resource.priority === "Medium") {
      return <Medium resource={resource} />;
    }
    if (resource.priority === "High") {
      return <High resource={resource} />;
    }
  };

  const renderStatus = (resource) => {
    if (resource.status === "Off track") {
      return <OffTrack resource={resource} />;
    }
    if (resource.status === "At risk") {
      return <AtRisk resource={resource} />;
    }
    if (resource.status === "On track") {
      return <OnTrack resource={resource} />;
    }
  };

  const overDue = () => {
    const jsDate = new Date().toISOString().split("T")[0];
    const pyDate = jsDate.split("-");
    const newPyDate = `${pyDate[1]}/${pyDate[2]}/${pyDate[0]}`;
    return Date.parse(newPyDate) > Date.parse(project.end_date);
  };

  return (
    <>
      <SideBar />
      <div className="page-container">
        <div className="project-page-header">
          <div className="project-page-header-left">
            <h1>{project.name}</h1>
            <div className="project-page-header-statuses">
              <div>{renderPriority(project)}</div>
              <div>{renderStatus(project)}</div>
            </div>
            <p>{`Due: ${project.end_date} ${overDue() ? "(Overdue)" : ""}`}</p>
          </div>
          <div className="project-page-header-right">
            <DropdownMenu
              comp="edit"
              permissions={sessionUser?.id == project.owner_id}
            />
          </div>
        </div>
        {project && (
          <div className="single-project-view">
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
              <div className="project-description-box">
                <p>{project.description}</p>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  <h3>Progress</h3>
                  <div className="progress-percent">
                    <ProgressBar percent={calculatePercentage()} />
                  </div>
                </div>
              </div>
              <div className="project-teammates">
                <ProjectTeamMembers
                  members={members?.map(
                    (memberId) => allUsers[parseInt(memberId)]
                  )}
                  projectPage={true}
                  permissions={sessionUser?.id == project.owner_id}
                />
              </div>
            </div>
            <div className={`tasks-description ${dispTasks}`}>
              <ProjectTasksInProgress
                tasks={allTasks?.filter(
                  (task) =>
                    task.project_id == projectId && task.is_completed == false
                )}
                members={members}
                overdue={overDue()}
              />
              <ProjectTasksCompleted
                tasks={allTasks?.filter(
                  (task) =>
                    task.project_id == projectId && task.is_completed == true
                )}
                members={members}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProjectPreview;
