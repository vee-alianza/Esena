import { useHistory } from "react-router-dom";
import "./index.css";

const TeamPreview = ({ member, projectPage }) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/profile/${member?.id}`);
  };
  return (
    <div className="person" onClick={handleOnClick}>
      <div className="person-icon">
        <div
          className={`person-circle-icon ${
            projectPage ? "project-person" : ""
          }`}
        >
          <p>{`${member?.first_name.charAt(0).toUpperCase()}${member?.last_name
            .charAt(0)
            .toUpperCase()}`}</p>
        </div>
      </div>
      <div className="person-details">
        <div className="person-name">
          {member?.first_name} {member?.last_name}
        </div>
        <div className="person-occupation">{member?.occupation}</div>
      </div>
    </div>
  );
};
export default TeamPreview;
