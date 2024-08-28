import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { colors } from '../../assets/theme/colors';

export default function MainTab({ tabNames, onTabClick }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (onTabClick) {
            onTabClick(newValue);
        }
    };

    return (
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 620, xl: 920 }, bgcolor: colors.background.paper }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {tabNames.map((name, index) => (
                    <Tab key={index} label={name} sx={{ fontSize: '20px', fontWeight: 400 }} />
                ))}
            </Tabs>
        </Box>
    );
}
