import React from "react";
import Header from "../components/header";
import Service from "../components/service";
import HeightBox from "../components/heightBox";
import Stack from "@mui/material/Stack";
import VideoSection from "../components/video";
import ReadySection from "../components/ready_section";
import Report from "../components/report";
import Process from "../components/process";
import Heart from "../components/heart";
import Chest from "../components/chest";
import LungCancer from "../components/lung_cancer";
import {
    useTheme,
    useMediaQuery,
} from "@material-ui/core";

export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div style={{background:'#07071C'}}>
            <Stack direction={'column'}>
                <Header/>
                <HeightBox height={isMobile ? '400px' :'450px'}/>
                <div className="main-content">
                    <Service/>
                    <Chest/>
                    <LungCancer/>
                    <Heart/>
                    <Report/>
                    <ReadySection/>
                    <VideoSection/>
                    <Process/>
                </div>
            </Stack>
        </div>

    );
}