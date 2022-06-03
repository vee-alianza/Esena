import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./index.css";

import logo from "../../assets/esena.png";

const NotFound = () => {
  const history = useHistory();
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
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

  const handleOnClick = () => {
    history.push("/")
  }

  return (
    <div className="not-found-container">
      <img src={logo} className="logo-404" alt="page-not-found" onClick={handleOnClick}/>
      <div className="not-found-msg">404: The requested URL was not found.</div>
      <div className="not-found-msg">
        You will be redirected to home page in <span>{timeLeft}</span>{" "}
        seconds...
      </div>
    </div>
  );
};

export default NotFound;
