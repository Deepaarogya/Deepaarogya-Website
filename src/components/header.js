import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { white } from '../config/color';
import Typography from '@mui/material/Typography';
import AiBg from '../images/ai_banner.jpg';
import Nav from "./nav";
import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const bgStyle = {
        backgroundImage: `url(${AiBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        height: isSmallScreen ? '100%' : '120%',
        minWidth: '100%',
    };

    const style = {
        centerText: {
            color: white,
            lineHeight: isMobile ? '40px' : '67px',
            letterSpacing: '0px',
            fontWeight: '700',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: isSmallScreen ? '28px' : isMobile ? '35px' : '45px',
            textAlign: isSmallScreen ? 'center' : 'left',
        },
        container: {
            marginTop: isSmallScreen ? 10 : isMobile ? 14 : 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: isSmallScreen ? 'center' : 'start',
            padding: isSmallScreen ? '20px' : '0',
        },
    };

    return (
        <div style={bgStyle}>
            <Container component="main">
                <Box sx={style.container}>
                    <Typography style={style.centerText}>
                        We are helping Clinician to build their own personal Healthcare Brand
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}