import Stack from "@mui/material/Stack";
import React from "react";
import DemoInput from "../components/demo_input";
import HeightBox from "../components/heightBox";
import {useMediaQuery, useTheme} from "@material-ui/core";

export default function Demo() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div style={{background:'#07071C'}}>
            <HeightBox height={isMobile ? 50 : 150}/>
            <Stack direction={'column'}>
                <DemoInput/>
            </Stack>
        </div>
    );
}