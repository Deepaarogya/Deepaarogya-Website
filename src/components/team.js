import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import team1 from '../images/pandey.png';
import team3 from '../images/Shivani.jpeg';
import team4 from '../images/Dipali.jpeg';
import team5 from '../images/Prabhu.jpeg';
import team6 from '../images/Abhishek_Yadav.jpeg';
import team2 from '../images/Akash.jpeg';
import Stack from '@mui/material/Stack';
import HeightBox from './heightBox';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function Team(){
    return (
       <Stack alignItems={'center'} style={{width:'100%'}} justifyContent={'center'}>
        
        
        <Box sx={{ flexGrow: 1 }} style={{width:'75%'}} >
        <Stack alignItems={'center'}>
            <h2 style={{color:'#fff',fontSize:'42px',lineHeight:'45px',fontFamily:'Arial, Helvetica, sans-serif'}}>The Deepaarogya Team</h2>
            <span style={{fontSize:18,color:'#fff',fontFamily:'Arial, Helvetica, sans-serif',textAlign:'center'}}>Our team of Doctors, Researchers, and Engineers are all working together to create new AI and discover opportunities to increase the availability and accuracy of healthcare technologies globally, to realize long-term health technology potential.</span>
        </Stack>
        <HeightBox height={50}/>
            <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                
                <Grid xs={2} sm={4} md={4} key={'1'} style={{marginBottom:10}}>
                    <Card sx={{ maxWidth: 345 }} style={{borderRadius:11,background:'#121228'}}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={team1}
                            alt="Paella dish"
                            style={{borderRadius:10}}
                        />
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <span style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Abhishek Kumar Pandey</span><br/>
                                <span style={{fontSize:16,color:'#fff',textAlign:'center'}}>Founder & CEO</span>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={2} sm={4} md={4} key={'2'} style={{marginBottom:10}}>
                    <Card sx={{ maxWidth: 345 }} style={{borderRadius:11,background:'#121228'}}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={team2}
                            alt="Paella dish"
                            style={{borderRadius:10}}
                        />
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <span style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Akash Desai</span><br/>
                                <span style={{fontSize:16,color:'#fff',textAlign:'center'}}>Chief  Data Scientist</span>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={2} sm={4} md={4} key={'3'} style={{marginBottom:10}}>
                    <Card sx={{ maxWidth: 345 }} style={{borderRadius:11,background:'#121228'}}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={team6}
                            alt="Paella dish"
                            style={{borderRadius:10}}
                        />
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <span style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Abhishek Yadav</span><br/>
                                <span style={{fontSize:16,color:'#fff'}}>Lead Data Scientist</span>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={2} sm={4} md={4} key={'3'} style={{marginBottom:10}}>
                    <Card sx={{ maxWidth: 345 }} style={{borderRadius:11,background:'#121228'}}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={team3}
                            alt="Paella dish"
                            style={{borderRadius:10}}
                        />
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <span style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Dr. Shivani Fotedar</span><br/>
                                <span style={{fontSize:16,color:'#fff'}}>Co-founder(Medical) </span>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={2} sm={4} md={4} key={'4'} style={{marginBottom:10}}>
                    <Card sx={{ maxWidth: 345 }} style={{borderRadius:11,background:'#121228'}}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={team4}
                            alt="Paella dish"
                            style={{borderRadius:10}}
                        />
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <span style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Dr. Dipali Taneja</span><br/>
                                <span style={{fontSize:16,color:'#fff',textAlign:'center'}}>Medical Specialist(ICU) </span>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={2} sm={4} md={4} key={'5'} style={{marginBottom:10}}>
                    <Card sx={{ maxWidth: 345 }} style={{borderRadius:11,background:'#121228'}}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={team5}
                            alt="Paella dish"
                            style={{borderRadius:10}}
                        />
                        <CardContent>
                            <Stack alignItems={'center'}>
                                <span style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Dr. Prabhu Kalyan Dash</span><br/>
                                <span style={{fontSize:16,color:'#fff',textAlign:'center'}}>Med-Tech Specialist </span>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        <HeightBox height={100}/>
        </Stack>
       
    );
}
