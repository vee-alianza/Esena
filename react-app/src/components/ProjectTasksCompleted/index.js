import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectTasksCompleted = ({tasks}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const allUsers = useSelector((state) => state.teammates.allUsers);
  const users = { ...allUsers };
  users[sessionUser?.id] = sessionUser;

  return (
    <div>
      <h2>Completed</h2>
      <table>
        <tr>
          <th>TASK NAME</th>
          <th>ASSIGNEE</th>
          <th>DUE DATE</th>
          <th>STATUS</th>
        </tr>
        {tasks?.map((task) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td><Link to={`/profile/${task.assignee_id}`}>{users[task.assignee_id]?.first_name}</Link></td>
            <td>{task.end_date}</td>
            <td>Completed</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProjectTasksCompleted;
