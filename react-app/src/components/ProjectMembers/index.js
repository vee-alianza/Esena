import TeamPreview from "../TeamPreview";
import "./index.css";

const ProjectMembers = ({ members }) => {
    return (
        <div className="teammate-container">
            <div className="teammate-container-body">
                {members?.map((member, idx) => (
                    <TeamPreview key={idx} member={member} />
                ))
                }
            </div>
        </div>
    );
};
export default ProjectMembers;
