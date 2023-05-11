
import service5 from "../images/heart-beating.gif";
import HeightBox from "./heightBox";
import Stack from "@mui/material/Stack";

export default function Heart(){
    
    return(
        <section className="aboutus-two-service">
            <div className="container">
                <HeightBox height={70}/>
                <div className="row iq-how-it-works">
                    <Stack direction={{ xs: 'column-reverse', sm: 'row' }}>
                        <div className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
                            <img
                                className="single_image-img"
                                src={service5}
                                style={{borderRadius:60}}
                                alt={'human heart'}
                            />
                        </div>
                        <div className=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center">
                            <div className="title-box wow fadeInUp text-left">
                                <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>Detection of diseases from Cough Sound</h2>
                                <p style={{color:'#fff',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif'}}>Cough is a common symptom of many respiratory diseases, including COVID-19, and has been identified 
                                as a potential indicator of infection. Artificial Intelligence (AI) is being used to analyze cough sounds to detect and diagnose diseases. By using machine learning algorithms, 
                                AI systems can detect specific acoustic patterns in coughs that are associated with different respiratory diseases. The technology has the potential to provide a rapid, non-invasive,
                                 and cost-effective method of disease screening, particularly in low-resource settings.<br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                 AI-powered cough detection systems can be integrated into mobile applications, wearable devices, and even smart speakers, making it accessible to a wide range of users. As a result,
                                  cough analysis using AI has emerged as a promising tool for early disease detection and prevention.</p>
                            </div>
                           
                        </div>
                    </Stack>
                </div>
            </div>
        </section>
    );
}