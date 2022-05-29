import TaskPreview from "../TaskPreview";
import "./index.css";

const HomeTaskContainer = ({tasks}) => {
  return (
    <div className="tasks-container">
      <div className="container-header">
        <h3>Tasks</h3>
        <p>Upcoming Deadlines</p>
      </div>
      <div className="tasks-container-body">
      {tasks ? Object.keys(tasks).slice(0,4).map((key, idx) => {
          return <TaskPreview task={tasks[key]} key={`task-${idx}`}/>
        }) : ""}
      </div>
    </div>
  );
};

export default HomeTaskContainer;
