import "./index.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src="/images/esena.png" className="logo-404" />
      <div className="not-found-msg">
        404: The requested URL was not found.
      </div>
    </div>
  );
};

export default NotFound;
