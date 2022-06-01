import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import SideBar from "../SideBar";
import TeamPreviewContainer from "../TeamPreviewContainer";
import "./index.css";

const SingleProjectPreview = () => {
  const { projectId } = useParams();
  const projects = useSelector(state => state.projects);
  const allUsers = useSelector(state => state.teammates.allUsers);
  const teammates = useSelector(state => state.teammates.teammates);
  const profileProjects = useSelector(state => state.profile);
  const project = projects[parseInt(projectId)];

  const calculatePercentage = () => {
    let numCompleted = 0;
    Object.values(project.tasks).forEach(task => {
      if (task.is_completed) {
        numCompleted++;
      }
    });
    return Math.floor((numCompleted / Object.values(project.tasks).length) * 100);
  };

  return (
    <>
      <div className="project-view">
        <SideBar />
        {project &&
          <div className="single-project-view">
            <h1>{project.name}</h1>
            <div className="tabs">
              <p>Overview</p>
              <p>Tasks</p>
              <div className="project-description">
                <h3>Description</h3>
                <p>{project.description}</p>
                <div className="progress-bar">
                  <h3>Progress</h3>
                  <div className="progress-percent">
                    <ProgressBar percent={calculatePercentage()} />
                    <div className="project-teammates">
                      <h3>Teammates</h3>
                      {project.members.map((memberId, idx) => {
                        const member = allUsers[parseInt(memberId)];
                        return (
                          <p key={idx}>
                            {member?.first_name}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TeamPreviewContainer allUsers={allUsers} teammates={teammates} />
          </div>
        }
      </div>
    </>
  );
};


export default SingleProjectPreview;
