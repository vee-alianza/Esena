import { useSelector } from "react-redux";
import SideBar from "../SideBar";
import Card from "../Card";
import "./MyTasks.css";

const MyTasks = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const tasksObj = useSelector((state) => state.tasks);
  let allTasks = Object.values(tasksObj);
  allTasks = allTasks?.filter((task) => task.assignee_id == sessionUser?.id);

  allTasks.sort((a, b) => {
    const keyA = new Date(a?.end_date);
    const keyB = new Date(b?.end_date);
    return keyA > keyB ? 1 : -1;
  });

  return (
    <div>
      <SideBar />
      <div className="page-container">
        <div className="home-header">
          <h1>My Tasks</h1>
        </div>
        <div className="project-task-container">
          {/* {task.assigner_id == sessionUser.id? <div> <EditTaskModal taskId={task.id}/> <DeleteTaskModal taskId={task.id}/> </div>: null} */}
          {allTasks.map((task) => (
            <Card resource={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
