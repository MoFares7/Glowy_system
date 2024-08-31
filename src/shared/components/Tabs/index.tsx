import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { colors } from '../../../assets/theme/colors';

interface MainTabProps {
    tabNames: string[];
    onTabClick?: (index: number) => void;
}

const MainTab: React.FC<MainTabProps> = ({ tabNames, onTabClick }) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (onTabClick) {
            onTabClick(newValue);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                px: 2,
                pt: 2,
                height: '75px',
                borderBottom: `1px solid ${colors.secondary?.main}`,
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {tabNames.map((name, index) => (
                    <Tab key={index} label={name} sx={{ height: '75px', fontSize: '20px', fontWeight: 400 }} />
                ))}
            </Tabs>
        </Box>
    );
};

export default MainTab;
