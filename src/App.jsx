import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from './components/Sidenav/sidebar';
import './App.css';
import Navbars from './components/Navbars';
import { useTheme } from './config/theme/useTheme';
import BranchesPage from './pages/branches_page';
import { colors } from './config/theme/colors';

function App() {
  const [theme] = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMiniSidebar, setIsMiniSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1200;
      setIsSidebarOpen(!isMobile);
      setIsMiniSidebar(isMobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (isMiniSidebar) setIsSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMiniSidebar) setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: colors.background.default }}>
        <Sidebar
          isOpen={isSidebarOpen}
          isMini={isMiniSidebar}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Navbars onSidebarToggle={toggleSidebar} />
        <BranchesPage />
      </div>

    </ThemeProvider>
  );
}

export default App;
