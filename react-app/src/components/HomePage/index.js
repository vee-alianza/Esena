import SideBar from "../SideBar";
import HomeProjectContainer from "../HomeProjectContainer";
import HomeTaskContainer from "../HomeTaskContainer";
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
          <HomeProjectContainer />
          <HomeTaskContainer />
        </div>
      </div>
    </>
  );
};
export default HomePage;
