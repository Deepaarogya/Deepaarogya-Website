// import Stack from "@mui/material/Stack";
// import React from "react";
// import logo from '../images/new-logo.png';
// import HeightBox from "../components/heightBox";
// export default function Register(){
//     var style = {
//         service_2: {
//             margin: '40px',
//             borderRadius: '15px',
//             padding: '40px',
//             background:'#010111'
//         },
//         inputStyle:{

//             outline:'none',
//             border:'none',
//             borderRadius:10
//         },
//         labelStyle:{
//             color:'#fff',
//             fontSize:15
//         },
//         btnStyle:{
//             background:'#02E0B8',
//             color:'#fff',
//             fontSize:15,
//             fontWeight:700,
//             border:'none',
//             borderRadius:10,
//             height:45,
//             cursor:'pointer'
//         }
//     }
//     const [error,setError] = React.useState(null);
//     const [loading,setLoading] = React.useState(false);
//     const [success,setSuccess] = React.useState();
//     const [name,setName] = React.useState(null);
//     const [phone,setPhone] = React.useState(null);
//     const [email,setEmail] = React.useState(null);
//     const [password,setPassword] = React.useState(null);
//     const hospital_id = "8b6eab5d-5eeb-4f9c-bab1-caa1e5dc4d37";//(TODO)This should not be hardocded, should instead be fetched or made to be filled by user

//     const submit = (e) =>{
//         e.preventDefault();
//         setLoading(true);
//         if(name===null || name.length<4){
//             setError('Please enter name')
//             setLoading(false);
//             return;
//         }else if(phone===null || phone.length!=10){
//             setError('Please enter valid phone number, only 10 digit')
//             setLoading(false);
//             return;
//         }else if(email===null || !email.includes('@')){
//             setError('Please enter valid email')
//             setLoading(false);
//             return;
//         }else if(password===null || password.length<6){
//             setError('Password should be greater than 5')
//             setLoading(false);
//             return;
//         }else{
//             setError(null);
//             setSuccess('Api is under construction');
            
//         }
//         axios.post('http://localhost:5000/signup', {
//             name,
//             phone,
//             email,
//             password,
//             hospital_id
//           })
//           .then((response) => {
//             setLoading(false);
//             setSuccess(response.data.message);
//           })
//           .catch((error) => {
//             setLoading(false);
//             setError(error.response.data.error);
//           });    
//     }
//     return (
//         <div style={{backgroundColor:'#07071C',height:'100%'}}>
//         <Stack direction={'column'}>
//             <div className="main-content">
//                 <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    
//                     <section className="iq-bg-over iq-pb-70 col-md-6 offset-md-4" style={style.service_2}>
                  
//                         <div className="iq-mb-30 fadeInUp wow align-items-center">
//                             <div className="title-box wow fadeInUp">
//                                 <Stack alignItems={'center'} justifyContent={'center'}>
//                                     <img src={logo} alt='logo' width={260}/>
//                                     <span style={{fontSize:24,fontWeight:600,color:'#fff'}}>Create an account</span>
//                                 </Stack>
//                                 <HeightBox height={20}/>
//                                 <Stack alignItems={'center'} style={{width:'100%'}} direction={'row'} justifyContent={'center'}>
//                                     <Stack style={{width:'70%'}} justifyContent={'center'}>
//                                         <span style={{color:'#ff0000'}}>{error}</span>
//                                         <span style={{color:'#059862'}}>{success}</span>
//                                         <span style={style.labelStyle}>Your Name</span>
//                                         <input type={'text'} style={style.inputStyle} placeholder={'Enter your name'} onChange={(e)=>setName(e.target.value)} value={name || ''}/>
//                                         <HeightBox height={20}/>
//                                         <span style={style.labelStyle}>Phone</span>
//                                         <input type={'text'} style={style.inputStyle} placeholder={'Enter your phone number'} onChange={(e)=>setPhone(e.target.value)} value={phone || ''}/>
//                                         <HeightBox height={20}/>
//                                         <span style={style.labelStyle}>Email</span>
//                                         <input type={'text'} style={style.inputStyle} placeholder={'Enter your email'} onChange={(e)=>setEmail(e.target.value)} value={email || ''}/>
//                                         <HeightBox height={20}/>
//                                         <span style={style.labelStyle}>Password</span>
//                                         <input type={'text'} style={style.inputStyle} placeholder={'Choose a password'} onChange={(e)=>setPassword(e.target.value)} value={password || ''}/>
//                                         <HeightBox height={30}/>
//                                         <button style={style.btnStyle} onClick={submit}>{loading?'Please wait...':'Register'}</button>
//                                     </Stack>
//                                 </Stack>
//                                 <Stack alignItems={'center'} justifyContent={'center'}>
//                                     <span style={{fontSize:16,color:'#fff',marginTop:10}}>OR</span>
//                                     <span style={{fontSize:14,color:'#fff'}}>Already have an account? <a href='/login'>Login</a></span>
//                                 </Stack> 
//                             </div> 
//                         </div>  
//                     </section>
//                 </Stack>
//             </div>
//         </Stack>
//     </div>
//     );

