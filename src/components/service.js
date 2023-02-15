import service1 from '../images/New Project(1).png';
import service2 from '../images/02.png';
import service3 from '../images/03.png';
import service4 from '../images/service_img.png';
import HeightBox from "./heightBox";
var style = {
    gradient_bg:{
        background: 'linear-gradient(90deg, rgba(33,130,254,1) 0%, rgba(141,95,250,1) 37%, rgba(161,89,249,1) 71%, rgba(226,68,247,1) 100%)'
    },
}
export  default function Service() {

    return (
        <div style={{background:'#07071C'}}>
        <section className="aboutus-two-service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-center" style={{background:'#121228'}}>
                            <img className="fancy-list-img" src={service1} alt="fancy-list"/>
                            <div className="service-detail align-self-center">
                                <h4 className="mb-2" style={{color:'#fff'}}>X-rays</h4>
                                <p style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif',letterSpacing:'0.5px'}}>
                                    X-rays are dense and often unwieldy documents that cover a patient's medical history and treatment plan
                                    and these X-rays are notoriously difficult to scan through quickly.
                                    Our AI models are capable of "reading" through records and extracting the most important information. The model can then present the data in an easy-to-read format. </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-center" style={style.gradient_bg
                        }>
                            <img className="fancy-list-img" src={service2} alt="fancy-list"/>
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{color:'#fff'}}>Hospitals</h4>
                                    <p style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif',letterSpacing:'0.5px'}}> Hospitals often find themselves under a range of intense pressures, like time and money. This means patients may sometimes be left in the dark about their condition simply because the staff around them are too busy to answer questions in depth.
                                    Our AI Model can provide 24/7 bedside support</p>

                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-center" style={{background:'#121228'}}>
                            <img className="fancy-list-img" src={service3} alt="fancy-list"/>
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{color:'#fff'}}>Our Model</h4>
                                    <p style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif',letterSpacing:'0.5px'}}> Our model is designed to empower doctors during key moments in the medical journey.
                                        For doctors with no time,Our AI model requires a CT scan of the patient's lungs. If the tool detects any signs of diseases, it will produces data in an easy-to-read format.
                                        Our models is accelerating diagnostic processes and making it easier for doctors to access information.</p>
                                </div>
                        </div>
                    </div>
                </div>
                <HeightBox height={150}/>
                <div className="row iq-how-it-works">
                    <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
                        <img
                           className="single_image-img"
                           src={service4}
                        />
                    </div>
                    <div className=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center">
                        <div className="title-box wow fadeInUp text-left">
                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px'}}>Human Behaviour, Artificial Intelligence</h2>
                            <p style={{color:'#fff',fontSize:'18px'}}> X-rays analysis is very time consuming for human providers,
                                but we developed a X-ray scanning algorithm that can analyze scans up to 1,000
                                times faster than what is possible today.  </p>
                        </div>
                        <div className="text-left">
                            <ul className="iq-list" style={{color:'#fff',fontSize:'16px'}}>
                                <li><i className="fa fa-check-square-o"></i> <span>Detection of multiple abnormal findings on a chest X-ray</span></li>
                                <li><i className="fa fa-check-square-o"></i>
                                    <span>Used by 10+ Doctors</span></li>
                                <li><i className="fa fa-check-square-o"></i> <span>Trained on over 1M X-ray Scans</span></li>
                                <li><i className="fa fa-check-square-o"></i> <span>Send reports to Doctors in real time</span></li>
                                <li><i className="fa fa-check-square-o"></i> <span>Reporting and flags radiological signs of diseases like TB, lung cancer & heart failure.</span></li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}