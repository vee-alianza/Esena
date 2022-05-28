import { useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
import "./MyTasks.css";

const MyTasks = () => {
  const tasksObj = useSelector((state) => state.tasks.assignedTasks);
  const allTasks = Object.values(tasksObj);
  for (let task of allTasks) {
    let date = new Date(task.end_date);
    console.log(date);

    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    task.end_date = month + "/" + day + "/" + year;
  }
  return (
    <div>
      <h1>My Tasks</h1>
      <div>
        {allTasks.map((task) => (
          <div className="task-div" key={task.id}>
            <div>{task.name}</div>
            <div>End Date: {task.end_date}</div>
            <div>{task.description}</div>
            <div>Priority {task.priority} </div>
            <div>Priority {task.status} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
