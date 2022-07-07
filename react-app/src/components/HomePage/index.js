import { useSelector } from "react-redux";

import SideBar from "../SideBar";
import HomeProjectContainer from "../HomeProjectContainer";
import HomeTaskContainer from "../HomeTaskContainer";
import "./index.css";
import TeamPreviewContainer from "../TeamPreviewContainer";



const HomePage = () => {
  const session = useSelector((state) => state.session.user);
  const projects = useSelector((state) => state.projects);
  const tasks = useSelector((state) => state.tasks);
  const teammates = useSelector((state) => state.teammates.teammates);
  const allUsers = useSelector((state) => state.teammates.allUsers);

  let collaborators = [...teammates];
  // console.log(collaborators)
  collaborators = collaborators.filter((user) => user.id != session.id);
  // delete collaborators[session.id];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let tod = "";
  const today = new Date();
  if (today.getHours() < 12) {
    tod = "morning";
  } else if (today.getHours() >= 12 && today.getHours() < 17) {
    tod = "afternoon";
  } else {
    tod = "evening";
  }
  return (
    <>
      <SideBar />
      <div className="page-container">
        <div className="home-header">
          <h1>Home</h1>
        </div>
        <div className="greeting-container">
          <p>{`${days[today.getDay()]}, ${
            months[today.getMonth()]
          } ${today.getDate()}`}</p>
          <h3>{`Good ${tod}, ${session?.first_name}`}</h3>
        </div>
        <div className="resource-container">
          <HomeProjectContainer projects={projects} />
          <HomeTaskContainer tasks={tasks} />
        </div>
        <div className="team-container">
          <TeamPreviewContainer allUsers={allUsers} teammates={collaborators} />
        </div>
      </div>
    </>
  );
};
export default HomePage;
