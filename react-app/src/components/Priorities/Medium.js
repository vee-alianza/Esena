import "./index.css";
const Medium = ({ resource }) => {
  return (
    <div className="tag medium">
      <p>{resource.priority}</p>
    </div>
  );
};

export default Medium;
