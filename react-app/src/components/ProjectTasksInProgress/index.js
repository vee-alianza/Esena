import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CreateTaskModal from "../CreateTaskForm";
import EditTaskModal from "../EditTaskForm";
import DeleteTaskModal from "../DeleteTaskForm";
import TaskModal from "../TaskModal"
// import "./MyTasks.css";

const ProjectTasksInProgress = () => {
  const { projectId } = useParams();
  const project = useSelector((state) => state.allProjects?.projects[projectId]);
  //   console.log("********", project)
  const sessionUser = useSelector((state) => state.session.user);

  const allUsers = useSelector((state) => state.teammates.allUsers);
  const users = { ...allUsers }
  users[sessionUser?.id] = sessionUser;

  const tasksObj = useSelector((state) => state.tasks);
  let allTasks = Object.values(tasksObj);
  // console.log(allTasks)
  allTasks = allTasks?.filter(
    (task) => task.project_id == projectId && task.is_completed == false
  );
  allTasks.sort((a, b) => {
    const keyA = new Date(a?.end_date);
    const keyB = new Date(b?.end_date);
    return keyA > keyB ? 1 : -1;
  });

  // for (let task of allTasks) {
  //   let date = new Date(task.end_date);
  //   let year = date.getFullYear();
  //   let month = (1 + date.getMonth()).toString().padStart(2, "0");
  //   let day = date.getDate().toString().padStart(2, "0");

  //   task.end_date = month + "/" + day + "/" + year;
  // }

  return (
    <div>
      <h1>Project {projectId} Tasks</h1>
      <h2>In Progress</h2>
      {project?.members.includes(sessionUser.id) ? (
        <CreateTaskModal projectName={project.name} />
      ) : null}
      <table>
        <tr>
          <th>TASK NAME</th>
          <th>ASSIGNEE</th>
          <th>DUE DATE</th>
          <th>PRIORITY</th>
          <th>STATUS</th>
        </tr>
        {allTasks.map((task) => (
          <tr key={task.id}>
            <TaskModal taskName={task.name} taskId={task.id}/>
            <td>{users[task.assignee_id].first_name}</td>
            <td>{task.name}</td>
            <td>
              <Link to={`/profile/${task.assignee_id}`}>
                {users[task.assignee_id]?.first_name}
              </Link>
            </td>
            <td>{task.end_date}</td>
            <td>{task.priority} </td>
            <td>{task.status} </td>
            {task.assigner_id == sessionUser.id ? (
              <div>
                {" "}
                <EditTaskModal
                  taskId={task.id}
                  projectName={project?.name}
                />{" "}
                <DeleteTaskModal taskId={task.id} />{" "}
              </div>
            ) : null}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProjectTasksInProgress;
