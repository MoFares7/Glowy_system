// use_sidebar.js
import { useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';

const useSidebar = (onClose) => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();

    useEffect(() => {
        if (isSmallScreen && typeof onClose === 'function') {
            onClose();
        }
    }, [isSmallScreen, onClose]);

    useEffect(() => {
        if (location.pathname.startsWith('/manage-salon/')) {
            setOpen(true);
        } else {
            setOpen(false);
        }
        setSelectedIndex(getSelectedIndex(location.pathname));
    }, [location]);

    const getSelectedIndex = (path) => {
        if (path === '/') return 0;
        if (path === '/manage-salon/branches') return 2;
        if (path === '/manage-salon/departments') return 3;
        return -1;
    };

    const isManageSalonRed = selectedIndex === 2 || selectedIndex === 3;

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
        if (index === 1) {
            setOpen((prev) => !prev);
        }
    };

    return {
        open,
        selectedIndex,
        isManageSalonRed,
        handleListItemClick,
    };
};

export default useSidebar;
