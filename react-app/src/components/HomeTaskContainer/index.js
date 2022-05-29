import "./index.css";

const HomeTaskContainer = () => {
  return (
    <div className="tasks-container">
      <div className="container-header">
        <h3>Tasks</h3>
        <p>Upcoming Deadlines</p>
      </div>
      <div className="tasks-container-body">
        <div className="task">
          <div className="task-icon">
            <div className="circle-icon">
              <i class="fa-solid fa-list-ul"></i>
            </div>
          </div>
          <div className="task-details">
            <div className="task-name">Task One</div>
            <div className="task-date">Due 7/30/2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTaskContainer;
