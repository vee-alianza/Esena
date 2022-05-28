import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CreateTaskModal from "../CreateTaskForm";
// import "./MyTasks.css";

const ProjectTasks = () => {
  const { projectId } = useParams()
  const project = useSelector((state) => state.projects);
  const sessionUser = useSelector((state) => state.session.user);

  const tasksObj = useSelector((state) => state.tasks);
  let allTasks = Object.values(tasksObj);
  allTasks = allTasks?.filter((task) => task.project_id == projectId);

  for (let task of allTasks) {
    let date = new Date(task.end_date);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    task.end_date = month + "/" + day + "/" + year;
  }
  return (
    <div>
      <h1>Project {projectId} Tasks</h1>
      <CreateTaskModal />
      <div>
        {allTasks.map((task) => (
          <div className="task-div" key={task.id}>
            <div>{task.name}</div>
            <div>End Date: {task.end_date}</div>
            <div>{task.description}</div>
            <div>Priority {task.priority} </div>
            <div>Status {task.status} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTasks;
