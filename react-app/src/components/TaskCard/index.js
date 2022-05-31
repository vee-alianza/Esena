import "./index.css";
const TaskCard = ({ task }) => {
  return (
    <div className="project-task-div" key={task.id}>
      <div className="purple-box">
        <div className="project-task-letters">
          {task.name.split(" ").at(0).charAt(0).toUpperCase()}
          {task.name.split(" ").at(1).charAt(0).toUpperCase()}
        </div>
      </div>
      <div className="project-task-details-container">
        <div className="project-task-details">
          <div className="project-task-name">{task.name}</div>
          <div className="project-task-end-date">End Date: {task.end_date}</div>
          <div className="project-task-description">{task.description}</div>
        </div>
        <div className="card-footer">
          <div className="project-task-priority">
            <p>Priority</p>
            <div className="tag">
              <p>{task.priority}</p>
            </div>
          </div>
          <div className="project-task-status">
            <p>Status</p>
            <div className="tag">
              <p>{task.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
