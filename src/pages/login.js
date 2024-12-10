import axios from "axios"; 
import Stack from "@mui/material/Stack";
import React from "react";
import logo from '../images/new-logo.png';
import HeightBox from "../components/heightBox";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  console.log("login page");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    } else if (!password || password.length < 6) {
      setError('Please enter a valid password');
      setLoading(false);
      return;
    }

    try {

      const response = await axios.post("https://dashboard.deepaarogya.com/login", {
        email,
        password
      });


      if (response.status ===200) {
        setError(null);
        localStorage.setItem("token", response.data.token); // Save token if needed
       console.log("login",response.data);
        navigate("/demo"); // Redirect to the demo page
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#07071C', height: '100%' }}>
      <Stack direction={'column'}>
        <div className="main-content">
          <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <section className="iq-bg-over iq-pb-70 col-md-6 offset-md-4" style={{
              margin: '40px',
              borderRadius: '15px',
              padding: '40px',
              background: '#010111'
            }}>
              <Stack alignItems={'center'} justifyContent={'center'}>
                <img src={logo} alt='logo' width={260} />
                <span style={{ fontSize: 24, fontWeight: 600, color: '#fff' }}>Login</span>
              </Stack>
              <HeightBox height={20} />
              <Stack alignItems={'center'} style={{ width: '100%' }} direction={'row'} justifyContent={'center'}>
                <Stack style={{ width: '70%' }} justifyContent={'center'}>
                  <HeightBox height={20} />
                  <span style={{ color: '#ff0000' }}>{error}</span>
                  <HeightBox height={10} />
                  <label style={{ color: '#fff', fontSize: 15 }}>Email</label>
                  <input
                    type={'text'}
                    placeholder={'Enter your email'}
                    style={{
                      outline: 'none',
                      border: 'none',
                      borderRadius: 10,
                      padding: '10px',
                      width: '100%'
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <HeightBox height={20} />
                  <label style={{ color: '#fff', fontSize: 15 }}>Password</label>
                  <input
                    type={'password'}
                    placeholder={'Enter your password'}
                    style={{
                      outline: 'none',
                      border: 'none',
                      borderRadius: 10,
                      padding: '10px',
                      width: '100%'
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <HeightBox height={30} />
                  <button
                    style={{
                      background: '#02E0B8',
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: 700,
                      border: 'none',
                      borderRadius: 10,
                      height: 45,
                      cursor: 'pointer',
                      width: '100%'
                    }}
                    onClick={submit}
                    disabled={loading}
                  >
                    {loading ? 'Please wait...' : 'Login'}
                  </button>
                </Stack>
              </Stack>
            </section>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
