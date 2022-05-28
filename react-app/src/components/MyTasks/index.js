import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./MyTasks.css";

const MyTasks = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const tasksObj = {
      1: {
        assignee_id: 2,
        assigner_id: 1,
        comments: {
          1: {
            author_id: 2,
            content: "Do we need user stories?",
            create_date: "Fri, 27 May 2022 00:00:00 GMT",
            task: "create docs",
          },
        },
        create_date: "Fri, 27 May 2022 00:00:00 GMT",
        description: "feature list, user stories, database schema",
        end_date: "Sat, 01 Oct 2022 00:00:00 GMT",
        id: 1,
        is_completed: false,
        name: "create docs",
        priority: "Low",
        project: "flask project",
        status: "On track",
      },
      3: {
        assignee_id: 2,
        assigner_id: 4,
        comments: {},
        create_date: "Fri, 27 May 2022 00:00:00 GMT",
        description: "test",
        end_date: "Thu, 19 May 2022 00:00:00 GMT",
        id: 3,
        is_completed: false,
        name: "test",
        priority: "Low",
        project: "flask project",
        status: "Off track",
      },
      4: {
        assignee_id: 2,
        assigner_id: 4,
        comments: {},
        create_date: "Fri, 27 May 2022 00:00:00 GMT",
        description: "test",
        end_date: "Fri, 27 May 2022 00:00:00 GMT",
        id: 4,
        is_completed: false,
        name: "May 27",
        priority: "Medium",
        project: "flask project",
        status: "At risk",
      },
    };

    const allTasks = Object.values(tasksObj);
    for (let task of allTasks) {
        let date = new Date(task.end_date)
        console.log(date)
        
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
}

export default MyTasks;