import React from 'react';
import { Typography, Container, Box } from "@mui/material";
import './sections_info.css';
import Slider from '../Slider/slider';

const SectionsInfo = (props) => {
    const { sections, slider_data } = props;

    return (
        <Container className="container">
            {sections.map((section, index) => (
                <Box id={section.id}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        className="section-title"
                    >
                        {index + 1}. {section.title}
                    </Typography>

                    <Box
                        key={section.id}
                        className={`section-container ${index % 2 !== 0 ? 'row-layout' : 'column-layout'}`}
                    >
                        <Box className="section-image">
                            {section.slider ? (
                                <Slider slider_data={slider_data} />
                            ) : (
                                <img src={section.img} alt={section.title} />
                            )}
                        </Box>

                        <Box className="section-text">
                            <Typography
                                variant="body1"
                                className="section-description"
                            >
                                {section.description.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <span role="img" aria-label="bullet-point">
                                                🔹
                                            </span>
                                            {line}
                                        </Box>
                                        {i !== section.description.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Container>
    );
};

export default SectionsInfo;
