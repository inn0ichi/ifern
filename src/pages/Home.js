import React, { useState, Suspense } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import "./Home.css";
import Logo from '../assets/logo/ifernLogo-trimmed.png';
import loadable from '@loadable/component';

const ContactBox = loadable(() => import('../components/ContactForm.js'));
const MeetTheTeam = loadable(() => import('../components/MeetTheTeam.js'));
const AboutUs = loadable(() => import('../components/AboutUs.js'));
const ProductSlider = loadable(() => import('../components/ProductSlider.js'));


export default function Home() {
    return (
        <Box>
            <Box id="homeBox" className="homeBg" display="flex" flexDirection="column">
                <img className='homeLogo' src={Logo} alt="ifernLogo" />
                <Typography color="#00A24D" variant="h1" fontWeight="bold">Team Bulacan</Typography>
                <Divider sx={{ borderBottomWidth: 6 }} orientation="horizontal" flexItem variant='middle' className='homeDivide MuiDivider-light' />
                <Typography color="#fff" variant="h4" fontWeight="bold" sx={{ letterSpacing: "3px" }}>As long as you are capable, Be UnsTOPpable!</Typography>
            </Box>
            <Box id="aboutUS" className="aboutUsBox" display="flex" >
                <AboutUs />
            </Box>
            <Box id="products" className="productsBox" display="flex" flexDirection="column">
                <ProductSlider />
            </Box>
            <Box id="meetTeam" className="teamBox">
                <MeetTheTeam />
            </Box>
            <Box id="contact" className="contactBox">
                <ContactBox />
            </Box>
        </Box >

    )
}