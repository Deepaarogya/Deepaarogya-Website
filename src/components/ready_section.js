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
                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>X-rays: Artificial intelligence</h2>
                            <p style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>AI has advanced into day-to-day routines and into an assortment of
                                medical care, medication discovery, image-guided therapy etc.The COVID-19 pandemic increased the use
                                of X-Ray scans, which were used to screen out COVID-19 patients as they allowed doctors to
                                see if the corona virus had affected the lung. This has had a direct impact on the demand for AI-enabled
                                X-Ray imaging solutions to help healthcare workers screen patients in less time. And we have found the solutions for these type
                            of problems.<br/> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In our AI model you can detect whether a patient is affected by corona virus or not. Our AI model is progressively being utilized for
                                upgrading patient care and bringing down the expenses of clinical imaging techniques.Large public and proprietary image data sets have been compiled and have aided the development of AI algorithms for analysis of radiographs, many of which demonstrate accuracy equivalent to radiologists for specific, focused tasks. </p>
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