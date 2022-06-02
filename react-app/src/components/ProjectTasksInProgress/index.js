import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import TableCreateTask from "../CreateTaskForm/TableCreateTask.js";
import EditTaskTableBtn from "../EditTaskForm/EditTaskTableBtn";
import DeleteTaskTableBtn from "../DeleteTaskForm/DeleteTaskTableBtn";
import SingleTask from "../TaskModal/SingleTaskFromProject";
import Low from "../Priorities/Low";
import Medium from "../Priorities/Medium";
import High from "../Priorities/High";
import AtRisk from "../Statuses/AtRisk";
import OffTrack from "../Statuses/OffTrack";
import OnTrack from "../Statuses/OnTrack";
import "./index.css";

const ProjectTasksInProgress = ({ tasks, members }) => {
  const { projectId } = useParams();
  const project = useSelector((state) => state.projects[projectId]);
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
    console.log(resource);
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
    <div>
      <div className="table-header-section progress-header">
        <div className="progress-header-title">
          <h2>In Progress</h2>
          <i className="fa-solid fa-arrows-spin"></i>
        </div>
        {members?.includes(sessionUser.id) ||
        project?.owner_id == sessionUser.id ? (
          <TableCreateTask projectName={project?.name} />
        ) : null}
      </div>
      <table className="progress-table">
        <tr className="progress-table-header">
          <th>TASK NAME</th>
          <th>ASSIGNEE</th>
          <th>DUE DATE</th>
          <th>PRIORITY</th>
          <th>STATUS</th>
          <th></th>
        </tr>
        {tasks?.map((task) => (
          <tr key={task.id} className="task-row">
            <td>
              <SingleTask taskName={task.name} taskId={task.id} />
            </td>
            <td>
              <Link to={`/profile/${task.assignee_id}`}>
                {users[task.assignee_id]?.first_name}
              </Link>
            </td>
            <td>{task.end_date}</td>
            <td className="priority-cell">{renderPriority(task)} </td>
            <td className="status-cell">{renderStatus(task)} </td>
            {task.assigner_id == sessionUser.id ? (
              <td className="options-cell">
                <EditTaskTableBtn
                  taskId={task.id}
                  projectName={project?.name}
                />
                <DeleteTaskTableBtn taskId={task.id} />
              </td>
            ) : null}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProjectTasksInProgress;
