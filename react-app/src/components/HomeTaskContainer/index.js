import TaskPreview from "../TaskPreview";
import "./index.css";

const HomeTaskContainer = () => {
  return (
    <div className="tasks-container">
      <div className="container-header">
        <h3>Tasks</h3>
        <p>Upcoming Deadlines</p>
      </div>
      <div className="tasks-container-body">
        <TaskPreview />
        <TaskPreview />
        <TaskPreview />
        <TaskPreview />
      </div>
    </div>
  );
};

export default HomeTaskContainer;
