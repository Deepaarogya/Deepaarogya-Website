import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Stack from "@mui/material/Stack";
import Avatar from '@mui/material/Avatar';
import clsx from "clsx";

var style = {
    uploadIcon:{
        width:' 95px',
        height: '90px',
        background: 'linear-gradient(90deg, rgba(33,130,254,1) 0%, rgba(141,95,250,1) 37%, rgba(161,89,249,1) 71%, rgba(226,68,247,1) 100%)'

    },
    titleText:{
        fontWeight: '600',
        color: '#ffffff',
        fontSize: '16px',
    },
    uploadBtn:{
        outline:'none',
        color: '#fff',
        fontSize:'20px',
        fontWeight: 'bold',
        textTransform: 'initial',
        textDecoration:' underline',
        background: 'none',
        border: 'none',
        cursor:'pointer'
    },
    dragBox : {
        marginTop:'18px',
        border:'2px solid #fff',
        padding:40,
        margin:20,
        borderRadius: 10
    }

}

export default function DemoInput() {
    const hiddenFileInput = React.useRef(null);
    const [fileName, setFileName] = React.useState('');
    const handleInputClick = event => {
        hiddenFileInput.current.click();
    };
    const handleFile = (file) =>{
        setFileName(file.name);
    }
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-sm-6 offset-md-3">
                        <h2 className="text-left mb-4 text-center" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Upload X-ray image to see result</h2>
                        <div className="response-output "></div>
                            <div className="contact-form">
                                <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'} style={style.dragBox}>
                                    <Avatar style={style.uploadIcon}>
                                        <CloudUploadOutlinedIcon style={{color:'#fff',fontSize: '50px',fontFamily:'Arial, Helvetica, sans-serif'}}/>
                                    </Avatar>
                                    <div style={style.titleText}>Upload a PNG or JPG File</div>
                                    <button onClick={handleInputClick} style={style.uploadBtn}>
                                        Upload a file
                                    </button>
                                    <FormControl component={'div'} fullWidth={true} encType="multipart/form-data">
                                        <input type='file' ref={hiddenFileInput}
                                               style={{display:'none'}}
                                               onChange={(event) => handleFile(event.target.files[0])}
                                               accept="image/png, image/jpeg, image/jpg"
                                        />
                                    </FormControl>
                                    <span style={{fontSize:'14px',color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>{fileName}</span>
                                </Stack>
                                <div>
                                    <button id="submit-4" name="submit" type="submit" value="Send"
                                            className="button d-block w-100">Check Now
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}