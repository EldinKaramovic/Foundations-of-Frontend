import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  {
    title: 'Project One',
    description: 'Made my own portfolio using HTML, CSS, and BOOTSTRAP.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project Two',
    description: 'Created a restoraunt page using experience from before, and meeting the requirements.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Portfolio
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Portfolio;