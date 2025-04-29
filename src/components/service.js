import service1 from '../images/New Project(1).png';
import service2 from '../images/02.png';
import service3 from '../images/03.png';
import service4 from '../images/AI-EMR.png';
import HeightBox from "./heightBox";
import { useTheme, useMediaQuery } from "@material-ui/core";

var style = {
    gradient_bg: {
        background: 'linear-gradient(90deg, rgba(33,130,254,1) 0%, rgba(141,95,250,1) 37%, rgba(161,89,249,1) 71%, rgba(226,68,247,1) 100%)'
    },
};

export default function Service() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const imageStyle = {
        width: isMobile ? '100%' : 'auto',
        maxWidth: '500px',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
    };

    return (
        <div style={{ background: '#07071C' }}>
            <section className="aboutus-two-service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-center" style={{ background: '#121228' }}>
                                <img className="fancy-list-img" src={service1} alt="fancy-list" />
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{ color: '#fff' }}>Handwriiten Prescription</h4>
                                    <p style={{ color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.5px' }}>
                                        Illegible handwriting causes medication errors, while manual prescription entry is inefficient. Lack of standard formats leads to inconsistencies and errors. Paper-based systems are environmentally harmful and risk data loss, threatening patient safety and operational efficiency. Digital solutions ensure accuracy, sustainability, and reliability, addressing these critical challenges effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-center" style={style.gradient_bg}>
                                <img className="fancy-list-img" src={service2} alt="fancy-list" />
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{ color: '#fff' }}>Hospitals</h4>
                                    <p style={{ color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.5px' }}>
                                        Adopting cutting-edge technology boosts efficiency, saves time, and reduces administrative burdens. It enhances accuracy, minimizes errors, and improves patient safety by reducing medication risks. Streamlined electronic health records (EHRs) enhance data accessibility and care coordination. Embracing innovation reflects professionalism, fostering trust, credibility, and effective record-keeping.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box d-inherit p-4 my-3 wow fadeInUp text-center" style={{ background: '#121228' }}>
                                <img className="fancy-list-img" src={service3} alt="fancy-list" />
                                <div className="service-detail align-self-center">
                                    <h4 className="mb-2" style={{ color: '#fff' }}>Our Model</h4>
                                    <p style={{ color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif', letterSpacing: '0.5px' }}>
                                        Our AI model aims to support physicians during crucial medical events. Designed for time-pressed doctors, it necessitates a CT scan of the patient's lungs, identifies potential diseases, and presents the findings in a comprehensible format. This accelerates diagnostics and streamlines information access for medical professionals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HeightBox height={150} />
                    <div className="row iq-how-it-works">
                        <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
                            <img
                                className="single_image-img"
                                src={service4}
                                alt="AI-EMR"
                                style={{
                                    ...imageStyle,
                                    marginBottom: '20px', // Add space below the image
                                }}
                            />
                        </div>

                        <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center">
                            <div className="title-box wow fadeInUp text-left">
                                <h2 style={{ color: '#fff', fontSize: '36px', lineHeight: '45px' }}>AI-based EMR and Patient Summary</h2>
                                <p style={{ color: '#fff', fontSize: '18px' }}>
                                    Our AI model is designed to extract data from handwritten prescriptions, enabling doctors to quickly access patient information and provide accurate treatment. It utilizes state-of-the-art AI and image recognition technology to digitize handwritten prescriptions. It accurately transcribes patient information, medication names, dosages, frequency of uptake, special instructions, and more. Generate an AI summary report of your patient’s health record and ask any questions
and information to our AI chatbot about the patient . Identifies early risk and suggestions from our AI-based Medical Assistant
                                </p>
                            </div>
                            <div className="text-left">
                                <ul className="iq-list" style={{ color: '#fff', fontSize: '16px' }}>
                                    <li><i className="fa fa-check-square-o"></i> <span>Handwriting Recognition</span></li>
                                    <li><i className="fa fa-check-square-o"></i> <span>AI based Patient Summary</span></li>
                                    <li><i className="fa fa-check-square-o"></i> <span>Provides real-time reports to physicians and saves data to hospital databases</span></li>
                                    <li><i className="fa fa-check-square-o"></i> <span>Prescription Editing & Customization features</span></li>
                                    <li><i className="fa fa-check-square-o"></i> <span>EHR Integration and Data Security & Privacy</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}