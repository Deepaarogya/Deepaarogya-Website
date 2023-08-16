
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

                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>ICU predictive models</h2>
                            <p style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>
                            Our AI models can predict which patients are at risk of developing complications in the ICU. This information can be used to improve patient care and prevent unnecessary deaths.
                            AI can ease the workload associated with reading LDCT, CXR, and pathology slides. By acting as a second reader in LDCT and CXR analysis, AI reduces radiologists' efforts and improves nodule detection accuracy.
                            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AI-powered automated CT lung cancer detection assists physicians, alleviating their workload,
                             optimizing hospital workflows, and enabling more time for fostering high-quality doctor-patient relationships.
                             <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AI can also support clinicians in decision-making by predicting treatment responses, side effects, and prognosis for medical treatments, surgeries, and radiotherapy. Incorporating AI into future clinical workflows holds great promise.</p>
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