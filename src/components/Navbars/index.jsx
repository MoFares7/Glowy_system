import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Box, Typography } from '@mui/material';
import { colors } from '../../config/theme/colors';
import settingsIcon from '../../assets/icons/settings.svg';
import chatIcon from '../../assets/icons/chat.svg';
import darkIcon from '../../assets/icons/darkIcon.svg';
import notificationIcon from '../../assets/icons/notification.svg';
import personImage from '../../assets/icons/person.svg';
import { borders } from '../../assets/theme/borders';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: colors.background.paper,
  boxShadow: 'none',
  zIndex: theme.zIndex.appBar,
  borderBottom: '1px solid #D0D5DD',
  [theme.breakpoints.up('md')]: {
    width: `calc(100% - 250px)`,
    marginLeft: 250,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 0,
  },
}));

const Sidebar = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: 250,
  height: '100%',
  backgroundColor: '#fff',
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  transform: 'translateX(-100%)',
  '&.open': {
    transform: 'translateX(0)',
  },
}));

export default function Navbars({ onSidebarToggle, sidebarOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="subtitle1" color={colors.text.primary}>Sophia Bush</Typography>
          <Typography variant="subtitle2" color={colors.text.disabled}>Admin</Typography>
        </Box>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="inherit">
          <img src={darkIcon} alt="dark" style={{ width: 24, height: 24 }} />
        </IconButton>
        <Typography variant="subtitle2">Mode</Typography>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={4} color="error">
            <img src={chatIcon} alt="chat" style={{ width: 22, height: 22 }} />
          </Badge>
        </IconButton>
        <Typography variant="subtitle2">Chats</Typography>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={2} color="error">
            <img src={notificationIcon} alt="notification" style={{ width: 24, height: 24 }} />
          </Badge>
        </IconButton>
        <Typography variant="subtitle2">Notifications</Typography>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="inherit">
          <img src={settingsIcon} alt="Settings" style={{ width: 24, height: 24 }} />
        </IconButton>
        <Typography variant="subtitle2">Settings</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomAppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={onSidebarToggle}
          >
            <MenuIcon sx={{ color: colors.text.primary }} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          {/* Hidden on small screens, visible on medium and up */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <IconButton size="large" color="inherit">
              <img src={darkIcon} alt="dark" style={{ width: 24, height: 24 }} />
            </IconButton>

            <IconButton size="large" color="inherit">
              <Badge badgeContent={4} color="error">
                <img src={chatIcon} alt="chat" style={{ width: 22, height: 22 }} />
              </Badge>
            </IconButton>

            <IconButton size="large" color="inherit">
              <Badge badgeContent={2} color="error">
                <img src={notificationIcon} alt="notification" style={{ width: 24, height: 24 }} />
              </Badge>
            </IconButton>

            <IconButton size="large" edge="end" color="inherit">
              <img src={settingsIcon} alt="Settings" style={{ width: 24, height: 24 }} />
            </IconButton>

            <Box mx={3} sx={{ flexShrink: 0 }}>
              <Typography variant="subtitle1" color={colors.text.primary}>Sophia Bush</Typography>
              <Typography variant="subtitle2" color={colors.text.disabled}>Admin</Typography>
            </Box>

            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: borders.borderRadius.sm,
              }}
            >
              <img src={personImage} alt="Logo Person" style={{ width: '100%', height: 50 }} />
            </Box>
          </Box>

          {isSmallScreen && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon sx={{ color: colors.text.primary }} />
              </IconButton>

              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: borders.borderRadius.sm,
                  ml: 2,
                }}
              >
                <img src={personImage} alt="Logo Person" style={{ width: '100%', height: 50 }} />
              </Box>
            </Box>
          )}
        </Toolbar>
      </CustomAppBar>

      {/* Sidebar */}
      <Sidebar className={sidebarOpen ? 'open' : ''}>
        {/* Sidebar content goes here */}
      </Sidebar>

      {renderMobileMenu}
      <Toolbar />
    </Box>
  );
}
