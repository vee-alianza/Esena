import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// import CreateTaskModal from "../CreateTaskForm";
// import EditTaskModal from "../EditTaskForm";
// import DeleteTaskModal from "../DeleteTaskForm";
// import "./MyTasks.css";

const ProjectTasksCompleted = () => {
  const { projectId } = useParams();
  const project = useSelector((state) => state.projects[projectId]);
  //   console.log("********", project)
  const sessionUser = useSelector((state) => state.session.user);
  const allUsers = useSelector((state) => state.teammates.allUsers);
  allUsers[sessionUser?.id] = sessionUser;

  const tasksObj = useSelector((state) => state.tasks);
  let allTasks = Object.values(tasksObj);
//   console.log(allTasks);
  allTasks = allTasks?.filter(
    (task) => task.project_id == projectId && task.is_completed == true
  );

    allTasks.sort((a, b) => {
        const keyA = new Date(a?.end_date);
        const keyB = new Date(b?.end_date);
        return keyA > keyB ? -1 : 1;
    });

  for (let task of allTasks) {
    let date = new Date(task.end_date);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    task.end_date = month + "/" + day + "/" + year;
  }

  return (
    <div>
      <h2>Completed</h2>
      {/* {project?.members.includes(sessionUser.id) ? <CreateTaskModal /> : null} */}
      <table>
        <tr>
          <th>TASK NAME</th>
          <th>ASSIGNEE</th>
          <th>DUE DATE</th>
          <th>STATUS</th>
        </tr>
        {allTasks.map((task) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{allUsers[task.assignee_id]?.first_name}</td>
            <td>{task.end_date}</td>
            <td>Completed</td>
            {/* {task.assigner_id == sessionUser.id ? (
              <div>
                {" "}
                <EditTaskModal taskId={task.id} />{" "}
                <DeleteTaskModal taskId={task.id} />{" "}
              </div>
            ) : null} */}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProjectTasksCompleted;
