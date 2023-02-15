import service1 from '../images/01.png';
import upload from '../images/upload.png';
import loading from '../images/loading-bar.png';
import load from '../images/load.png';
import report from '../images/report.png';
import service2 from '../images/02.png';
import service3 from '../images/03.png';
import HeightBox from "./heightBox";

export default function Process() {
    return (
        <section className="xamin-custom-bg iq-pb-70">
            <HeightBox height={30}/>
            <div className="container">
                <div className="row ">
                    <div className="col-md-12">
                        <div className="title-box wow fadeInUp text-center">
                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px'}}>Our AI Doctor Testing Process</h2>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 col-sm-12">
                        <div className="xamin-process xamin-circle right wow fadeInUp text-center"
                             data-wow-delay="0.6s">
                            <div className="circle-effect"><img src={upload} alt="fancybox"/></div>
                            <h5 className="mb-2" style={{color:'#fff',fontSize:'24px',fontFamily:'Arial, Helvetica, sans-serif'}}>Upload</h5>
                            <p className="mb-0" style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>Upload X-Rays/CT Scan images to our model</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-4 mt-md-0">
                        <div className="xamin-process xamin-circle right wow fadeInUp text-center"
                             data-wow-delay="0.6s">
                            <div className="circle-effect"><img src={load} alt="fancybox"/></div>
                            <h5 className="mb-2" style={{color:'#fff',fontSize:'24px',fontFamily:'Arial, Helvetica, sans-serif'}}>Process</h5>
                            <p className="mb-0" style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>Predict different disease using our AI Model</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-4 mt-md-0">
                        <div className="xamin-process xamin-circle wow fadeInUp text-center" data-wow-delay="0.6s">
                            <div className="circle-effect"><img src={report} alt="fancybox"/></div>
                            <h5 className="mb-2" style={{color:'#fff',fontSize:'24px',fontFamily:'Arial, Helvetica, sans-serif'}}>Report</h5>
                            <p className="mb-0" style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>Send report to Doctor in real time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}