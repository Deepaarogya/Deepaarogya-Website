import service8 from "../images/lungs.gif";
import HeightBox from "./heightBox";

export default function ReadySection() {
    return (
        <section className="position-relative overflow-hidden">
            <img src={service8} className="about-right-box-img" alt="" style={{paddingTop:'35px'}}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp align-items-center">
                        <div className="title-box wow fadeInUp text-left" >
                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>AI in X-ray Imaging: Revolutionizing Healthcare</h2>
                            <p style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>AI integration has permeated various aspects of healthcare, from drug discovery to image-guided therapy. 
                            The COVID-19 pandemic led to an increased reliance on X-ray scans to identify affected lungs, thereby boosting the demand for AI-enabled X-ray imaging solutions to expedite patient screening. Our innovative
                             AI model addresses this need.<br/> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our AI model can efficiently detect coronavirus cases, enhancing patient care and reducing clinical imaging costs.
                              The compilation of large public and proprietary image datasets has facilitated the development of AI algorithms for radiograph analysis, many of which achieve radiologist-level accuracy for specific, targeted tasks.</p>
                        </div>
                        {/* <div className=" text-left mt-5 ">
                            <a className="button button-icon" href="about-us.html"> <span
                                className="btn-effect"> Get Started Project</span> </a>
                        </div> */}
                    </div>

                </div>
            </div>
            <HeightBox height={50}/>
        </section>
    );
}