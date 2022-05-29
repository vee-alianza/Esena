import "./index.css";

const TeamPreview = ({member}) => {
  
  return (
    <div className="person">
      <div className="person-icon">
        <div className="person-circle-icon">
          <p>EC</p>
        </div>
      </div>
      <div className="person-details">
        <div className="person-name">{member.first_name} {member.last_name}</div>
        <div className="person-occupation">{member.occupation}</div>
      </div>
    </div>
  );
};
export default TeamPreview;
