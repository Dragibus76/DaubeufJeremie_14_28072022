import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import TableRowsIcon from '@mui/icons-material/TableRows';
import logo from '../../assets/logo.png';

function NavBar() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <AppBar
      position="static"
      sx={{
        height: '80px',
      }}
    >
      <Toolbar>
        <Box
          onClick={() => navigate('/')}
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <img src={logo} alt="logo" style={{ height: '80px', marginRight: '8px' }} />
          <Typography
            color="secondary"
            variant={isMobile ? 'body2' : 'h6'}
            sx={{ fontWeight: 'bold' }}
          >
            Wealth <br />
            Health
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'start' : 'center',
          }}
        >
          <Button color="secondary" onClick={() => navigate('/')}>
            <AddIcon sx={{ marginRight: '4px' }} />
            <Typography color="secondary" variant={isMobile ? 'caption' : 'h7'}>
              New Employee
            </Typography>
          </Button>
          <Button color="secondary" onClick={() => navigate('/list-employee')}>
            <TableRowsIcon sx={{ marginRight: '4px' }} />
            <Typography color="secondary" variant={isMobile ? 'caption' : 'h7'}>
              List
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
