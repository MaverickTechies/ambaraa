import React from 'react'
import { Typography, Container, Box } from "@mui/material";
import { CheckCircleOutline } from '@mui/icons-material'
import './sections_info.css'

const SectionsInfo = (props) => {
    const { sections } = props;
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

                        {section.points && (
                            <ul className="custom-bullet-points">
                                {section.points.map((point, i) => (
                                    <li key={i} className="custom-bullet-item">
                                        <CheckCircleOutline className="bullet-icon" /> {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Box>

                    <Box className="section-image">
                        <img src={section.img} alt={section.title} />
                    </Box>
                </Box>
            ))}
        </Container>
    )
}

export default SectionsInfo;
