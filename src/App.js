import './App.css';
import {Route, Routes} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import Home from './pages/home';
import ContactUs from "./pages/contact_us";
import Footer from "./components/footer";
import Nav from "./components/nav";
import AboutUs from "./pages/about_us";
import Demo from "./pages/demo";
import Register from './pages/register';
import Withoutnav from './components/withoutnav';
import Withnav from './components/withnav';
import Login from './pages/login';
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
        <Route element={<Withoutnav />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Withnav />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/demo' element={<Demo />} />
        </Route>
        </Routes>
    </ThemeProvider>
  );
  
}

export default App;
