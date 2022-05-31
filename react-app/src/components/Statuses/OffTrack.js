import "./index.css";
const OffTrack = ({ resource }) => {
  return (
    <div className="tag offtrack">
      <p>{resource.status}</p>
    </div>
  );
};

export default OffTrack;
