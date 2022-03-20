import React, { useState, Suspense } from 'react';
import { Box, Typography, Divider, Container } from '@mui/material';
import "../pages/Home.css";
import img1 from '../assets/awards/1.png';
import img2 from '../assets/awards/2.png';
import img3 from '../assets/awards/3.png';
import img4 from '../assets/awards/4.png';

import { useHistory } from "react-router-dom";

export default function AboutUs() {
    return (

        <Box id="aboutUS" className="aboutUsBox" display="flex" >
            <Box display="flex" className='internalAboutBox' >

                <Box className='part1'>
                    <Container className='part1Container'>
                        <Typography className='headerText' color="#000" variant="h3" fontWeight="bold">ABOUT US</Typography>
                        <Typography className='aboutText' color="#000" paragraph="true" variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu cursus ipsum, eu fermentum lorem.
                            Nam pretium lacus non orci malesuada, sed volutpat nisi congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Vestibulum rhoncus convallis lacus, posuere convallis nunc imperdiet eu.
                        </Typography>
                        <Typography className='aboutText' color="#000" paragraph="true" variant="h6">
                            Vivamus in ultricies dui, at luctus neque.
                            Mauris pulvinar scelerisque justo. Nunc ac quam massa.
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </Typography>
                    </Container>
                </Box>
                <Divider orientation="vertical" flexItem variant='middle' sx={{ borderRightWidth: 3 }} />
                <Box className='part2'>
                    <Container>
                        <div className="panelsAbout">
                            <div className="panelAbout panel1About">
                                <p>Let's</p>
                            </div>
                            <div className="panelAbout panel2About">
                                <p>Be</p>
                            </div>
                            <div className="panelAbout panel3About">
                                <p>UnsTOPpable</p>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
            <Box className='awardsBox'>
                <img src={img1} alt='award1' className='awardImg' loading="lazy" />
                <img src={img2} alt='award2' className='awardImg fda' loading="lazy" />
                <img src={img3} alt='award3' className='awardImg' loading="lazy" />
                <img src={img4} alt='award4' className='awardImg halal' loading="lazy" />
            </Box>
        </Box>

    )
}