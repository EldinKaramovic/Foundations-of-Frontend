import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          I am an IBU Information technologies student with a passion for creating useful, unique and functional web applications.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;