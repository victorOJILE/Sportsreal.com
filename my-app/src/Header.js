import { useState } from 'react';
import { Link } from "react-router-dom";
function Header() {
    let [dropbtn, setDropBtn] = useState({});
    let [sidenav, handleSideNav] = useState({});
    let [searchdiv, setSearchdiv] = useState({});
    let [searchBtn, setSearchBtn] = useState({ display: "block" });
    let [searchBtn2, setSearchBtn2] = useState({ display: "none" });
    let [background_div, handleBackgroundDiv] = useState({});
    let [background_div_search, setBackgroundDivS] = useState({});
    let handleDropBtnClick = () => {
        handleBackgroundDiv({display: "block"});
        handleSideNav({display: "block"});
    };
    let handleSearchBtnClick = () => {
        setSearchdiv({display: "block"});
        setBackgroundDivS({display: "block"});
        setSearchBtn({display: "none"});
        setSearchBtn2({display: "block"});
        setDropBtn({display: "none"});
    };
    function closeSearch(){
        setSearchdiv({});
        setBackgroundDivS({display: "none"});
        setSearchBtn({display: "block"});
        setSearchBtn2({display: "none"});
        setDropBtn({});
    }
    let handleSearchBtn2Click = () => {
        closeSearch();
    };
    let handleBackgroundDivS = () => {
        closeSearch();
    };
    let handleBackgroundDivClick = () => {
        handleSideNav({});
        handleBackgroundDiv({});
    };
    let handleCloseSidenav = () => {
        handleSideNav({});
        handleBackgroundDiv({});
    };
    window.onresize = (e) => {
        if(window.innerWidth > 920) {
            if(background_div === {display: "block"}) {
                handleBackgroundDiv({});
            }
        }
    }
    return (
        <>
            <header id="toTop">
                <div className="initial-search-div">
                    <button id="searchBtn" title="Open or Close Search Field">
                        <i className="fa fa-search" style={searchBtn} onClick={handleSearchBtnClick} title="Search"></i>
                        <i className="fa fa-close" style={searchBtn2} onClick={handleSearchBtn2Click} title="Close search"></i>
                    </button>
                    <button className="top-demo-btn" aria-label='Login to your account' title='Login to your account'><i className="fa fa-user"></i>&nbsp; Login</button>
                    <button className="dropbtn" id="dropbtn" style={dropbtn} onClick={handleDropBtnClick}>
                        <div className="dropbutton">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </button>
                </div>
                <div className="searchdiv" style={searchdiv}>
                    <div className="search-div">
                        <form action="">
                            <div>
                                <label htmlFor='search' style={{position: "absolute", left: "-3000px"}}>Search website</label>
                                <input type="search" name="search" id='search' placeholder="Search..." />
                                <button type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="side-nav-parent">
                    <div className="side-nav" style={sidenav}>
                        <div style={{ textAlign: "right" }}>
                            <button type="button" title="Close Side Navigation">
                                <i className="fa fa-close" style={{ fontSize: "1.5rem" }} onClick={handleCloseSidenav}></i></button>
                        </div>
                        <nav>
                            <Link to="/" className="active" onClick={handleCloseSidenav}>Home</Link>
                            <Link to="/" onClick={handleCloseSidenav}>Teams</Link>
                            <Link to="/fixtures" onClick={handleCloseSidenav}>Fixtures</Link>
                            <Link to="/scores" onClick={handleCloseSidenav}>Results</Link>
                            <Link to="/scores" onClick={handleCloseSidenav}>Livescores</Link>
                            <Link to="/" onClick={handleCloseSidenav}>Table</Link>
                            <Link to="/" onClick={handleCloseSidenav}>Leagues</Link>
                            <Link to="/" onClick={handleCloseSidenav}>Transfers</Link>
                            <div className="help" style={{ marginBottom: "5px", color: "rgb(216, 105, 15)" }}>Help and Support</div>
                            <a className="hide-link" onClick={handleCloseSidenav}>About Us</a>
                            <a className="hide-link" onClick={handleCloseSidenav}>Advertise with us</a>
                            <a className="hide-link" onClick={handleCloseSidenav}>Contact Us</a>
                            <a className="hide-link" onClick={handleCloseSidenav}>Privacy Policy</a>
                            <a className="hide-link" onClick={handleCloseSidenav}>Terms and Conditions</a>
                        </nav>
                        <div style={{marginBottom: "2rem"}}>
                            <div className="help" style={{ color: "white", fontSize: "11px" }}>
                                You can reach us through the following links:
                            </div>
                            <a><i className="fa fa-facebook"></i></a>
                            <a><i className="fa fa-whatsapp"></i></a>
                            <a><i className="fa fa-twitter"></i></a>
                            <a><i className="fa fa-instagram"></i></a>
                            <a><i className="fa fa-telegram"></i></a>
                        </div>
                    </div>
                </div>
            </header>
            <div id="background-div" style={background_div} onClick={handleBackgroundDivClick}></div>
            <div id="background-div-search" style={background_div_search} onClick={handleBackgroundDivS}></div>
        </>
    );
}

export default Header;
