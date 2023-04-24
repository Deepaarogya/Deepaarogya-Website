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
                                    X-rays, being dense and cumbersome, can make it challenging to swiftly review a patient's medical history and
                                    treament plan.
                                    Our AI models proficiently analyze these records,extracting crucial information and presenting it in a user-friendly format. </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-center" style={style.gradient_bg
                        }>
                            <img className="fancy-list-img" src={service2} alt="fancy-list"/>
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{color:'#fff'}}>Hospitals</h4>
                                    <p style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif',letterSpacing:'0.5px'}}>Under considerable time and financial constraints, hospitals may struggle to 
                                    address patients' concerns in detail, leaving them uninformed about their conditions. Our AI model offers round-the-clock bedside support to bridge this gap.
 </p>

                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-center" style={{background:'#121228'}}>
                            <img className="fancy-list-img" src={service3} alt="fancy-list"/>
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{color:'#fff'}}>Our Model</h4>
                                    <p style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif',letterSpacing:'0.5px'}}>Our AI model aims to support physicians during crucial medical events. 
                                    Designed for time-pressed doctors, it necessitates a CT scan of the patient's lungs, identifies potential diseases, and presents the findings in a comprehensible format. This accelerates diagnostics and streamlines information access for medical professionals.</p>
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
                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px'}}> Human Behavior Meets AI Technology.</h2>
                            <p style={{color:'#fff',fontSize:'18px'}}>Analyzing X-rays can be labor-intensive for healthcare providers; however, our cutting-edge X-ray
                             scanning algorithm streamlines the process, analyzing scans up to 1,000 times faster than current methods.</p>
                    
                        </div>
                        <div className="text-left">
                            <ul className="iq-list" style={{color:'#fff',fontSize:'16px'}}>
                                <li><i className="fa fa-check-square-o"></i> <span>Identifies multiple anomalies in chest X-rays</span></li>
                                <li><i className="fa fa-check-square-o"></i>
                                    <span>Used by 10+ Doctors</span></li>
                                <li><i className="fa fa-check-square-o"></i> <span>Trained on over 1 million X-ray Scans</span></li>
                                <li><i className="fa fa-check-square-o"></i> <span>Provides real-time reports to physicians</span></li>
                                <li><i className="fa fa-check-square-o"></i> <span>Highlights radiological indicators of diseases, such as TB, lung cancer, and heart failure.</span></li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}