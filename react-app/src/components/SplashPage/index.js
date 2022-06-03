import { NavLink } from "react-router-dom";
import NavBar from "../Navigation";

import "./index.css";

const SplashPage = () => {
  return (
    <div className="splash-container">
      <NavBar />

      <div className="splash-body-container">
        <div className="first-display">
          <div className="first-display-left-text">
            <h1>The only project management tool you need</h1>
            <p>
              Connect all your team's projects and tasks in Esena - and unlock a
              new level of collaboration.
            </p>
            <div className="splash-divider"></div>
            <p>Designed and built by a team of four developers.</p>
            <button className="nav-login-btn">
              <NavLink to="/login" exact={true} activeClassName="active">
                Get Started
              </NavLink>
            </button>
          </div>
          <div className="splash-image-box">
            <img src="/images/splashimg1.jpeg" />
            <img src="/images/splashimg2.jpeg" />
            <button id="splash-task-1">
              <i className="fa-regular fa-circle-check splash-check"></i>Draft
              Q3 Budget
            </button>
            <button id="splash-task-2">
              <i className="fa-regular fa-circle-check splash-check"></i>
              Launch marketing campaign
            </button>
            <button id="splash-task-3">
              <i className="fa-regular fa-circle-check splash-check"></i>
              Discuss performance metrics
            </button>
          </div>
        </div>
        <div className="second-display">
          <div className="second-display-left-text">
            <p>PROJECT MANAGEMENT</p>
            <h3>Stay Organized and Connected</h3>
            <p>
              Be able to view each project's outstanding assignments. Assign
              teammates and deadlines to specific tasks.
            </p>
          </div>
          <div className="splash-image-box-2">
            <img src="/images/splashexample1.png" />
          </div>
        </div>
        <div className="third-display">
          <div className="splash-image-box-3">
            <img src="/images/splashexample1.png" />
          </div>
          <div className="third-display-left-text">
            <h3>Workload Transparency</h3>
            <p>
              View your work capacity at all times. Coordinate and assign
              projects and tasks for efficient collaboration.{" "}
            </p>
          </div>
        </div>
        <div className="third-display">
          <div className="third-display-left-text">
            <h3>Set Priorities</h3>
            <p>
              Teams see immediately what work needs to be done, which tasks and
              projects are a priority, and when work is due.
            </p>
            <p>
              <NavLink to="/login" exact={true} className="toggle">
                Get Started <i className="fa-solid fa-arrow-right-long"></i>
              </NavLink>
            </p>
          </div>
          <div className="splash-image-box-2">
            <img src="/images/splashexample1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
