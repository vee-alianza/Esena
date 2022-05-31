import { useSelector } from "react-redux";
import SideBar from "../SideBar";
import Card from "../Card";

const MyProjects = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const projectsObj = useSelector((state) => state.projects);
  let projects = Object.values(projectsObj);

  projects.sort((a, b) => {
    const keyA = new Date(a?.end_date);
    const keyB = new Date(b?.end_date);
    return keyA > keyB ? 1 : -1;
  });

  return (
    <div>
      <SideBar />
      <div className="page-container">
        <h1 className="home-header">My Projects</h1>
        <div className="project-task-container">
          {/* {task.assigner_id == sessionUser.id? <div> <EditTaskModal taskId={task.id}/> <DeleteTaskModal taskId={task.id}/> </div>: null} */}
          {projects.map((project) => (
            <Card resource={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
