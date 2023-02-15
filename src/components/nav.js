import React from "react";
import logo from "../images/new-logo.png";
export default function Nav() {

    return (
        <header className="style-one style-two" id="main-header">

            <div className="container-fluid main-header">
                <div className="row">
                    <div className="col-sm-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="/">
                                {/* <span style={{fontSize:'22px',color:'#fff',fontWeight:'bold'}}>AIDoc</span> */}
                                <img className="img-fluid logo" src={logo} alt="xamin"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation"><span
                                className="navbar-toggler-icon"><i className="ion-navicon"></i></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="menu-main-menu-container">
                                    <ul id="top-menu" className="navbar-nav ml-auto" style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>
                                        <li className="menu-item current-menu-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/about-us" >About Us</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/contact-us">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sub-main">
                                <nav aria-label="breadcrumb">
                                    <div className="blue-btn button"><a href="/demo" style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Demo</a></div>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}