import "./index.css";

const Low = ({ resource }) => {
  return (
    <div className="tag low">
      <p>{resource.priority}</p>
    </div>
  );
};

export default Low;
