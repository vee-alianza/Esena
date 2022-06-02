import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Low from "../Priorities/Low";
import Medium from "../Priorities/Medium";
import High from "../Priorities/High";
import OnTrack from "../Statuses/OnTrack";
import AtRisk from "../Statuses/AtRisk";
import OffTrack from "../Statuses/OffTrack";
import "./index.css";

const ProjectTasksCompleted = ({ tasks }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const users = { ...allUsers };
  users[sessionUser?.id] = sessionUser;

  const renderPriority = (resource) => {
    if (resource.priority === "Low") {
      return <Low resource={resource} />;
    }
    if (resource.priority === "Medium") {
      return <Medium resource={resource} />;
    }
    if (resource.priority === "High") {
      return <High resource={resource} />;
    }
  };

  const renderStatus = (resource) => {
    if (resource.status === "Off track") {
      return <OffTrack resource={resource} />;
    }
    if (resource.status === "At risk") {
      return <AtRisk resource={resource} />;
    }
    if (resource.status === "On track") {
      return <OnTrack resource={resource} />;
    }
  };

  return (
    <div className="completed-section">
      <div className="table-header-section">
        <h2>Completed</h2>
        <i className="fa-regular fa-circle-check"></i>
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
            <td>{task.name}</td>
            <td>
              <Link to={`/profile/${task.assignee_id}`}>
                {users[task.assignee_id]?.first_name}
              </Link>
            </td>
            <td>{task.end_date}</td>
            <td>Completed Tag</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProjectTasksCompleted;
