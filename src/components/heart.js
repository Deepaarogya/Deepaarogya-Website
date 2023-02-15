
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
                                <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>Heart Attack</h2>
                                <p style={{color:'#fff',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif'}}> World Heart Day is observed every year on September 29. The number of deaths due to heart attacks in India has remained consistently over 25,000 in the last four years, and over 28,000 in the last three years, according to data on "Accidental Deaths & Suicides in India" (ADSI) compiled by the National Crime Records Bureau (NCRB). 
                                Cardiovascular diseases (CVD) is a major threat to human health and the leading cause of death worldwide<br/>&nbsp;&nbsp;&nbsp;&nbsp;
                                 Our AI algorithm accurately distinguishes not only abnormal
                                  from normal, but also between which underlying potentially 
                                  life-threatening cardiac conditions may be present—with 
                                  warning signals that are now detectable well before the 
                                  disease clinically progresses to the point where it can 
                                  impact health outcomes. </p>
                            </div>
                           
                        </div>
                    </Stack>
                </div>
            </div>
        </section>
    );
}