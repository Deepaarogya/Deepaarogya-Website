import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Stack from "@mui/material/Stack";
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { apikey, apisecret, apiurl, headers } from "../config/cred";
import axios from 'axios';
import HeightBox from "./heightBox";
import ExtractedResponse from "./extracted_image";
import { Dialog, IconButton, Button, DialogContent, DialogActions } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PrintIcon from '@mui/icons-material/Print';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

var style = {
    uploadIcon: {
        width: ' 95px',
        height: '90px',
        background: 'linear-gradient(90deg, rgba(33,130,254,1) 0%, rgba(141,95,250,1) 37%, rgba(161,89,249,1) 71%, rgba(226,68,247,1) 100%)'

    },
    titleText: {
        fontWeight: '600',
        color: '#ffffff',
        fontSize: '16px',
    },
    uploadBtn: {
        outline: 'none',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'initial',
        textDecoration: ' underline',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    },
    dragBox: {
        marginTop: '18px',
        border: '2px solid #fff',
        padding: 40,
        margin: 20,
        borderRadius: 10
    },
    resultStyle: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 16
    },
    resultBox: {
        background: '#525f81',
        borderRadius: 10,
        padding: '20px 40px 20px 20px '
    }

}

export default function DemoInput() {
    const hiddenFileInput = React.useRef(null);
    const [fileName, setFileName] = React.useState(null);
    const [file, setFile] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [response, setResponse] = React.useState(null);
    const [isLoading, setLoading] = React.useState(false);
    const [showExtractedImage, setShowExtractedImage] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleInputClick = event => {
        hiddenFileInput.current.click();
    };
    const handleFile = (image) => {
        setFileName(image.name);
        setFile(image);
        setImage(URL.createObjectURL(image));
        setResponse('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoading(true);
        setError('');
        // if(fileName!==null){
        //     axios({
        //         method:'post',
        //         headers:headers,
        //         url:apiurl,
        //         data:{file:file}
        //     }).then((res) => {
        //         setResponse(res.data.predictions);
        //         setLoading(false);
        //     }).catch((error) => {
        //         setError(error);
        //     })
        // }else{
        //     setError('Please select file first');
        //     setLoading(false);
        // }
        setShowExtractedImage(true);
    }
    const handleCloseModal = () => {
        setShowExtractedImage(false);
        setResponse(null); // Clear the response if needed
    };

    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Document</title>
                    <style>
                        /* Add any styles you want for the printed document */
                        body { font-family: Arial, sans-serif; }
                    </style>
                </head>
                <body onload="window.print(); window.close();">
                    ${document.getElementById('print-content').innerHTML}
                </body>
            </html>
        `);
        printWindow.document.close();
    };
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <div>
            {!showExtractedImage ? (

                <section className="pt-0">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-sm-6 offset-md-3">
                                <h2 className="text-left mb-4 text-center" style={{ color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif' }}>Upload X-ray image to see result</h2>
                                <span style={{ color: '#ff0000', marginLeft: 20, fontWeight: 600, fontSize: 18 }}>{error}</span>
                                <div className="contact-form">

                                    <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'} style={style.dragBox}>
                                        <Avatar style={style.uploadIcon}>
                                            <CloudUploadOutlinedIcon style={{ color: '#fff', fontSize: '50px', fontFamily: 'Arial, Helvetica, sans-serif' }} />
                                        </Avatar>
                                        <div style={style.titleText}>Upload a PNG or JPG File</div>

                                        <button onClick={handleInputClick} style={style.uploadBtn}>
                                            Upload a file
                                        </button>
                                        <FormControl component={'div'} fullWidth={true} encType="multipart/form-data">
                                            <input type='file' ref={hiddenFileInput}
                                                style={{ display: 'none' }}
                                                onChange={(event) => handleFile(event.target.files[0])}
                                                accept="image/png, image/jpeg, image/jpg"
                                            />
                                        </FormControl>
                                        <span style={{ fontSize: '14px', color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif' }}>{fileName}</span>
                                    </Stack>
                                    <div>
                                        <button id="submit-4" onClick={handleSubmit}
                                            className="button d-block w-100">{isLoading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <CircularProgress size={30} sx={{ color: '#fff' }} />
                                            </Box> : 'Check Now'}
                                        </button>
                                    </div>
                                    <HeightBox height={40} />

                                    <Stack direction={'row'} justifyContent={'space-between'} style={style.resultBox}>
                                        <Stack>
                                            <span style={{ color: '#fff', fontWeight: 600, fontSize: 18, paddingLeft: 40 }}>{'Image'}</span>
                                            {image && <img src={image} style={{ width: 180, height: 200, marginTop: 20 }} />}
                                        </Stack>
                                        <Stack>
                                            <div><span style={{ color: '#fff', fontWeight: 600, fontSize: 18, marginLeft: 22 }}>{'Result'}</span></div>
                                            {!isLoading && response != null &&
                                                <ul style={{ listStyle: 'none', paddingRight: 20 }}>
                                                    <li style={{ marginTop: 40 }}>
                                                        <span style={style.resultStyle}>
                                                            {response && response.labelName.replace('_', ' ')}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span style={style.resultStyle}>
                                                            {response && parseInt(response.score * 100)}
                                                            %</span>
                                                    </li>
                                                </ul>
                                            }

                                        </Stack>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                // <Dialog
                //     open={showExtractedImage}
                //     onClose={handleCloseModal}
                //     fullWidth
                //     maxWidth="md"
                //     PaperProps={{
                //         style: {
                //             height: '90%',  // Set height to 80%
                //             width: '100%',   // Set width to 60%
                //             margin: 'auto', // Center the modal
                //         },
                //     }}
                // >
                //     {/* <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                //         <IconButton
                //             edge="end"
                //             color="inherit"
                //             onClick={handleCloseModal}
                //             style={{ position: 'absolute', right: 16, top: 16 }}
                //         >
                //             <CloseIcon />
                //         </IconButton>
                //         <ExtractedResponse response={response} />
                //     </div> */}
                //     <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                //         <IconButton
                //             edge="end"
                //             color="inherit"
                //             onClick={handleCloseModal}
                //             style={{ position: 'absolute', right: 16, top: 16 }}
                //         >
                //             <CloseIcon />
                //         </IconButton>
                //         <div id="print-content" style={{ padding: '20px' }}>
                //             <ExtractedResponse />
                //         </div>
                //         <Button
                //             variant="contained"
                //             color="primary"
                //             onClick={handlePrint}
                //             style={{ position: 'absolute', left: 16, bottom: 16 }}
                //         >
                //             <PrintIcon style={{ marginRight: 8 }} />
                //             Print
                //         </Button>
                //     </div>
                // </Dialog>
                <React.Fragment>
                    <Dialog
                        fullWidth={true}
                        maxWidth="md"
                        open={true}
                        onClose={handleCloseModal}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogContent>
                            <div id="print-content" style={{ padding: '20px' }}>
                                <ExtractedResponse />
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handlePrint}
                            >
                                <PrintIcon style={{ marginRight: 8 }} />
                                Print
                            </Button>
                            <Button onClick={handleCloseModal} autoFocus>
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            )}

        </div>
    );
}