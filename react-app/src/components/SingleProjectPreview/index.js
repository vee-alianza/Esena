import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import SideBar from "../SideBar";
import ProjectTeamMembers from "../ProjectTeamMembers";
import ProjectTasksInProgress from "../ProjectTasksInProgress";
import ProjectTasksCompleted from "../ProjectTasksCompleted";
import EditProjectModal from "../EditProjectForm";
import DeleteProjectModal from "../DeleteProjectForm";
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
    // console.log(allTasks, members)
  }

  if (projectId in projects) {
    project = projects[parseInt(projectId)];
    allTasks = Object.values(tasksObj);
    allTasks = allTasks?.filter((task) => task.project_id == project.id);
    members = [project.owner_id, ...project.members];
  }
  // else if (profileUser && profileUser.projects) {
  //   // console.log(profileUser)
  //   project = profileUser.projects[projectId];
  //   allTasks = Object.values(profileUser.tasks);
  // }

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

  return (
    <>
      <SideBar />
      <div className="page-container">
        <div className="project-page-header">
          <h1>{project.name}</h1>
          <DropdownMenu
            comp="edit"
            permissions={sessionUser?.id == project.owner_id}
          />
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
