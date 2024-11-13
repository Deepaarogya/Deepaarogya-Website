import Stack from "@mui/material/Stack";
import React from "react";
import logo from '../images/new-logo.png';
import HeightBox from "../components/heightBox";
export default function Login(){
    var style = {
        service_2: {
            margin: '40px',
            borderRadius: '15px',
            padding: '40px',
            background:'#010111'
        },
        inputStyle:{

            outline:'none',
            border:'none',
            borderRadius:10
        },
        labelStyle:{
            color:'#fff',
            fontSize:15
        },
        btnStyle:{
            background:'#02E0B8',
            color:'#fff',
            fontSize:15,
            fontWeight:700,
            border:'none',
            borderRadius:10,
            height:45,
            cursor:'pointer'
        }
    }
    const [error,setError] = React.useState(null);
    const [loading,setLoading] = React.useState(false);
    const [success,setSuccess] = React.useState();
    const [email,setEmail] = React.useState(null);
    const [password,setPassword] = React.useState(null);

    const submit = (e) =>{
        e.preventDefault();
        setLoading(true);
       if(email===null || !email.includes('@')){
            setError('Please enter valid email')
            setLoading(false);
            return;
        }else if(password===null || password.length<6){
            setError('Please enter valid password')
            setLoading(false);
            return;
        }else{
            setError(null);
            setSuccess('We apologize, Api is under construction');
            
        }
       
    }
    return (
        <div style={{background:'#07071C',height:'100%'}}>
        <Stack direction={'column'}>
            <div className="main-content">
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <section className="iq-bg-over iq-pb-70 col-md-6 offset-md-4" style={style.service_2}>
                        <div className="iq-mb-30 fadeInUp wow align-items-center">
                            <div className="title-box wow fadeInUp">
                                <Stack alignItems={'center'} justifyContent={'center'}>
                                    <img src={logo} alt='logo' width={260}/>
                                    <span style={{fontSize:24,fontWeight:600,color:'#fff'}}>Login</span>
                                </Stack>
                                <HeightBox height={20}/>
                                <Stack alignItems={'center'} style={{width:'100%'}} direction={'row'} justifyContent={'center'}>
                                    <Stack style={{width:'70%'}} justifyContent={'center'}>
                                        <HeightBox height={20}/>
                                        <span style={{color:'#ff0000'}}>{error}</span>
                                        <span style={{color:'#059862'}}>{success}</span>
                                        <span style={style.labelStyle}>Email</span>
                                        <input type={'text'} style={style.inputStyle} placeholder={'Enter your email'} onChange={(e)=>setEmail(e.target.value)} value={email || ''}/>
                                        <HeightBox height={20}/>
                                        <span style={style.labelStyle}>Password</span>
                                        <input type={'text'} style={style.inputStyle} placeholder={'Choose a password'} onChange={(e)=>setPassword(e.target.value)} value={password || ''}/>
                                        <HeightBox height={30}/>
                                        <button style={style.btnStyle} onClick={submit}>{loading?'Please wait...':'Register'}</button>
                                    </Stack>
                                </Stack>
                                <Stack alignItems={'center'} justifyContent={'center'}>
                                    <span style={{fontSize:16,color:'#fff',marginTop:10}}>OR</span>
                                    <span style={{fontSize:14,color:'#fff'}}>Don't have an account? <a href='register'>Create account</a></span>
                                </Stack> 
                            </div> 
                        </div>
                        <HeightBox height={60}/>
                    </section>
                    <HeightBox height={60}/>
                </Stack>
            </div>
        </Stack>
    </div>
    );
}
