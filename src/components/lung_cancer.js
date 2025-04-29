import lung_cancer from "../images/ICU.jpg";
import { useTheme, useMediaQuery } from "@material-ui/core";

export default function LungCancer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const style = {
        service_2: {
            margin: isMobile ? "20px" : "40px",
            borderRadius: "15px",
            padding: isMobile ? "20px" : "40px",
            background: "#010111",
        },
        imageContainer: {
            background: `url(${lung_cancer})`,
            height: isMobile ? 200 : 300,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: isMobile ? 30 : 60,
            position: "relative",
        },
        heading: {
            color: "#fff",
            fontSize: isMobile ? "24px" : "42px",
            lineHeight: isMobile ? "34px" : "45px",
            fontFamily: "Arial, Helvetica, sans-serif",
        },
        paragraph: {
            color: "#fff",
            fontSize: isMobile ? "14px" : "20px",
            fontFamily: "Arial, Helvetica, sans-serif",
            lineHeight: isMobile ? "20px" : "28px",
        },
    };

    return (
        <section className="iq-bg-over iq-pb-70" style={style.service_2}>
            <span className="container">
                <div className="row row-fluid row-has-fill iq-how-it-works">
                    <div
                        className="iq-mb-30 fadeInUp wow col-sm-12 col-lg-5 col-md-12 align-items-center"
                        style={{ textAlign: isMobile ? "center" : "left" }}
                    >
                        <div className="title-box wow fadeInUp text-left">
                            <h2 style={style.heading}>ICU Predictive models</h2>
                            <p style={style.paragraph}>
                                Our AI models can predict which patients are at risk of developing complications in the ICU. This information can be used to improve patient care and prevent Early Mortality.
                                Predicting the severity and progression of respiratory conditions in ICU patients is challenging. Our platform will integrate predictive models that use patient vitals, medical history, and diagnostic data to forecast patient outcomes. These predictive analytics will assist medical teams in making informed decisions, optimizing resource allocation, and improving overall patient care.
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 offset-lg-1 col-lg-6 col-md-12">
                        <div className="tec_box tec_box_bg_linear_reverse" style={style.imageContainer}>
                            <h5 style={{ color: "#fff", position: "absolute" }}>
                                {/* AI for Lung Nodules */}
                            </h5>
                        </div>
                    </div>
                </div>
            </span>
        </section>
    );
}