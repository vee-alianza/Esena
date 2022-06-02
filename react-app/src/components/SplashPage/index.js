import { Link } from "react-router-dom";
import NavBar from "../Navigation";

import "./index.css";

const SplashPage = () => {
  return (
    <div className="splash-container">
        <NavBar />
      {/* <Link to="/login">Get started</Link> */}
    </div>
  );
};

export default SplashPage;
