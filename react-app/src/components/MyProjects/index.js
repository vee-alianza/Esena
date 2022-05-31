import { useSelector } from "react-redux";

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
      <h1>My Projects</h1>
      <div>
        {projects.map((project) => (
          <div className="task-div" key={project.id}>
            <div>{project.name}</div>
            <div>End Date: {project.end_date}</div>
            <div>{project.description}</div>
            <div>Priority {project.priority} </div>
            <div>Status {project.status} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
