import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  const handleOnClick = (id) => {
      console.log("clicked")
      history.push(`/projects/${id}/tasks`)
  }

  return (
    <div>
      <SideBar />
      <div className="page-container">
        <h1 className="home-header">My Projects</h1>
        <div className="project-task-container">
          {projects.map((project) => (
            // <Link to={`/projects/${project.id}/tasks`}>
            <Card resource={project} onClick={() => {handleOnClick(project.id)}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
