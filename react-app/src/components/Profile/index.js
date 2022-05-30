import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  }
  
  let tasks;
  const tasksObj = useSelector((state) => state.profile.tasks);
  if (tasksObj) {
      tasks = Object.values(tasksObj);
      tasks = tasks.filter((task) => task.assignee_id == user.id);
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
        {/* return public projects */}
        {projects.map((project) => (
          <div>
            <div>{project.id}</div>
            <div>{project.name}</div>
            <div>{project.description}</div>
          </div>
        ))}
      </div>
      <div>
        <h2>Tasks</h2>
        {tasks.map((task) => (
          <div>
            <div>{task.id}</div>
            <div>{task.name}</div>
            <div>{task.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