import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import axios from "axios";  // Import axios for API requests
import logo from '../images/new-logo.png';
import HeightBox from "../components/heightBox";

export default function Register(){
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
            borderRadius:10,
            padding: '10px',
            width: '100%',
            color: '#fff',
            background: '#1d1d3b',
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
    
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(null);
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Basic validation
        if (name.length < 4) {
            setError('Please enter a valid name');
            setLoading(false);
            return;
        } else if (phone.length !== 10) {
            setError('Please enter a valid phone number (10 digits)');
            setLoading(false);
            return;
        } else if (!email.includes('@')) {
            setError('Please enter a valid email');
            setLoading(false);
            return;
        } else if (password.length < 6) {
            setError('Password should be greater than 5 characters');
            setLoading(false);
            return;
        } else {
            setError(null);

            // Sending data to backend using Axios
            axios.post('http://ec2-13-235-87-37.ap-south-1.compute.amazonaws.com:5000/register-user', {
                name: name,
                phone: phone,
                email: email,
                password: password
            })
            .then(response => {
                // If API request is successful
                setSuccess(response.data.message);
                setLoading(false);
            })
            .catch(error => {
                // Handle any error from the API
                if (error.response) {
                    setError(error.response.data.error || 'An error occurred');
                } else {
                    setError('An error occurred. Please try again.');
                }
                setLoading(false);
            });
        }
    }

    return (
        <div style={{backgroundColor:'#07071C',height:'100%'}}>
            <Stack direction={'column'}>
                <div className="main-content">
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                        <section className="iq-bg-over iq-pb-70 col-md-6 offset-md-4" style={style.service_2}>
                            <div className="iq-mb-30 fadeInUp wow align-items-center">
                                <div className="title-box wow fadeInUp">
                                    <Stack alignItems={'center'} justifyContent={'center'}>
                                        <img src={logo} alt='logo' width={260}/>
                                        <span style={{fontSize:24,fontWeight:600,color:'#fff'}}>Create an account</span>
                                    </Stack>
                                    <HeightBox height={20}/>
                                    <Stack alignItems={'center'} style={{width:'100%'}} direction={'row'} justifyContent={'center'}>
                                        <Stack style={{width:'70%'}} justifyContent={'center'}>
                                            <span style={{color:'#ff0000'}}>{error}</span>
                                            <span style={{color:'#059862'}}>{success}</span>
                                            <span style={style.labelStyle}>Your Name</span>
                                            <input type={'text'} style={style.inputStyle} placeholder={'Enter your name'} onChange={(e)=>setName(e.target.value)} value={name}/>
                                            <HeightBox height={20}/>
                                            <span style={style.labelStyle}>Phone</span>
                                            <input type={'text'} style={style.inputStyle} placeholder={'Enter your phone number'} onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                                            <HeightBox height={20}/>
                                            <span style={style.labelStyle}>Email</span>
                                            <input type={'text'} style={style.inputStyle} placeholder={'Enter your email'} onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                            <HeightBox height={20}/>
                                            <span style={style.labelStyle}>Password</span>
                                            <input type={'password'} style={style.inputStyle} placeholder={'Choose a password'} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                                            <HeightBox height={30}/>
                                            <button style={style.btnStyle} onClick={submit}>{loading ? 'Please wait...' : 'Register'}</button>
                                        </Stack>
                                    </Stack>
                                    <Stack alignItems={'center'} justifyContent={'center'}>
                                        <span style={{fontSize:16,color:'#fff',marginTop:10}}>OR</span>
                                        <span style={{fontSize:14,color:'#fff'}}>Already have an account? <a href='/login'>Login</a></span>
                                    </Stack>
                                </div>
                            </div>
                        </section>
                    </Stack>
                </div>
            </Stack>
        </div>
    );
}
// }
