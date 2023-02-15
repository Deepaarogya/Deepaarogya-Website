import Contact from "../components/contact";
import Breadcrumb from "../components/breadcrumb";
import HeightBox from "../components/heightBox";
import Stack from "@mui/material/Stack";
import React from "react";
import SendMessage from "../components/send_message";

export default function ContactUs() {
    return(
        <div style={{background:'#07071C'}}>
            <Stack direction={'column'}>
                <Breadcrumb/>
                <HeightBox height={'550px'}/>
                <div className="main-content" style={{zIndex:10}}>
                    <Contact/>
                    <SendMessage/>
                </div>
            </Stack>
        </div>
    );
}