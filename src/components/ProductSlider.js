import React, { useState, Suspense } from 'react';
import { Typography, Button } from '@mui/material';
import "../pages/Home.css";
import prodimg1 from '../assets/productImg/1.png';
import prodimg2 from '../assets/productImg/2.png';
import prodimg3 from '../assets/productImg/3.png';
import prodimg4 from '../assets/productImg/4.png';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useHistory } from "react-router-dom";

const slides = [
    { title: 'Fern-Activ', description: 'Vitamins and Minerals', image: prodimg1, button: "View Product", link: "/Activ" },
    { title: 'Fern-D', description: 'Vitamin D', image: prodimg2, button: "View Product", link: "/FernD" },
    { title: 'MilkCa', description: 'Milk Calcium Complex', image: prodimg3, button: "View Product", link: "/MilkCa" },
    { title: 'Fern Flex', description: 'Food Supplement', image: prodimg4, button: "View Product", link: "/Flex" }
];

export default function ProductSlider() {
    const history = useHistory();

    return (
        <Slider className="slider-wrapper">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${slide.image}') no-repeat center center`, display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}

                >
                    <Typography variant='h1' color='#fff'>{slide.title}</Typography>
                    <Typography variant='h5' color='#fff'>{slide.description}</Typography>
                    <Button color='success' variant='contained' onClick={() => history.push(slide.link)}>Learn More</Button>
                </div>
            ))}
        </Slider>
    )
}