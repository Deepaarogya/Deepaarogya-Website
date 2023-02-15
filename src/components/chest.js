import service4 from "../images/Doctor holding image of chest xray.jpg";


export default function Chest(){
    
    return(
        <section className="aboutus-two-service">
            <div className="container">
                <div className="row iq-how-it-works">
                    <div className=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center" style={{marginTop:'50px'}}>
                        <div className="title-box wow fadeInUp text-left">
                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>Chest X-ray Scanning</h2>
                            <p style={{color:'#fff',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif'}}> 
                            Detection of pulmonary nodules on chest radiographs has been a focus of several computer-aided detection commercial 
                            and research software solutions for the past 2 decades.
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;Although several recent studies have examined how AI 
                            may improve the performance of radiologists in detection of pulmonary nodules on CXRs,
                             they are limited in their scope owing to the lack of multisite readers with different
                              levels of clinical experience, detection difficulties, and settings. 
                              <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;To address these
                               limitations in the evaluation of an AI algorithm, our AI algorithm
                                can help detect pulmonary nodules on chest radiographs at different levels of detection
                                 difficulty with both normal and non-normal images.</p>
                        </div>
                    </div>
                    <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
                        <img
                            className="single_image-img"
                            src={service4}
                            style={{'marginTop':50,borderRadius:10}}
                            alt={'chest'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}