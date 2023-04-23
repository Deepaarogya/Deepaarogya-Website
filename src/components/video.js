import HeightBox from "./heightBox";
import videoBg from "../images/connections.gif";
var style = {
    bg_img: {
        backgroundImage:`url(${videoBg})`,
        margin: '40px',
        borderRadius: '15px',
        padding: '40px'
    }
}
export default function VideoSection() {

    return (
        <section className="bg-img" style={style.bg_img}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6   wow fadeInUp align-self-center">
                        <div className="iq-video-relative">
                            <div className="scroll-effect  ">
                                <div className="main-video">
                                    <div className="video-img">
                                        <div className="consult-video video-btn">
                                            <div className="btn-waves">
                                                <div className="waves wave-1"></div>
                                                <div className="waves wave-2"></div>
                                                <div className="waves wave-3"></div>
                                            </div>
                                            <a href="https://www.youtube.com/watch?v=LHVqIYu3bjU"
                                               className="iq-video popup-youtube">
                                                <i className="fa fa-play" style={{color:'#0d063e'}}></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="title-box wow fadeInUp text-white  text-left">
                            <span className="title-design"></span>
                            <h2 style={{fontSize:'42px',lineHeight:"50px",fontFamily:'Arial, Helvetica, sans-serif'}}>Checkout our demo video</h2>

                        </div>
                        <div className="iq-timer style1text-left float-left text-left">
                            <div className="timer-details">
                                <span className="timer" data-to="10" data-speed="5000">10</span>
                                <i className="fa fa-plus" aria-hidden="true" style={{color: "#02E0B8"}}></i>
                                <p style={{fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}> Customer love us to develop this model </p>
                            </div>
                        </div>
                        <div className="iq-timer style1text-left  float-left text-left">
                            <div className="timer-details">
                                <span className="timer" data-to="80" data-speed="5000">80</span><i
                                className="fa fa-percent" aria-hidden="true" style={{color: "#02E0B8"}}></i>
                                <p style={{fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}> Doctor Satisfaction
                                    and found useful this model
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeightBox height={100}/>
        </section>
    );
}