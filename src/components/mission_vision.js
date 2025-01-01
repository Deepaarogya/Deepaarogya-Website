import bgImage from '../images/AI-into-Healthcare-webinar.jpg';
import box1 from '../images/01.png';
import box2 from '../images/02.png';
import box3 from '../images/03.png';
export default function MissionVision() {
    var style = {
        gradient_bg:{
            background: 'linear-gradient(90deg, rgba(33,130,254,1) 0%, rgba(141,95,250,1) 37%, rgba(161,89,249,1) 71%, rgba(226,68,247,1) 100%)'
        },
    }
    return (
        <section>
            <div className="container">
                <div className="row xamin-bg">
                    <div className="col-sm-12 offset-md-1 offset-lg-1 col-md-10 col-lg-10 wow fadeInUp text-center">
                        <div>
                            <div className="title-box text-center">
                                <h2 className="mb-0" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Demo video</h2>
                            </div>
                            <div className="scroll-effect">
                                <img src={bgImage} className="img-fluid img-one" alt="#"/>
                                <div className="main-video">
                                    <div className="video-img">
                                        <div className="consult-video video-btn">
                                            <div className="btn-waves">
                                                <div className="waves wave-1"></div>
                                                <div className="waves wave-2"></div>
                                                <div className="waves wave-3"></div>
                                            </div>
                                            <a href="https://www.youtube.com/watch?v=qpWkthTjXgE"
                                               className="iq-video popup-youtube"><i className="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-sm-12">
                        <div className="service-box mt-5 mb-0 wow fadeInUp  text-left" data-wow-delay="0.6s" style={{background:'#121228'}}>
                            <img src={box1} alt="fancybox"/>
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Mission</h4>
                                    <p style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Our mission is to utilize AI-based solutions to mitigate the risk of mortality caused by unidentified diseases.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="service-box mt-5 mb-0 wow fadeInUp  text-left" data-wow-delay="1s" style={style.gradient_bg}>
                            <img src={box2} alt="fancybox"/>
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Vision</h4>
                                    <p style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Our vision is to assist the healthcare ecosystem in identifying crucial areas of patient care that necessitate enhancement. </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="service-box mt-5 mb-0 wow fadeInUp  text-left" data-wow-delay="1.2s" style={{background:'#121228'}}>
                            <img src={box3} alt="fancybox"/>
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Goal</h4>
                                    <p style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Our goal is to develop software that can accurately scan various types of medical imaging, such as X-rays and CT scans, and promptly detect different diseases. </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}