import React, { useState } from 'react';
import { Drawer, List, ListItem as MuiListItem, Collapse, Box, } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { useTheme, useMediaQuery } from '@mui/material';
import logo from '../../assets/images/logo.svg';
import dashboardLight from '../../assets/icons/dashboard-light.svg';
import dashboardDark from '../../assets/icons/dashboard-dark.svg';
import manageSalonDark from '../../assets/icons/manage-salon-dark.svg';
import manageSalonLight from '../../assets/icons/manage-salon-light.svg';
import circularOutlined from '../../assets/icons/circular-outlined.svg';
import circularOutlinedDark from '../../assets/icons/circular-outlined-dark.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { styled } from '@mui/system';
import { colors } from '../../assets/theme/colors';
import { ListItemStyle } from './styles';
import { borders } from '../../assets/theme/borders';

const ListItem = styled(MuiListItem)(({ selected, isHighlighted }) => ({
  backgroundColor: isHighlighted ? colors.secondary.main : selected ? colors.primary.state : 'inherit',
  color: selected ? 'white' : 'inherit',
  borderRadius: selected ? '4px' : '0',

  '&.Mui-selected': {
    backgroundColor: `${colors.primary.state} !important`,
    color: 'white',
    borderRadius: borders.borderRadius.md,
  },
  '&.Mui-selected:hover': {
    backgroundColor: `${colors.primary.state} !important`,
    borderRadius: borders.borderRadius.md,
  },
  '&:hover': {
    backgroundColor: selected ? 'darkred' : 'lightgray',
    borderRadius: borders.borderRadius.md,
  },
}));

const Sidebar = ({ isMini, onMouseEnter, onMouseLeave, isOpen }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const isManageSalonHighlighted = selectedIndex === 2 || selectedIndex === 3;

  const handleListItemClick = (index) => {
    if (selectedIndex !== index) {
      setSelectedIndex(index);
    }
    if (index === 1) {
      setOpen(!open);
    }
  };

  return (
    <>
      <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        anchor="left"
        open={isOpen}
        onClose={() => { }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        sx={{
          width: isMini ? 250 : 250,
          display: 'flex',
          textAlign: 'center',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isMini ? 250 : 250,
            padding: isMini ? '8px' : '15px',
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
      >
        <List>
          <img src={logo} alt="Logo" style={{ padding: isMini ? '8px' : '16px' }} />

          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={() => handleListItemClick(0)}
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <img src={selectedIndex === 0 ? dashboardLight : dashboardDark} alt="Dashboard" />
            <ListItemStyle primary="Dashboard" />
          </ListItem>

          <ListItem
            button
            selected={selectedIndex === 1}
            isHighlighted={isManageSalonHighlighted}
            onClick={() => handleListItemClick(1)}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, width: '100%' }}>
              <img src={selectedIndex === 1 ? manageSalonLight : manageSalonDark} alt="Manage Salon" />
              <ListItemStyle primary="Manage Salon" />
              {open ? <ExpandLess /> : <img src={arrowRight} />}
            </Box>
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                selected={selectedIndex === 2}
                onClick={() => handleListItemClick(2)}
                sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                  <img src={selectedIndex === 2 ? circularOutlined : circularOutlinedDark} alt="Branches list" />
                </Box>
                <ListItemStyle primary="Branches list" />
              </ListItem>

              <ListItem
                button
                selected={selectedIndex === 3}
                onClick={() => handleListItemClick(3)}
                sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                  <img src={selectedIndex === 3 ? circularOutlined : circularOutlinedDark} alt="Departments list" />
                </Box>
                <ListItemStyle primary="Departments list" />
              </ListItem>

              <ListItem
                button
                selected={selectedIndex === 4}
                onClick={() => handleListItemClick(4)}
                sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                  <img src={selectedIndex === 4 ? circularOutlined : circularOutlinedDark} alt="Team Members" />
                </Box>
                <ListItemStyle primary="Team Members" />
              </ListItem>
            </List>
          </Collapse>
        </List >
      </Drawer >
    </>
  );
};

export default Sidebar;
