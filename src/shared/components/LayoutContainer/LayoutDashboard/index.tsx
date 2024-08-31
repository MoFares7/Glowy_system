
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../Sidenav/sidebar';
import { colors } from '../../../../assets/theme/colors'

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar isSidebarOpen={isSidebarOpen} onSidebarToggle={handleSidebarToggle} />
            <Box
                sx={{
                    flexGrow: 1,
                    margin: 1,
                    backgroundColor: colors.background?.default
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default DashboardLayout;
