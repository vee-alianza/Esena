import { useSelector } from "react-redux";

import SideBar from "../SideBar";
import Card from "../Card";
import MyProjectCreateSVG from "../CreateProjectForm/MyProjectCreateSVG";

const MyProjects = () => {
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
        <div className="home-header">
          <h1>My Projects</h1>
          <MyProjectCreateSVG />
        </div>
        <div className="project-task-container">
          {projects.map((project) => (
            <Card
              resource={project}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
