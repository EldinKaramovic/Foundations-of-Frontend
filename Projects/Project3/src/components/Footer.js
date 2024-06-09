import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5} py={3} textAlign="center" bgcolor="primary.main" color="white">
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} My Portfolio. Stealing is prohibited.
      </Typography>
    </Box>
  );
};

export default Footer;