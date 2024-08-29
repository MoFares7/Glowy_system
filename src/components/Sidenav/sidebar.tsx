import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem as MuiListItem, Collapse, Box, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
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

interface SidebarProps {
    isMini: boolean;
    isOpen: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClose: () => void;
}

const ListItem = styled(MuiListItem)<{ selected?: boolean; isHighlighted?: boolean; isRed?: boolean }>(({ selected, isHighlighted, isRed }) => ({
    backgroundColor: isRed ? colors.info?.light : isHighlighted ? colors.secondary?.main : selected ? colors.primary?.state : 'inherit',
    color: selected || isRed ? 'white' : 'inherit',
    borderRadius: selected || isRed ? '4px' : '0',

    '&.Mui-selected': {
        backgroundColor: `${colors.primary?.state} !important`,
        color: 'white',
        borderRadius: borders.borderRadius.md,
    },
    '&.Mui-selected:hover': {
        backgroundColor: `${colors.primary?.state} !important`,
        borderRadius: borders.borderRadius.md,
    },
    '&:hover': {
        borderRadius: borders.borderRadius.md,
    },
}));

const Sidebar: React.FC<SidebarProps> = ({ isMini, onMouseEnter, onMouseLeave, isOpen, onClose }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const navigate = useNavigate();
    const location = useLocation();

    const isManageSalonHighlighted = [2, 3].includes(selectedIndex);
    const isRed = isManageSalonHighlighted;

    // Handle the submenu state based on the current route
    useEffect(() => {
        if (location.pathname.startsWith('/manage-salon')) {
            setOpen(true);
            if (location.pathname === '/manage-salon/branches') {
                setSelectedIndex(2);
            } else if (location.pathname === '/manage-salon/departments') {
                setSelectedIndex(3);
            } else {
                setSelectedIndex(1);
            }
        } else if (location.pathname === '/details') {
            setOpen(false); // Close Manage Salon submenu when not within it
            setSelectedIndex(3);
        } else if (location.pathname === '/') {
            setOpen(false);
            setSelectedIndex(0);
        }
    }, [location.pathname]);

    const handleListItemClick = (index: number, path?: string) => {
        setSelectedIndex(index);
        if (path) {
            navigate(path);
        }

        if (index === 1) {
            setOpen(prevOpen => !prevOpen);
        }

        if (isSmallScreen) {
            onClose();
        }
    };

    return (
        <Drawer
            variant={isSmallScreen ? 'temporary' : 'permanent'}
            anchor="left"
            open={isOpen}
            onClose={onClose}
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
                    // button
                    selected={selectedIndex === 0}
                    onClick={() => handleListItemClick(0, '/')}
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                >
                    <img src={selectedIndex === 0 ? dashboardLight : dashboardDark} alt="Dashboard" />
                    <ListItemStyle primary="Dashboard" />
                </ListItem>

                <ListItem
                    // button
                    selected={selectedIndex === 1}
                    isHighlighted={isManageSalonHighlighted}
                    isRed={isRed}
                    onClick={() => handleListItemClick(1)}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, width: '100%' }}>
                        <img src={selectedIndex === 1 ? manageSalonLight : manageSalonDark} alt="Manage Salon" />
                        <ListItemStyle primary="Manage Salon" isRed={isRed} />
                        {open ? <ExpandLess /> : <img src={arrowRight} alt="Expand" />}
                    </Box>
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            // button
                            selected={selectedIndex === 2}
                            onClick={() => handleListItemClick(2, '/manage-salon/branches')}
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
                            onClick={() => handleListItemClick(3, '/details')}
                            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                        >
                            <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                                <img src={selectedIndex === 3 ? circularOutlined : circularOutlinedDark} alt="Departments list" />
                            </Box>
                            <ListItemStyle primary="Departments list" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};

export default Sidebar;
