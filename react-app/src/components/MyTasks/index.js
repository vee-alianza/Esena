import { useSelector } from "react-redux";
import SideBar from "../SideBar";
import Card from "../Card";
import DeleteTaskModal from "../DeleteTaskForm";

import EditTaskModal from "../EditTaskForm";
import "./MyTasks.css";

const MyTasks = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const tasksObj = useSelector((state) => state.tasks);
  let allTasks = Object.values(tasksObj);
  allTasks = allTasks?.filter((task) => task.assignee_id == sessionUser?.id);

  return (
    <div>
      <SideBar />
      <div className="page-container">
        <h1 className="home-header">My Tasks</h1>
        <div className="project-task-container">
          {/* {task.assigner_id == sessionUser.id? <div> <EditTaskModal taskId={task.id}/> <DeleteTaskModal taskId={task.id}/> </div>: null} */}
          {allTasks.map((task) => (
            <Card resource={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
