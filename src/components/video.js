import HeightBox from "./heightBox";
import videoBg from "../images/connections.gif";
import { useTheme, useMediaQuery } from "@material-ui/core";

export default function VideoSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

    const getResponsiveStyles = () => {
        if (isMobile) {
            return {
                bg_img: {
                    backgroundImage: `url(${videoBg})`,
                    margin: '20px',
                    borderRadius: '10px',
                    padding: '20px'
                },
                title: {
                    fontSize: '28px',
                    lineHeight: '34px',
                    marginBottom: '20px'
                },
                timer: {
                    fontSize: '24px',
                    marginBottom: '15px'
                },
                description: {
                    fontSize: '14px',
                    marginBottom: '15px'
                },
                videoContainer: {
                    marginBottom: '30px'
                }
            };
        } else if (isTablet) {
            return {
                bg_img: {
                    backgroundImage: `url(${videoBg})`,
                    margin: '30px',
                    borderRadius: '12px',
                    padding: '30px'
                },
                title: {
                    fontSize: '32px',
                    lineHeight: '38px',
                    marginBottom: '25px'
                },
                timer: {
                    fontSize: '28px',
                    marginBottom: '20px'
                },
                description: {
                    fontSize: '15px',
                    marginBottom: '20px'
                },
                videoContainer: {
                    marginBottom: '40px'
                }
            };
        } else if (isLaptop) {
            return {
                bg_img: {
                    backgroundImage: `url(${videoBg})`,
                    margin: '35px',
                    borderRadius: '14px',
                    padding: '35px'
                },
                title: {
                    fontSize: '36px',
                    lineHeight: '42px',
                    marginBottom: '30px'
                },
                timer: {
                    fontSize: '32px',
                    marginBottom: '25px'
                },
                description: {
                    fontSize: '16px',
                    marginBottom: '25px'
                },
                videoContainer: {
                    marginBottom: '50px'
                }
            };
        } else {
            return {
                bg_img: {
                    backgroundImage: `url(${videoBg})`,
                    margin: '40px',
                    borderRadius: '15px',
                    padding: '40px'
                },
                title: {
                    fontSize: '42px',
                    lineHeight: '50px',
                    marginBottom: '35px'
                },
                timer: {
                    fontSize: '36px',
                    marginBottom: '30px'
                },
                description: {
                    fontSize: '16px',
                    marginBottom: '30px'
                },
                videoContainer: {
                    marginBottom: '60px'
                }
            };
        }
    };

    const styles = getResponsiveStyles();

    return (
        <section className="bg-img" style={styles.bg_img}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-6 col-md-6 wow fadeInUp align-self-center ${isMobile ? 'order-2' : ''}`} style={styles.videoContainer}>
                        <div className="iq-video-relative">
                            <div className="scroll-effect">
                                <div className="main-video">
                                    <div className="video-img">
                                        <div className="consult-video video-btn">
                                            <div className="btn-waves">
                                                <div className="waves wave-1"></div>
                                                <div className="waves wave-2"></div>
                                                <div className="waves wave-3"></div>
                                            </div>
                                            <a href="https://www.youtube.com/watch?v=qpWkthTjXgE"
                                               className="iq-video popup-youtube">
                                                <i className="fa fa-play" style={{color:'#0d063e'}}></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 ${isMobile ? 'order-1' : ''}`}>
                        <div className="title-box wow fadeInUp text-white text-left">
                            <span className="title-design"></span>
                            <h2 style={{...styles.title, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                Checkout our demo video
                            </h2>
                        </div>
                        <div className="iq-timer style1text-left float-left text-left">
                            <div className="timer-details">
                                <span className="timer" data-to="10" data-speed="5000" style={styles.timer}>10</span>
                                <i className="fa fa-plus" aria-hidden="true" style={{color: "#02E0B8"}}></i>
                                <p style={{...styles.description, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                    Customer love us to develop this model
                                </p>
                            </div>
                        </div>
                        <div className="iq-timer style1text-left float-left text-left">
                            <div className="timer-details">
                                <span className="timer" data-to="80" data-speed="5000" style={styles.timer}>80</span>
                                <i className="fa fa-percent" aria-hidden="true" style={{color: "#02E0B8"}}></i>
                                <p style={{...styles.description, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                    Doctor Satisfaction and found useful this model
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeightBox height={isMobile ? 50 : isTablet ? 75 : 100}/>
        </section>
    );
}
