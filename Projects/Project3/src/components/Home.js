import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, Card, CardContent } from '@mui/material';

const Home = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ maxWidth: '600px' }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>Welcome to My Portfolio</Typography>
              <Typography variant="body1" paragraph>
                Explore my projects, blogs, and more!
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/portfolio">View Portfolio</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;