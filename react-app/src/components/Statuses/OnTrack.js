import "./index.css";
const OnTrack = ({ resource }) => {
  return (
    <div className="tag ontrack">
      <p>{resource.status}</p>
    </div>
  );
};

export default OnTrack;
