import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon
import PaymentIcon from '@mui/icons-material/Payment'; // Import Payment icon
import AssessmentIcon from '@mui/icons-material/Assessment'; // Import Budget icon
import CreditCardIcon from '@mui/icons-material/CreditCard'; // Import Card icon
import { Button } from '@mui/material'; // Ensure Button is imported
import { Outlet, useNavigate } from 'react-router-dom';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'white',
  color: 'black',
}));

const AdminLayout: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedButton, setSelectedButton] = useState<string>('Home');

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
    switch (button) {
      case 'Home':
        navigate('/user/dashboard'); // Changed to user
        break;
      case 'Payments':
        navigate('/user/dashboard'); // Changed to user
        break;
      case 'Budgets':
        navigate('/user/dashboard'); // Changed to user
        break;
      case 'Cards':
        navigate('/user/dashboard'); // Changed to user
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: '#0A512F', fontWeight: 'bold' }}>
              CREDIT APP
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {['Home', 'Payments', 'Budgets', 'Cards'].map((button) => (
              <Button
                key={button}
                variant="contained"
                sx={{
                  backgroundColor: selectedButton === button ? '#0A512F' : '#ccc', // Highlight selected button
                  color: 'white',
                }}
                startIcon={button === 'Home' ? <HomeIcon /> : button === 'Payments' ? <PaymentIcon /> : button === 'Budgets' ? <AssessmentIcon /> : <CreditCardIcon />}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="success">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="success">
              <MessageIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar>U</Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, padding: theme.spacing(3) }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
