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
    const [isEditing, setIsEditing] = React.useState(false);

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
        setLoading(true);
        setError('');
        if(fileName!==null){
            const formData = new FormData();
            const apiUrl = 'https://api.deepaarogya.com/upload-prescription/'
            formData.append('file', file);
    
            axios.post(apiUrl, formData)
                .then((res) => {
                console.log('resss',res);
                setResponse(res.data.pages[0]);
                setLoading(false);
                setShowExtractedImage(true);
            }).catch((error) => {
                setError(error);
            })
        } else {
            setError('Please select file first');
            setLoading(false);
            setLoading(false);
        }
    }
    const handleCloseModal = () => {
        setShowExtractedImage(false);
        setResponse(null); // Clear the response if needed
    };

    // Handle the 'Edit' button click
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Handle the 'Save' button click
    const handleSaveClick = () => {
        // API call to save the data, for now, just log it
        console.log("Updated data:", response);
        // Toggle editing mode off
        setIsEditing(false);
        // You can make the API call here to persist the changes
        // e.g., updateDataAPI(responseData);
    };

    // Function to update the response data when an input changes
    const handleInputChange = (field, value) => {
        console.log('input change', value);
        setResponse((prevState) => ({
            ...prevState,
            patient_info: {
                ...prevState.patient_info,
                [field]: value,
            },
        }));
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

                                        <button onClick={handleInputClick} style={style.uploadBtn}>Upload a PNG or JPG File</button>
                                        <FormControl component={'div'} fullWidth={true} encType="multipart/form-data">
                                            <input type='file' ref={hiddenFileInput}
                                                style={{ display: 'none' }}
                                                onChange={(event) => handleFile(event.target.files[0])}
                                                accept="image/png, image/jpeg, image/jpg"
                                            />
                                        </FormControl>
                                        <Stack>
                                            <span style={{ color: '#fff', fontWeight: 600, fontSize: 18, paddingLeft: 40 }}>{'Selected File'}</span>
                                            {image && <img src={image} style={{ width: 180, height: 200, marginTop: 20 }} />}
                                        </Stack>
                                    </Stack>
                                    <div>
                                        <button id="submit-4" onClick={handleSubmit}
                                            className="button d-block w-100">{isLoading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <CircularProgress size={30} sx={{ color: '#fff' }} />
                                            </Box> : 'Check Now'}
                                        </button>
                                    </div>
                                    <HeightBox height={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
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
                                <ExtractedResponse
                                    response={response}
                                    isEditing={isEditing}
                                    onInputChange={handleInputChange} // Pass the input change handler
                                />
                            </div>
                        </DialogContent>
                        <DialogActions>
                            {isEditing ? (
                                <>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </Button>
                                    <Button onClick={() => setIsEditing(false)}>Cancel</Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handlePrint}
                                    >
                                        <PrintIcon style={{ marginRight: 8 }} />
                                        Print
                                    </Button>
                                    <Button onClick={handleEditClick}>Edit</Button>
                                    <Button onClick={handleCloseModal} autoFocus>Close</Button>
                                </>
                            )}
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            )}

        </div>
    );
}