import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { viewProfile } from "../../store/profile";

const Profile = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const { userId } = useParams();

  let user = useSelector((state) => state.profile);

  useEffect(async () => {
    await dispatch(viewProfile(userId));
    setLoaded(true);
  }, [dispatch]);

  let projects;
  const projectsObj = useSelector((state) => state.profile.projects);
  if (projectsObj) {
    projects = Object.values(projectsObj);
    projects = projects.filter((project) => project?.is_private == false);
    projects.sort((a, b) => {
      const keyA = new Date(a?.start_date);
      const keyB = new Date(b?.start_date);
      return keyA > keyB ? -1 : 1;
    });
  }

  let tasks;
  const tasksObj = useSelector((state) => state.profile.tasks);
  if (tasksObj) {
    tasks = Object.values(tasksObj);
    tasks = tasks.filter((task) => task.assignee_id == user.id);
    tasks.sort((a, b) => {
      const keyA = new Date(a?.create_date);
      const keyB = new Date(b?.create_date);
      return keyA > keyB ? -1 : 1;
    });
  }

  if (!loaded) {
    return null;
  }
  return (
    <div>
      <h1>{user?.first_name}'s Profile</h1>
      <div>
        <div>
          {user?.first_name} {user?.first_name}
        </div>
        <div>{user?.occupation}</div>
        <div>{user?.email}</div>
        <div>{user?.bio}</div>
      </div>
      <div>
        <h2>Projects</h2>
        {projects.length > 0 ? (
          projects.map((project) => (
            <Link to={`/profile/${user.id}/projects/${project.id}`}>
              <div>{project.id}</div>
              <div>{project.name}</div>
              <div>{project.description}</div>
            </Link>
          ))
        ) : (
          <div>No public projects</div>
        )}
      </div>
      <div>
        <h2>Tasks</h2>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div>
              <div>{task.id}</div>
              <div>{task.name}</div>
              <div>{task.description}</div>
            </div>
          ))
        ) : (
          <div> No tasks yet </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
