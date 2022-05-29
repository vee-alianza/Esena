import TeamPreview from "../TeamPreview";
import "./index.css";

const TeamPreviewContainer = () => {
  return (
    <div className="teammate-container">
      <div className="container-header">
        <h3>People</h3>
        <p>Frequent Collaborators</p>
      </div>
      <div className="teammate-container-body">
        <TeamPreview />
        <TeamPreview />
        <TeamPreview />
        <TeamPreview />
        <TeamPreview />
        <TeamPreview />
      </div>
    </div>
  );
};
export default TeamPreviewContainer;
