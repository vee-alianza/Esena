import SideBar from "../SideBar";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <SideBar />
      <div className="page-container">
        <div className="home-header">
          <h1>Home</h1>
        </div>
        <div className="greeting-container">
          <p>Tuesday, May 24</p>
          <h3>Good evening, Ethan</h3>
        </div>
        <div className="resource-container">
          <div className="projects-container">
            <div className="container-header">
              <h3>Projects</h3>
              <p>Recents</p>
            </div>
          </div>
          <div className="tasks-container">
            <div className="container-header">
              <h3>Tasks</h3>
              <p>Upcoming Deadlines</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
