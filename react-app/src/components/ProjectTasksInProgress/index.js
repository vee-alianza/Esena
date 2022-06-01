import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CreateTaskModal from "../CreateTaskForm";
import EditTaskModal from "../EditTaskForm";
import DeleteTaskModal from "../DeleteTaskForm";
import TaskModal from "../TaskModal"
// import "./MyTasks.css";

const ProjectTasksInProgress = ({tasks, members}) => {
  const { projectId } = useParams();
  const project = useSelector((state) => state.projects[projectId]);
  //   console.log("********", project)
  const sessionUser = useSelector((state) => state.session.user);

  const allUsers = useSelector((state) => state.teammates.allUsers);
  const users = { ...allUsers }
  users[sessionUser?.id] = sessionUser;

  return (
    <div>
      <h2>In Progress</h2>
      {members?.includes(sessionUser.id) ? (
        <CreateTaskModal projectName={project?.name} />
      ) : null}
      <table>
        <tr>
          <th>TASK NAME</th>
          <th>ASSIGNEE</th>
          <th>DUE DATE</th>
          <th>PRIORITY</th>
          <th>STATUS</th>
        </tr>
        {tasks?.map((task) => (
          <tr key={task.id}>
            <td>
              <TaskModal taskName={task.name} taskId={task.id} />
            </td>
            {/* <td>{users[task.assignee_id].first_name}</td> */}
            {/* <td>{task.name}</td> */}
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
