import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import bg from '../assets/bg.jpg'
import "./Home.css";
import Logo from '../assets/logo/ifernLogo-trimmed.png';

export default function Home() {
    return (
        <Box>
            <Box className="homeBg" display="flex" flexDirection="column">
                <img className='homeLogo' src={Logo} alt="ifernLogo" />
                <Typography color="#00A24D" variant="h1" fontWeight="bold">Team Bulacan</Typography>
                <Typography color="#fff" variant="h4" fontWeight="bold" sx={{ letterSpacing: "3px" }}>As long as you are capable, Be UnsTOPpable!</Typography>
            </Box>
            <Box className="aboutUsBox" display="flex" flexDirection="row" justifyContent="center">
                <Box>
                    Hello
                </Box>
                <Divider orientation="vertical" flexItem variant='middle' />
                <Box>
                    Hello 2
                </Box>
            </Box>
            <Box className="productsBox" display="flex" flexDirection="column">
                <Typography color="#00A24D" variant="h1" fontWeight="bold">Team Bulacan</Typography>
                <Typography color="#fff" variant="h4" fontWeight="bold" sx={{ letterSpacing: "3px" }}>As long as you are capable, Be UnsTOPpable!</Typography>
            </Box>
        </Box>

    )
}