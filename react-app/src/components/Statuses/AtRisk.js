import "./index.css";
const AtRisk = ({ resource }) => {
  return (
    <div className="tag atrisk">
      <p>{resource.status}</p>
    </div>
  );
};

export default AtRisk;
