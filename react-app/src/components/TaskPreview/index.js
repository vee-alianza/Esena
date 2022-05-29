import "./index.css";
const TaskPreview = ({task}) => {
  return (
    <div className="task">
      <div className="task-icon">
        <div className="circle-icon">
          <i className="fa-regular fa-circle-check fa-lg"></i>
        </div>
      </div>
      <div className="task-details">
        <div className="task-name">{task.name}</div>
        <div className="task-date">{task.end_date}</div>
      </div>
    </div>
  );
};

export default TaskPreview;
