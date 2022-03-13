import React from 'react';
import { Box, Typography, Divider, Container, Button, IconButton } from '@mui/material';
import bg from '../assets/bg.jpg'
import "./Home.css";
import Logo from '../assets/logo/ifernLogo-trimmed.png';
import img1 from '../assets/awards/1.png';
import img2 from '../assets/awards/2.png';
import img3 from '../assets/awards/3.png';
import img4 from '../assets/awards/4.png';
import prodimg1 from '../assets/productImg/1.png';
import prodimg2 from '../assets/productImg/2.png';
import prodimg3 from '../assets/productImg/3.png';
import prodimg4 from '../assets/productImg/4.png';
import jack from '../assets/members/jack.jpg';
import ayin from '../assets/members/ayinn.jpg';
import elsa from '../assets/members/elsa.jpg';
import jed from '../assets/members/jed.jpg';
import franz from '../assets/members/franz.jpg';
import logoAlt from '../assets/logo/logoAlt-trimmy.png';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link, useHistory } from "react-router-dom";


const slides = [
    { title: 'Fern-Activ', description: 'Vitamins and Minerals', image: prodimg1, button: "View Product", link: "/Activ" },
    { title: 'Fern-D', description: 'Vitamin D', image: prodimg2, button: "View Product", link: "/FernD" },
    { title: 'MilkCa', description: 'Milk Calcium Complex', image: prodimg3, button: "View Product", link: "/MilkCa" },
    { title: 'Fern Flex', description: 'Food Supplement', image: prodimg4, button: "View Product", link: "/Flex" }
];



export default function Home() {
    const history = useHistory();
    return (
        <Box>

            <Box className="homeBg" display="flex" flexDirection="column">
                <img className='homeLogo' src={Logo} alt="ifernLogo" />
                <Typography color="#00A24D" variant="h1" fontWeight="bold">Team Bulacan</Typography>
                <Divider orientation="horizontal" flexItem variant='middle' className='homeDivide MuiDivider-light' />
                <Typography color="#fff" variant="h4" fontWeight="bold" sx={{ letterSpacing: "3px" }}>As long as you are capable, Be UnsTOPpable!</Typography>
            </Box>
            <Box className="aboutUsBox" display="flex" >
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
                    <Divider orientation="vertical" flexItem variant='middle' />
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
                    <img src={img1} alt='award1' className='awardImg' />
                    <img src={img2} alt='award2' className='awardImg fda' />
                    <img src={img3} alt='award3' className='awardImg' />
                    <img src={img4} alt='award4' className='awardImg halal' />
                </Box>
            </Box>
            <Box className="productsBox" display="flex" flexDirection="column">

                <Slider className="slider-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${slide.image}') no-repeat center center`, display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}

                        >
                            <Button variant='contained' onClick={() => history.push(`/${slide.link}`)}>Learn More</Button>
                        </div>
                    ))}
                </Slider>
            </Box>
            <Box className="teamBox">
                <Box className='teamPart1'>
                    <img src={logoAlt} className='teamLogo' />
                    <Typography className='MeetTeamHeader' variant="h1" color="#fff">Meet The Team</Typography>
                </Box>
                <Divider orientation="horizontal" flexItem variant='middle' />
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
        </Box >

    )
}