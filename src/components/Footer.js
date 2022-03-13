import { Box, Typography, Divider } from '@mui/material';
import React from 'react';
import "./footer.css";
import Logo from '../assets/logo/ifernLogo-trimmed.png';
import img1 from '../assets/footerBrands/1.png';
import img2 from '../assets/footerBrands/2.png';
import img3 from '../assets/footerBrands/3.png';
import img4 from '../assets/footerBrands/4.png';
import img5 from '../assets/footerBrands/5.png';

export default function Footer() {
    return (
        <Box className='footerBox'>
            <Box className='part1'>
                <img src={Logo} alt='logo' className='logo' />
                <Typography color="white">©2021</Typography>
            </Box>
            <Divider orientation="horizontal" flexItem variant='middle' />
            <Box className='part2'>
                <img src={img1} alt='logo' className='brands dsm' />
                <img src={img2} alt='logo' className='brands blends' />
                <img src={img3} alt='logo' className='brands qd' />
                <img src={img4} alt='logo' className='brands truecal' />
                <img src={img5} alt='logo' className='brands qc' />
            </Box>

        </Box>
    )
}