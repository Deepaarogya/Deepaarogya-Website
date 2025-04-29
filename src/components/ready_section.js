import React from "react";
import service8 from "../images/lungs.gif";
import HeightBox from "./heightBox";
import { useTheme, useMediaQuery } from "@material-ui/core";

export default function ReadySection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <section
            className="position-relative overflow-hidden"
            style={{
                padding: isMobile ? "20px" : "50px",
                textAlign: isMobile ? "center" : "left",
            }}
        >
            <img
                src={service8}
                className="about-right-box-img"
                alt=""
                style={{
                    paddingTop: isMobile ? "20px" : "35px",
                    width: isMobile ? "100%" : "auto",
                }}
            />
            <div className="container">
                <div className="row">
                    <div
                        className={`col-lg-6 wow fadeInUp align-items-center ${
                            isMobile ? "text-center" : "text-left"
                        }`}
                    >
                        <div
                            className="title-box wow fadeInUp"
                            style={{
                                fontSize: isMobile ? "16px" : "38px",
                                lineHeight: isMobile ? "24px" : "45px",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                color: "#fff",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: isMobile ? "24px" : "38px",
                                    lineHeight: isMobile ? "30px" : "45px",
                                }}
                            >
                                Benefits of AI in revolutionizing Healthcare
                            </h2>
                            <p
                                style={{
                                    fontSize: isMobile ? "14px" : "16px",
                                }}
                            >
                                AI integration has permeated various aspects of
                                healthcare, from drug discovery to image-guided
                                therapy. The COVID-19 pandemic led to an
                                increased reliance on X-ray scans to identify
                                affected lungs, thereby boosting the demand for
                                AI-enabled X-ray imaging solutions to expedite
                                patient screening. Our innovative AI model
                                addresses this need.
                                <br /> <br />
                                Our AI model can efficiently detect coronavirus
                                cases, enhancing patient care and reducing
                                clinical imaging costs. The compilation of large
                                public and proprietary image datasets has
                                facilitated the development of AI algorithms
                                for radiograph analysis, many of which achieve
                                radiologist-level accuracy for specific,
                                targeted tasks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <HeightBox height={isMobile ? 30 : 50} />
        </section>
    );
}