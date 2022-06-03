import "./index.css";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";

import logo from "../../assets/esena.png";

const SideBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    history.push("/");
    await dispatch(logout());
  };
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar-menu main">
        <div className="sidebar-menu-item">
          <span>
            <i className="fa-solid fa-house fa-lg"></i>
          </span>
          <NavLink to="/" exact={true} activeClassName="selected">
            Home
          </NavLink>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i className="fa-solid fa-bars-progress fa-lg"></i>
          </span>
          <NavLink to="/my-projects" exact={true} activeClassName="selected">
            My Projects
          </NavLink>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i className="fa-regular fa-circle-check fa-lg"></i>
          </span>
          <NavLink to="/my-tasks" exact={true} activeClassName="selected">
            My Tasks
          </NavLink>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i className="fa-solid fa-user fa-lg"></i>
          </span>
          <NavLink
            to={`/profile/${sessionUser?.id}`}
            exact={true}
            activeClassName="selected"
          >
            My Profile
          </NavLink>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i className="fa-solid fa-calendar fa-lg"></i>
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
            <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
          </span>
          <span>Logout</span>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-about">
          <span>
            <i className="fa-regular fa-circle-question fa-lg"></i>
          </span>
          <NavLink to="/about">
            <span style={{ fontSize: 12 }}>About</span>
          </NavLink>
        </div>
        <p>© Copyright 2022</p>
      </div>
    </div>
  );
};

export default SideBar;
