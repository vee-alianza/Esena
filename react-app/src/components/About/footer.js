import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                {/* <a href="https://github.com/ethanchen7">Ethan Chen</a>

            <a href="https://github.com/lanakomar">Lana Komar</a>

            <a href="https://github.com/vee-alianza">Vee Alianza</a>

            <a href="https://github.com/xwnnie">Xiaowen Nie</a> */}
                <div>
                    <h3>Ethen Chen</h3>
                    <a href="https://travelr-ec.herokuapp.com/">Travelr</a>
                    <a href="https://large-medium.herokuapp.com/">Large</a>

                </div>
                <div>
                    <h3>Lana Komar</h3>
                    <a href="https://eventwild.herokuapp.com/events">Event Wild</a>
                    <a href="https://good-hikes.herokuapp.com/">Good Hikes</a>

                </div>
                <div>
                    <h3>Vee Alianza</h3>
                    <a href="https://mochi-noms.herokuapp.com/">Mochi</a>
                    <a href="https://duckit-list.herokuapp.com/">Duckit List</a>

                </div>
                <div>
                    <h3>Xiaowen Nie</h3>
                    <a href="https://nature-clikr.herokuapp.com/">NatureClikr</a>
                    <a href="https://oraql.herokuapp.com/">Oraql</a>

                </div>

            </div>
        </>
    )
}

export default Footer;
