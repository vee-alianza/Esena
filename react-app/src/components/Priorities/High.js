import "./index.css";
const High = ({ resource }) => {
  return (
    <div className="tag high">
      <p>{resource.priority}</p>
    </div>
  );
};

export default High;
