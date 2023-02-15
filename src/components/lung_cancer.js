
import lung_cancer from "../images/AptTastyGibbon-size_restricted.gif";
var style = {
    service_2: {
        margin: '40px',
        borderRadius: '15px',
        padding: '40px',
        background:'#010111'
    },
}
export default function LungCancer() {
    return (
        <section className="iq-bg-over iq-pb-70" style={style.service_2}>
            <span className="container" >
                <div className="row row-fluid row-has-fill iq-how-it-works">
                    <div className="iq-mb-30 fadeInUp wow col-sm-12 col-lg-5 col-md-12 align-items-center">
                        <div className="title-box wow fadeInUp text-left">

                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>Chest Cancer detection</h2>
                            <p style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>
                            Lung cancer is the leading cause of malignancy-related mortality worldwide. AI has the potential to help to treat lung cancer from detection, diagnosis and decision making to prognosis prediction. AI could reduce the labor work of LDCT, CXR, and pathology slides reading. AI as a second reader in LDCT and CXR reading reduces the effort of radiologists and increases the accuracy of nodule detection.
                            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One such solution is artificial intelligence (AI) automated CT lung cancer detection,
                                 which can be used to assist physicians, thereby reducing their burden of work, optimizing hospital operational workflow, 
                            and providing more time to develop a high-quality doctor-patient relationship
                            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AI could help clinicians in decision-making by predicting treatment response, side effects, and prognosis prediction in medical treatment, surgery, and radiotherapy. Integrating AI in the future clinical workflow would be promising.
                            </p>
                        </div>
                        
                    </div>
                    <div className="col-sm-12 offset-lg-1 col-lg-6 col-md-12">
                        <div className="tec_box tec_box_bg_linear_reverse" style={{background:`url(${lung_cancer})`,height:300,backgroundSize:'cover',backgroundRepeat: 'no-repeat',marginTop:60}}>
                                <h5 style={{color:'#fff',position:'absolute',}}>
                                    {/* AI for Lung Nodules */}
                                    </h5>
                            </div>
                    </div>
                </div>
            </span>
        </section>
    );
}