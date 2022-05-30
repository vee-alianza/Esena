import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { viewProfile } from "../../store/profile";

const Profile = () => {
  const { userId } = useParams();
  console.log(userId);
  const dispatch = useDispatch();
  //   const session = useSelector((state) => state.session.user);
  let user = useSelector((state) => state.profile);
  let projects = useSelector((state) => state.profile.projects);
  projects = Object.values(projects);

  let tasks = useSelector((state) => state.profile.tasks);
  tasks = Object.values(tasks);
  tasks = tasks.filter(task => task.assignee_id == user.id)
  console.log(tasks)

  useEffect(() => {
    dispatch(viewProfile(userId));
    console.log("enter dispatch block");
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>{user?.first_name}'s Profile</h1>
        <div>{user?.occupation}</div>
        <div>{user?.email}</div>
        <div>{user?.bio}</div>
      </div>
      <div>
        <h2>Projects</h2>
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
