import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Sidebar from './components/Sidenav/sidebar';
import Navbars from './components/Navbars/index';
import { useTheme } from './assets/theme/useTheme';
import { colors } from './assets/theme/colors';
import RoutesManagement from './routes/routes';

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

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ backgroundColor: colors.background.default }}>
          <Sidebar
            isOpen={isSidebarOpen}
            isMini={isMiniSidebar}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClose={handleSidebarClose}
          />
          <Navbars onSidebarToggle={toggleSidebar} />
          <RoutesManagement />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
