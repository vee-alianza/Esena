import { useSelector } from "react-redux";

import Calendar from "react-awesome-calendar";
import SideBar from "../SideBar";
import "./index.css";

const MyCalendar = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const tasksObj = useSelector((state) => state.tasks);
    let allTasks = Object.values(tasksObj);
    allTasks = allTasks?.filter((task) => task.assignee_id == sessionUser?.id);

    const colors = {
      1: "rgba(186, 207, 249, 0.4)",
      2: "rgba(239, 221, 211, 0.4)",
      3: "rgba(245, 189, 191, 0.4)",
    };
    const events = allTasks?.map(task => (
      {
        id: task.id,
        color: colors[task.priority_id],
        from: task.create_date,
        to: task.end_date,
        title: task.name
      }
    ))

  return (
    <div>
      <SideBar />
      <div className="calendar-container">
        <Calendar events={events} />
      </div>
      <div className="calendar-legend">
        <div className="color-box-container">
          <div className="color-box-low"></div>
          <div className="color-box-label">Low Priority</div>
        </div>
        <div className="color-box-container">
          <div className="color-box-medium"></div>
          <div className="color-box-label">Medium Priority</div>
        </div>
        <div className="color-box-container">
          <div className="color-box-high"></div>
          <div className="color-box-label">High Priority</div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
