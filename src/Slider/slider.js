import React, { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./slider.css";

const Slider = (props) => {
    const { slider_data } = props;
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slider_data.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slider_data.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slider_data.length) % slider_data.length
        );
    };

    return (
        <Box className="slider-container">
            <img
                src={slider_data[currentSlide].img}
                alt={slider_data[currentSlide].title}
                className="slider-image"
            />
            <Box className="slider-text">
                {slider_data[currentSlide].title &&
                    <Typography variant="h4" fontWeight="bold">
                        {slider_data[currentSlide].title}
                    </Typography>
                }
                {slider_data[currentSlide].description &&
                    <Typography variant="h6" mt={1} fontWeight="bold">
                        {slider_data[currentSlide].description}
                    </Typography>
                }
            </Box>
            
            <Box className="slider-dots">
                {slider_data.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`slider-dot ${index === currentSlide ? "active" : ""}`}
                    />
                ))}
            </Box>

            <Button onClick={prevSlide} className="slider-button prev">
                <ArrowBackIosIcon />
            </Button>
            <Button onClick={nextSlide} className="slider-button next">
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    );
}

export default Slider;
