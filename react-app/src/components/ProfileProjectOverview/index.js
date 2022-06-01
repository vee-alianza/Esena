import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { viewProfile } from "../../store/profile";
// import "./MyTasks.css";

const ProfileProjectOverview = () => {
  const { userId, projectId } = useParams();
  const dispatch = useDispatch();
  let projects = useSelector((state) => state.profile.projects);
  let project;
  let allTasks;
  if (projects) {
    project = projects[projectId];
    allTasks = Object.values(project?.tasks);
    allTasks = allTasks?.filter(
      (task) => task.project_id == projectId
    );
    allTasks.sort((a, b) => {
      const keyA = new Date(a?.end_date);
      const keyB = new Date(b?.end_date);
      return keyA > keyB ? 1 : -1;
    });
  }
  const sessionUser = useSelector((state) => state.session.user);

  const allUsers = useSelector((state) => state.teammates.allUsers);
  let users = { ...allUsers };
  users[sessionUser?.id] = sessionUser;
  let usersArr = Object.values(users);
  usersArr = usersArr.filter((user) => project?.members.includes(user.id));

  useEffect(async () => {
    await dispatch(viewProfile(userId));
  }, [dispatch]);

  return (
    <div>
      <h1>Project {projectId}</h1>
      <div>
        <h2>Overview</h2>
        <div>{project?.name}</div>
        <div>start date: {project?.start_date}</div>
        <div>end date: {project?.end_date}</div>
        <div>{project?.description}</div>
        <div>
          team members:
          {usersArr.map((user) => (
            <Link to={`/profile/${user.id}`}>
              <span>{user.first_name} </span>
            </Link>
          ))}
        </div>
      </div>
      <h2>tasks</h2>
      <table>
        <tr>
          <th>TASK NAME</th>
          <th>ASSIGNEE</th>
          <th>DUE DATE</th>
          <th>PRIORITY</th>
          <th>STATUS</th>
        </tr>
        {allTasks?.map((task) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{users[task.assignee_id].first_name}</td>
            <td>{task.end_date}</td>
            <td>{task.priority} </td>
            <td>{task.status} </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProfileProjectOverview;
