import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./index.css";

const NotFound = () => {
    const history = useHistory();
    const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/")
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="not-found-container">
      <img
        src="/images/esena.png"
        className="logo-404"
        alt="page-not-found"
        />
      <div className="not-found-msg">
        404: The requested URL was not found.
      </div>
      <div className="not-found-msg">
        You will be redirected to home page in <span>{timeLeft}</span> seconds...
      </div>
    </div>
  );
};

export default NotFound;
