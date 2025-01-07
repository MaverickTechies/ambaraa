import React from 'react'
import { Typography, Container, Box } from "@mui/material";
import './sections_info.css'
import Slider from '../Slider/slider';

const SectionsInfo = (props) => {
    const { sections, slider_data } = props;
    return (
        <Container className="container">
            {sections.map((section, index) => (
                <Box key={section.id} id={section.id} className="section-container">
                    <Box className="section-text">
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            {section.title}
                        </Typography>
                        <Typography variant="body1">
                            {section.description.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i !== section.description.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </Typography>

                    </Box>
                    
                    <Box className="section-image">
                        {section.slider ? <Slider slider_data={slider_data} /> : <img src={section.img} alt={section.title} />}
                    </Box>
                </Box>
            ))}
        </Container>
    )
}

export default SectionsInfo;
