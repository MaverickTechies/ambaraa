import React from "react";
import { Typography, Box } from "@mui/material";
import { sections } from "./data/data";
import "./App.css";
import Header from "./Header/header";
import Slider from "./Slider/slider";
import SectionsInfo from "./Sections/sections_info";

const App = () => {
  

  return (
    <Box>
      <Header sections={sections}/>

      <Box sx={{ marginTop: 'var(--header-height)' }}>

        <Slider/>
        <SectionsInfo sections={sections}/>

        <Box component="footer" className="footer">
          <Typography variant="body1">Contact: Ambaraa (XXXXXXXXXX)</Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default App;
