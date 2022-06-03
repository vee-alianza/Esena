import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="dev-info-container">
                    <img className="logo-footer" src="/images/logo.png" />
                    <div className="dev-info-footer">
                        <h3>Ethen Chen</h3>
                        <a href="https://travelr-ec.herokuapp.com/">Travelr</a>
                        <a href="https://large-medium.herokuapp.com/">Large</a>
                    </div>
                    <div className="dev-info-footer">
                        <h3>Lana Komar</h3>
                        <a href="https://eventwild.herokuapp.com/events">Event Wild</a>
                        <a href="https://good-hikes.herokuapp.com/">Good Hikes</a>
                    </div>
                    <div className="dev-info-footer">
                        <h3>Vee Alianza</h3>
                        <a href="https://mochi-noms.herokuapp.com/">Mochi</a>
                        <a href="https://duckit-list.herokuapp.com/">Duckit List</a>
                    </div>
                    <div className="dev-info-footer">
                        <h3>Xiaowen Nie</h3>
                        <a href="https://nature-clikr.herokuapp.com/">NatureClikr</a>
                        <a href="https://oraql.herokuapp.com/">Oraql</a>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <p>Python</p>
                        <p>Flask</p>
                        <p>React JS</p>
                        <p>Redux</p>
                        <p>Alembic</p>
                        <p>SQLAlchemy</p>
                        <p>Socket io</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
