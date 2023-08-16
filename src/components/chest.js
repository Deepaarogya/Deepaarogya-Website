import service4 from "../images/Doctor holding image of chest xray.jpg";


export default function Chest(){
    
    return(
        <section className="aboutus-two-service">
            <div className="container">
                <div className="row iq-how-it-works">
                    <div className=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center" style={{marginTop:'50px'}}>
                        <div className="title-box wow fadeInUp text-left">
                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>Radiological detection</h2>
                            <p style={{color:'#fff',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif'}}> 
                            Our AI algorithms can analyze medical images, such as X-rays, CT scans, and MRIs, to detect signs of disease. This can help to identify diseases early, when they are most treatable.
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp; Recent studies exploring AI's potential to enhance radiologists' performance in identifying pulmonary
                             nodules on CXRs have been limited in scope, as they lack diverse multisite readers with varying clinical experience, detection challenges, and settings.
                              <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;To overcome these limitations in AI algorithm evaluation, our AI algorithm is designed to detect pulmonary nodules on chest 
                              radiographs across varying detection difficulty levels, encompassing both normal and abnormal images.</p>
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