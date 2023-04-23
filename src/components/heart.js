
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
                                <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>Heart Attack awareness</h2>
                                <p style={{color:'#fff',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif'}}>Every year on September 29, World Heart Day raises awareness about heart health.
                                 In India, heart attack-related deaths have consistently exceeded 25,000 in the last four years, with over 28,000 in the past three years, as reported by 
                                 the National Crime Records Bureau (NCRB) in their "Accidental Deaths & Suicides in India" (ADSI) data.
                                  Cardiovascular diseases (CVD) pose a significant risk to human health and are the primary cause of death globally.<br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                  Our AI algorithm can accurately differentiate not only between normal and abnormal conditions but also identify specific, potentially life-threatening cardiac issues.
                                   This allows for the detection of warning signals well before the disease progresses to a stage that adversely affects health outcomes.</p>
                            </div>
                           
                        </div>
                    </Stack>
                </div>
            </div>
        </section>
    );
}