import { Box, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px', marginTop: 'auto' }}>
      <Typography variant="body2" align="center" color="textSecondary">
        © {new Date().getFullYear()} Wealth Health. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
