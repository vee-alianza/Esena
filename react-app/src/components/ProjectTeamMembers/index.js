import TeamPreview from "../TeamPreview";
import Pencil from "../EditTeammateForm/Pencil";
import "./index.css";

const ProjectTeamMembers = ({ members, projectPage, permissions }) => {
  return (
    <div className="project-team-container">
      <div className="project-team-container-header">
        <h3>Teammates</h3>
        {permissions ? <Pencil /> : ""}
      </div>
      <div className="project-team-container-body">
        {members?.slice(0, 6).map((member, idx) => (
          <TeamPreview key={idx} member={member} projectPage={projectPage} />
        ))}
      </div>
    </div>
  );
};
export default ProjectTeamMembers;
