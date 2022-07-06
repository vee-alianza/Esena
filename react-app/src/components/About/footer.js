import { Link, NavLink, Redirect } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="dev-info-container">
          <NavLink to="/" className="logo-footer">
            <img src={logo} />
          </NavLink>
          <div className="dev-info-footer-copyright">
            <p>© Copyright 2022</p>
          </div>
          <div className="dev-info-footer">
            <p>Ethan Chen</p>
            <div className="footer-social-links">
              <a href="https://github.com/ethanchen7">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/ethan-chen-3b7070127/">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="dev-info-footer">
            <p>Lana Komar</p>
            <div className="footer-social-links">
              <a href="https://github.com/lanakomar">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/lana-komar/">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="dev-info-footer">
            <p>Vee Alianza</p>
            <div className="footer-social-links">
              <a href="https://github.com/vee-alianza">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/vee-alianza/">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="dev-info-footer">
            <p>Xiaowen Nie</p>
            <div className="footer-social-links">
              <a href="https://github.com/xwnnie">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/xiaowennie/">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
