import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
        <tr className="progress-table-header">
          <th>TASK NAME</th>
          <th>ASSIGNEE</th>
          <th>DUE DATE</th>
          <th>STATUS</th>
        </tr>
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
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProjectTasksCompleted;
