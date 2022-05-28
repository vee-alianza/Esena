import "./index.css";

const SideBar = () => {
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
          <span>Home</span>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-solid fa-bars-progress fa-lg"></i>
          </span>
          <span>My Projects</span>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-regular fa-circle-check fa-lg"></i>
          </span>
          <span>My Tasks</span>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-solid fa-user fa-lg"></i>
          </span>
          <span>My Profile</span>
        </div>
        <div className="sidebar-menu-item">
          <span>
            <i class="fa-solid fa-calendar fa-lg"></i>
          </span>
          <span>My Calendar</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="sidebar-menu secondary">
        <div className="sidebar-menu-item">
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
