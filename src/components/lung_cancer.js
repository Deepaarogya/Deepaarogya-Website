
import lung_cancer from "../images/ICU.jpg";
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

                            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>ICU Predictive models</h2>
                            <p style={{color:'#fff',fontSize:'20px',fontFamily:'Arial, Helvetica, sans-serif'}}>
                            Our AI models can predict which patients are at risk of developing complications in the ICU. This information can be used to improve patient care and prevent unnecessary deaths.
                            Predicting the severity and progression of respiratory conditions in 
                            ICU patients is challenging. Our platform will integrate predictive models that use patient vitals, 
                            medical history, and diagnostic data to forecast patient outcomes. These predictive analytics will 
                            assist medical teams in making informed decisions, optimizing resource allocation, and improving 
                            overall patient care. 
                            <br/></p>
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