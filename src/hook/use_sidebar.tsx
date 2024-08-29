import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';

type UseSidebarReturn = {
  open: boolean;
  selectedIndex: number;
  isManageSalonRed: boolean;
  handleListItemClick: (index: number) => void;
};

const useSidebar = (onClose?: () => void): UseSidebarReturn => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
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

  const getSelectedIndex = (path: string): number => {
    if (path === '/') return 0;
    if (path === '/manage-salon/branches') return 2;
    if (path === '/manage-salon/departments') return 3;
    return -1;
  };

  const isManageSalonRed = selectedIndex === 2 || selectedIndex === 3;

  const handleListItemClick = (index: number): void => {
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
