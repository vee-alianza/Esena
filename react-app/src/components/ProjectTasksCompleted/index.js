import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteTaskTableBtn from "../DeleteTaskForm/DeleteTaskTableBtn";
import Completed from "../Statuses/Completed";
import "./index.css";

const ProjectTasksCompleted = ({ tasks }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const users = { ...allUsers };
  users[sessionUser?.id] = sessionUser;

  return (
    <div className="completed-section">
      <div className="table-header-section">
        <h2>Completed</h2>
        <i className="fa-regular fa-circle-check table-check"></i>
      </div>
      <table className="progress-table">
        <thead>
          <tr className="progress-table-header">
            <th>TASK NAME</th>
            <th>ASSIGNEE</th>
            <th>DUE DATE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <tr key={task.id} className="task-row">
              <td className="task-name-cell">{task.name}</td>
              <td>
                <Link to={`/profile/${task.assignee_id}`}>
                  {users[task.assignee_id]?.first_name}
                </Link>
              </td>
              <td>{task.end_date}</td>
              <td>
                <Completed />
              </td>
              {task.assigner_id == sessionUser.id ? (
                <td align="right" className="options-cell">
                  <DeleteTaskTableBtn taskId={task.id} taskname={task.name} />
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTasksCompleted;
