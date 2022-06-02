import TeamPreview from "../TeamPreview";
import "./index.css";

const TeamPreviewContainer = ({ allUsers, teammates }) => {
  return (
    <div className="teammate-container">
      <div className="container-header">
        <h3>People</h3>
        <p>Frequent Collaborators</p>
      </div>
      <div className="teammate-container-body">
        {teammates
          ? teammates.slice(0, 6).map((userId, idx) => {
              return (
                <TeamPreview
                  member={allUsers[parseInt(userId)]}
                  key={`member-${idx}`}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default TeamPreviewContainer;
