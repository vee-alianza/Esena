import Low from "../Priorities/Low";
import Medium from "../Priorities/Medium";
import High from "../Priorities/High";
import OffTrack from "../Statuses/OffTrack";
import AtRisk from "../Statuses/AtRisk";
import OnTrack from "../Statuses/OnTrack";

import "./index.css";

const TaskCard = ({ resource }) => {
  const renderPriority = (resource) => {
    if (resource.priority === "Low") {
      return <Low resource={resource} />;
    }
    if (resource.priority === "Medium") {
      return <Medium resource={resource} />;
    }
    if (resource.priority === "High") {
      return <High resource={resource} />;
    }
  };

  const renderStatus = (resource) => {
    if (resource.status === "Off track") {
      return <OffTrack resource={resource} />;
    }
    if (resource.status === "At risk") {
      return <AtRisk resource={resource} />;
    }
    if (resource.status === "Off track") {
      return <OnTrack resource={resource} />;
    }
  };

  return (
    <div className="project-task-div" key={resource.id}>
      <div className="purple-box">
        <div className="project-task-letters">
          {resource.name.split(" ").at(0).charAt(0).toUpperCase()}
          {resource.name.split(" ").at(1).charAt(0).toUpperCase()}
        </div>
      </div>
      <div className="project-task-details-container">
        <div className="project-task-details">
          <div className="project-task-name">{resource.name}</div>
          <div className="project-task-end-date">
            End Date: {resource.end_date}
          </div>
          <div className="project-task-description">{resource.description}</div>
        </div>
        <div className="card-footer">
          <div className="project-task-priority">
            <p>Priority</p>
            {renderPriority(resource)}
          </div>
          <div className="project-task-status">
            <p>Status</p>
            {renderStatus(resource)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
