import React, { useState, Suspense } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import jack from '../assets/members/jack.jpg';
import ayin from '../assets/members/ayinn.jpg';
import elsa from '../assets/members/elsa.jpg';
import jed from '../assets/members/jed.jpg';
import franz from '../assets/members/franz.jpg';
import logoAlt from '../assets/logo/logoAlt-trimmy.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../pages/Home.css";

export default function MeetTheTeam() {
    return (
        <Box id="meetTeam" className="teamBox">
            <Box className='teamPart1'>
                <img src={logoAlt} className='teamLogo' />
                <Typography className='MeetTeamHeader' variant="h1" color="#fff">Meet The Team</Typography>
            </Box>
            <Divider orientation="horizontal" flexItem variant='middle' sx={{ borderBottomWidth: 5 }} />
            <Box className="teamContainer">
                <div class="a-box card1">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={jack} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h2>Jack Sumalinog</h2>
                        <div>
                            Senior Field Manager
                        </div>
                    </div>
                </div>
                <div class="a-box card2">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={ayin} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h2>Arlyn Santos</h2>
                        <div>
                            Field Manager
                        </div>
                    </div>
                </div>
                <div class="a-box card3">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={franz} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h2>Michael Franz Anzures</h2>
                        <div>
                            Builder
                        </div>
                    </div>
                </div>
                <div class="a-box card4">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={jed} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h2>John Ednar Sincioco</h2>
                        <div>
                            Builder
                        </div>
                    </div>
                </div>
                <div class="a-box card5">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src={elsa} />
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h2>Ma. Elsa Cruz</h2>
                        <div>
                            Builder
                        </div>
                    </div>
                </div>
            </Box>
            <Box className='teamCardBox'>
                <Card className='card'>
                    <CardContent className='cardContainer'>
                        <img src={jack} className='cardIcon' />
                        <Box className='cardPart2'>
                            <Typography variant='h5'>Jack Sumalinog</Typography>
                            <Typography variant='subtitle1'>Senior Field Manager</Typography>
                        </Box>

                    </CardContent>
                </Card>
                <Card className='card'>
                    <CardContent className='cardContainer'>
                        <img src={ayin} className='cardIcon' />
                        <Box className='cardPart2'>
                            <Typography variant='h5'>Arlyn Santos</Typography>
                            <Typography variant='subtitle1'>Field Manager</Typography>
                        </Box>

                    </CardContent>
                </Card>
                <Card className='card'>
                    <CardContent className='cardContainer'>
                        <img src={franz} className='cardIcon' />
                        <Box className='cardPart2'>
                            <Typography variant='h5'>Michael Franz Anzures</Typography>
                            <Typography variant='subtitle1'>Builder</Typography>
                        </Box>

                    </CardContent>
                </Card>
                <Card className='card'>
                    <CardContent className='cardContainer'>
                        <img src={jed} className='cardIcon' />
                        <Box className='cardPart2'>
                            <Typography variant='h5'>John Ednar Sincioco</Typography>
                            <Typography variant='subtitle1'>Builder</Typography>
                        </Box>

                    </CardContent>
                </Card>
                <Card className='card'>
                    <CardContent className='cardContainer'>
                        <img src={elsa} className='cardIcon' />
                        <Box className='cardPart2'>
                            <Typography variant='h5'>Ma. Elsa Cruz</Typography>
                            <Typography variant='subtitle1'>Builder</Typography>
                        </Box>

                    </CardContent>
                </Card>
            </Box>
        </Box>

    )
}