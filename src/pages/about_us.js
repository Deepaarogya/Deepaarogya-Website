import Stack from "@mui/material/Stack";
import HeightBox from "../components/heightBox";
import React from "react";
import AboutBreadcrumb from "../components/about_bread";
import MissionVision from "../components/mission_vision";
import AboutContent from "../components/about_content";
import {
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import Team from "../components/team";

export default function AboutUs() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div style={{background:'#07071C'}}>
            <Stack direction={'column'}>
                <AboutBreadcrumb/>
                <HeightBox height={isMobile? '250px' :'820px'}/>
                <div className="main-content" style={{zIndex:10}}>
                    <MissionVision/>
                    <AboutContent/>
                    <Team/>
                </div>
            </Stack>
        </div>
    );
}