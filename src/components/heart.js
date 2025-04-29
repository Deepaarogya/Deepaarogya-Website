import React from "react";
import service5 from "../images/customized-website.png";
import HeightBox from "./heightBox";
import Stack from "@mui/material/Stack";
import { useTheme, useMediaQuery } from "@material-ui/core";

export default function Heart() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <section className="aboutus-two-service">
            <div className="container">
                <HeightBox height={isMobile ? 30 : 70} />
                <div className="row iq-how-it-works">
                    <Stack
                        direction={isMobile ? "column" : "row"}
                        spacing={isMobile ? 2 : 4}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <div
                            className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow"
                            style={{
                                textAlign: isMobile ? "center" : "left",
                                marginBottom: isMobile ? "20px" : "0",
                            }}
                        >
                            <img
                                className="single_image-img"
                                src={service5}
                                style={{
                                    borderRadius: "10px",
                                    width: isMobile ? "100%" : "90%",
                                    maxWidth: "600px",
                                    height: "auto",
                                }}
                                alt="Customised Clinical Website"
                            />
                        </div>
                        <div
                            className="fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center"
                            style={{
                                textAlign: isMobile ? "center" : "left",
                            }}
                        >
                            <div className="title-box wow fadeInUp">
                                <h2
                                    style={{
                                        color: "#fff",
                                        fontSize: isMobile ? "28px" : "42px",
                                        lineHeight: isMobile ? "34px" : "45px",
                                        fontFamily: "Arial, Helvetica, sans-serif",
                                    }}
                                >
                                    Customised Clinical Website
                                </h2>
                                <p
                                    style={{
                                        color: "#fff",
                                        fontSize: isMobile ? "14px" : "18px",
                                        fontFamily: "Arial, Helvetica, sans-serif",
                                        lineHeight: isMobile ? "20px" : "28px",
                                    }}
                                >
                                    We will design a personalised custom website for your clinic. Sell your medical product/services to your customers.
                                </p>
                                <p
                                    style={{
                                        color: "#fff",
                                        fontSize: isMobile ? "14px" : "18px",
                                        fontFamily: "Arial, Helvetica, sans-serif",
                                        lineHeight: isMobile ? "20px" : "28px",
                                    }}
                                >
                                    <strong>Zero Deduction:</strong> We will not charge any money for appointment booking, new development changes in the website, or any other services.
                                </p>
                                <p
                                    style={{
                                        color: "#fff",
                                        fontSize: isMobile ? "14px" : "18px",
                                        fontFamily: "Arial, Helvetica, sans-serif",
                                        lineHeight: isMobile ? "20px" : "28px",
                                    }}
                                >
                                    <strong>Post-Consultation & Follow-Ups:</strong> Tele Consultations, Appointments, Follow-Up reminders, E-Pharmacy, E-Diagnostics.
                                </p>
                                <p
                                    style={{
                                        color: "#fff",
                                        fontSize: isMobile ? "14px" : "18px",
                                        fontFamily: "Arial, Helvetica, sans-serif",
                                        lineHeight: isMobile ? "20px" : "28px",
                                    }}
                                >
                                    <strong>Increase Digital Footprint:</strong> Expand your reach and online visibility. WhatsApp Marketing, Email Marketing, Google My Business.
                                </p>
                            </div>
                        </div>
                    </Stack>
                </div>
            </div>
        </section>
    );
}