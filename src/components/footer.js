import AiBg from "../images/ai_banner.jpg";
import logo from "../images/new-logo.png"
export default function Footer() {
    var bgStyle = {
        backgroundImage:`url(${AiBg})`,
    };
    return (
        <footer className="footer-one iq-bg-dark iq-over-dark-90" id="contact" style={bgStyle}>
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                            <p className="footer-logo"><img alt="img" src={logo} width="220"/></p>
                            {/* <h2 style={{color:'#fff'}}>Deepaarogya AI</h2> */}
                            <p className="footer-logo" style={{color:'#fff',fontSize:'17px',fontFamily:'Arial, Helvetica, sans-serif'}}>Leveraging AI Innovations for Lifesaving Solutions</p>
                            <ul className="info-share d-inline list-inline">
                                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook-f" style={{color:'#fff',fontSize:'20px'}}></i></a>
                                </li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" style={{color:'#fff',fontSize:'20px'}}></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" style={{color:'#fff',fontSize:'20px'}}></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">
                            <h4 className="footer-title" style={{color:'#fff'}}>Menu</h4>
                            <div className="menu-footer-menu-container">
                                <ul className="menu">
                                    <li className="menu-item"><a href="/about-us" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>About Us</a></li>
                                    <li className="menu-item"><a href="/contact-us" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Contact Us</a></li>
                                    <li className="menu-item"><a href="/contact-us" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Demo</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                            <h4 className="footer-title iq-rmt-30" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Contact us</h4>
                            <ul className="iq-contact">
                                <li><a href="tel:+918979523908"><i style={{color:'#fff'}}
                                    className="fa fa-phone"></i><span style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>+918979523908</span></a></li>
                                <li><a href="mailto:support@aidoctor.com"><i style={{color:'#fff'}}
                                    className="fa fa-envelope"></i><span style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}> contact@deepaarogya.com</span></a></li>
                                <li></li>
                                <li><a><i className="fa fa-home" style={{color:'#fff'}}></i><span style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Plot No-40, Roja jalalpur, Noida Extension</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
