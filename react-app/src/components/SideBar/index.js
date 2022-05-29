import "./index.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const SideBar = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <img src="/images/esena.png" alt="logo" />
      </div>
      <div className="sidebar-menu main">
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-solid fa-house fa-lg"></i>
          </span>
          <NavLink to="/" exact={true} activeClassName="selected">
            Home
          </NavLink>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-solid fa-bars-progress fa-lg"></i>
          </span>
          <NavLink to="/my-projects" exact={true} activeClassName="selected">
            My Projects
          </NavLink>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-regular fa-circle-check fa-lg"></i>
          </span>
          <NavLink to="/my-tasks" exact={true} activeClassName="selected">
            My Tasks
          </NavLink>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-solid fa-user fa-lg"></i>
          </span>
          <NavLink to="/my-profile" exact={true} activeClassName="selected">
            My Profile
          </NavLink>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-solid fa-calendar fa-lg"></i>
          </span>
          <NavLink to="/my-calendar" exact={true}>
            My Calendar
          </NavLink>
        </div>
      </div>
      <div className="divider"></div>
      <div className="sidebar-menu secondary">
        <div className="sidebar-menu-item" onClick={onLogout}>
          <span>
            <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
          </span>
          <span>Logout</span>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-about">
          <span>
            <i class="fa-regular fa-circle-question fa-lg"></i>
          </span>
          <span style={{ fontSize: 12 }}>About</span>
        </div>
        <p>© Copyright 2022</p>
      </div>
    </div>
  );
};

export default SideBar;
