import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { white } from '../config/color';
import Typography from '@mui/material/Typography';
import AiBg from '../images/ai_banner.jpg';
import Nav from "./nav";
import React from "react";
import {useMediaQuery, useTheme} from "@material-ui/core";

export default  function Header(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    var bgStyle = {
        backgroundImage:`url(${AiBg})`,
        backgroundSize:'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        height:'120%',
        minWidth: '100%',
    };

    var style = {
        centerText: {
            color: white,
            lineHeight: isMobile ? '40px' :'67px',
            letterSpacing:' 0px',
            fontWeight:' 700',
            fontFamily:'Arial, Helvetica, sans-serif',
            fontSize: isMobile ? '35px' : '45px',
        },
    }

    return (
        <div style={bgStyle}>
             <Container component="main">
                <Box
                sx={{
                    marginTop: isMobile  ? 14 : 30,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',

                }}
                >
                    <Typography style={style.centerText}>We help to reduce the chance of death from unknown diseases using our AI based solutions</Typography>
                </Box>
            </Container>
        </div>
    );
}