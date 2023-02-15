import service4 from "../images/04.png";
import service5 from "../images/02_1.png";
import HeightBox from "./heightBox";
import Stack from "@mui/material/Stack";

export default function AboutContent() {
    return (
        <section className="aboutus-two-service">
            <div className="container">
                <div className="row iq-how-it-works">

                    <div className=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center" style={{marginTop:'50px'}}>
                        <div className="title-box wow fadeInUp text-left">
                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>About Us</h2>
                            <p style={{color:'#fff',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif'}}> 
                            We have a strong team of Data Scientists, Engineers and Doctors that work on the mission 
                            to reduce the chance of death from unknown disease. We use A.I to predict
                             different diseases in their early stage in the patient body based on their X-ray, 
                             CT Scan and MRI reports. We predict the disease using our AI Solution and send reports
                              to Doctors in real time.<br/>&nbsp;&nbsp;&nbsp;&nbsp; We help doctors to make decisions on patient condition with
                               the help of our AI data solutions in Heart-attack,Cancer and Chest related 
                               disease(like- Covid, Tuberculosis, Viral Pneumonia). Our aim is to reduce 
                               the maximum number of deaths in the world due to unknown diseases. 
                               We work hard to save people's lives with the help of our innovations. </p>
                        </div>
                        {/* <div className="text-left">
                            <ul className="iq-list" style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>
                                <li><i className="fa fa-check-square-o"></i> <span>Advance Advisory Team</span></li>
                                <li><i className="fa fa-check-square-o"></i>
                                    <span>Professional Consulting Services</span></li>
                                <li><i className="fa fa-check-square-o"></i> <span> 24/7 Support Help Center</span></li>

                            </ul>
                        </div> */}

                    </div>
                    <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
                        <img
                            className="single_image-img"
                            src={service4}
                        />
                    </div>
                </div>
                <HeightBox height={150}/>
                {/* <div className="row iq-how-it-works">
                    <Stack direction={{ xs: 'column-reverse', sm: 'row' }}>
                        <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
                            <img
                                className="single_image-img"
                                src={service5}
                            />
                        </div>
                        <div className=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center">
                            <div className="title-box wow fadeInUp text-left">
                                <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>Human Behaviour, Data Science</h2>
                                <p style={{color:'#fff',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif'}}> It is a long established fact that a reader will be distracted by the of readable
                                    content of a page when looking at its layout. </p>
                            </div>
                            <div className="text-left">
                                <ul className="iq-list" style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>
                                    <li><i className="fa fa-check-square-o"></i> <span>Advance Advisory Team</span></li>
                                    <li><i className="fa fa-check-square-o"></i>
                                        <span>Professional Consulting Services</span></li>
                                    <li><i className="fa fa-check-square-o"></i> <span> 24/7 Support Help Center</span></li>

                                </ul>
                            </div>

                        </div>
                    </Stack>
                </div> */}
            </div>
        </section>
    );

}