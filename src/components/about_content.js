import service4 from "../images/custom_EMR.png";
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
                            <p style={{color:'#fff',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif'}}>At our company, we have assembled a dedicated team of Data Scientists, Engineers, and 
                            Doctors who are committed to our mission of reducing the incidence of deaths resulting from unknown diseases. Leveraging the power of artificial intelligence, we have developed
                             a solution that can predict the onset of various diseases at an early stage based on a patient's history and symptoms.
                             <br/>&nbsp;&nbsp;&nbsp;&nbsp;Our ultimate goal is to make a significant contribution to reducing the number of fatalities caused by unknown diseases worldwide. 
                             With our innovative solutions, we strive to save as many lives as possible.</p>
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