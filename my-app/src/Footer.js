import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
    let [scrollState, setScrollState] = useState({});
    window.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight) {
            setScrollState({display: 'block'});
        } else {
            setScrollState({});
        }
    });
    let handleClick = ()=> {
        document.body.scrollIntoView(true);
    }
    return (
        <footer>
        <div className="footer-flex">
            <div className="reach-us">
                <div className="help" style={{color: "white"}}>SOCIAL MEDIA</div>
                <a><i className="fa fa-facebook"></i></a>
                <a><i className="fa fa-whatsapp"></i></a>
                <a><i className="fa fa-twitter"></i></a>
                <a><i className="fa fa-instagram"></i></a>
                <a><i className="fa fa-telegram"></i></a>
            </div>
            <hr />
            <nav>
                <ul>
                    <div className="grid">
                        <div>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">News</Link></li>
                            <li><Link to="/fixtures">Fixtures</Link></li>
                        </div>
                        <div>
                            <li><Link to="/scores">Livescores</Link></li>
                            <li><Link to="/">Table</Link></li>
                            <li><Link to="/">Leagues</Link></li>
                        </div>
                    </div>
                    <div className="grid">
                        <div>
                            <li><Link to="/">Contact Us</Link></li>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Advertise with us</Link></li>
                        </div>
                        <div>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms and Conditions</Link></li>
                            <li><Link to="/">Write for sportsreal</Link></li>
                        </div>
                    </div>
                </ul>
                <div className="copyright"><i className="fa fa-copyright"></i> Sportsreal 2022. All rights reserved.</div>
            </nav>
        </div>
        <div className="scrollToTop" style={scrollState} onClick={handleClick}><i className="fa fa-arrow-up"></i></div>
    </footer>
    );
}
export default Footer;