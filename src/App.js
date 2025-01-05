import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { sections } from "./data/data";
import "./App.css";
import Header from "./Header/header";
import Slider from "./Slider/slider";

const App = () => {
  

  return (
    <Box>
      <Header sections={sections}/>

      <Box sx={{ marginTop: 'var(--header-height)' }}>
        <Slider/>

        <Container sx={{ mt: 4, m:0, maxWidth: "100% !important", padding: "0px !important"}}>
          {sections.map((section, index) => (
            <Box
              key={section.id}
              id={section.id}
              className={`section-container ${
                index % 2 === 0 ? "left-aligned" : "right-aligned"
              }`}
            >

              <Box className="section-text">
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {section.title}
                </Typography>
                {Array.isArray(section.description) ? (
                  <ul style={{ paddingLeft: "20px" }}>
                    {section.description.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Typography variant="body1">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="body1">{section.description}</Typography>
                )}
              </Box>

              {/* Right Side (Image) */}
              <Box className="section-image">
                <img
                  src={section.img}
                  alt={section.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Container>

        <Box component="footer" className="footer">
          <Typography variant="body1">Contact: Ambaraa (XXXXXXXXXX)</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
