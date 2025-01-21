import React from "react";
import { Typography, Box } from "@mui/material";
import { sections, yoga_slider, slider_data } from "./data/data";
import "./App.css";
import Header from "./Header/header";
import Slider from "./Slider/slider";
import SectionsInfo from "./Sections/sections_info";

const App = () => {
  

  return (
    <Box>
      <Header sections={sections}/>

      <Box sx={{ marginTop: 'var(--header-height)' }}>
        <Slider slider_data={slider_data}/>
        <SectionsInfo sections={sections} slider_data={yoga_slider}/>
      </Box>

      <Box component="footer" className="footer">
          <Typography variant="body1">
              Contact: Ambaraa (+91 - 9483054289)
          </Typography>
          <Typography variant="body1" className="footer-email">
              Email: <a href="mailto:ambaraayogaayurveda@gmail.com">ambaraayogaayurveda@gmail.com</a>
          </Typography>
          <Box className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
              </a>
          </Box>
          <Typography variant="body2" className="footer-copy">
              © 2025 Ambaraa Yoga. All rights reserved.
          </Typography>
      </Box>



    </Box>
  );
};

export default App;
