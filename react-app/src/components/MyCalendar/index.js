import { useSelector } from "react-redux";

import Calendar from "react-awesome-calendar";
import SideBar from "../SideBar";
import "./index.css";

// const events = [
//   {
//     id: 1,
//     color: "#fd3153",
//     from: "2022-05-02T18:00:00+00:00",
//     to: "2022-05-05T19:00:00+00:00",
//     title: "This is an event",
//   },
//   {
//     id: 2,
//     color: "#1ccb9e",
//     from: "2022-05-01T13:00:00+00:00",
//     to: "2022-05-05T14:00:00+00:00",
//     title: "This is another event",
//   },
//   {
//     id: 3,
//     color: "#3694DF",
//     from: "2022-05-05T13:00:00+00:00",
//     to: "2022-05-05T20:00:00+00:00",
//     title: "This is also another event",
//   },
// ];
const MyCalendar = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const tasksObj = useSelector((state) => state.tasks);
    let allTasks = Object.values(tasksObj);
    allTasks = allTasks?.filter((task) => task.assignee_id == sessionUser?.id);
    // console.log(allTasks)

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

    // console.log(events)

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
