import "./index.css";
const TaskPreview = () => {
  return (
    <div className="task">
      <div className="task-icon">
        <div className="circle-icon">
          <i class="fa-regular fa-circle-check fa-lg"></i>
        </div>
      </div>
      <div className="task-details">
        <div className="task-name">Task One</div>
        <div className="task-date">Due 7/30/2022</div>
      </div>
    </div>
  );
};

export default TaskPreview;
