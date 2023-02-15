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
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/demo' element={<Demo />} />
        </Routes>
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
