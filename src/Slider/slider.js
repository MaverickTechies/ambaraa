import React, { useState, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { slider_data } from "../data/data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slider_data.length);
      }, 10000);
  
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
        <Box sx={{ position: "relative", textAlign: "center" }}>
            <img
                src={slider_data[currentSlide].img}
                alt={slider_data[currentSlide].title}
                style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectPosition: "center",
                    transition: "opacity 1s ease-in-out",
                    display: "block"
                }}
            />
            <Box
            sx={{
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
            }}
            >
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
            
            <Box
                sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "8px",
                }}
            >
                {slider_data.map((_, index) => (
                <Box
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    sx={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: "#888888",
                    backgroundColor: index === currentSlide ? "#888888" : "transparent",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
                    }}
                />
                ))}

            </Box>

            <Button
                onClick={prevSlide}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    color: "white",
                    "&:hover": { color: "#f0f0f0" },
                    padding: "10px",
                    backgroundColor: "transparent",
                }}
            >
                <ArrowBackIosIcon />
            </Button>
            <Button
                onClick={nextSlide}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    color: "white",
                    "&:hover": { color: "#f0f0f0" },
                    padding: "10px",
                    backgroundColor: "transparent"
                }}
            >
                <ArrowForwardIosIcon size={17} />
            </Button>

        </Box>

    )
}

export default Slider
