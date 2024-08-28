import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { fonts } from '../../../assets/theme/fonts';
import { colors } from '../../../assets/theme/colors';
import moaen from '../../../assets/icons/moaen.svg';

const sections = [
    { title: 'Dental Clinic', subtitle: 'Hematology Specialist' },
    { title: 'Dental Clinic', subtitle: 'Hematology Specialist' },
    { title: 'Dental Clinic', subtitle: 'Hematology Specialist' },
    { title: 'Dental Clinic', subtitle: 'Hematology Specialist' },
    { title: 'Dental Clinic', subtitle: 'Hematology Specialist' },
    { title: 'Dental Clinic', subtitle: 'Hematology Specialist' },
];

const AvailableSections = () => (
    <Box
        sx={{
            py: 5,
            maxHeight: '300px', // Set your desired max height
            overflowY: 'auto',   // Enable scrolling
            // Hide scrollbar
            '&::-webkit-scrollbar': {
                width: '0px',
                background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                background: 'transparent',
            },
            '-ms-overflow-style': 'none',  // IE and Edge
            'scrollbar-width': 'none',     // Firefox
        }}
    >
        <Typography sx={{ typography: fonts.h6 }}>Available Sections</Typography>
        {sections.map((section, index) => (
            <React.Fragment key={index}>
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', p: 1, mt: 2 }}>
                    <img src={moaen} alt="Section" />
                    <Box sx={{ px: 3 }}>
                        <Typography sx={{ typography: fonts.subtitle1, color: colors.text.secondary }}>
                            {section.title}
                        </Typography>
                        <Typography sx={{ typography: fonts.subtitle2 }}>
                            {section.subtitle}
                        </Typography>
                    </Box>
                </Box>
                {index < sections.length - 1 && (
                    <Divider
                        sx={{
                            mx: 2,
                            backgroundColor: colors.secondary.default,
                            width: '100%',
                            height: '1px',
                        }}
                    />
                )}
            </React.Fragment>
        ))}
    </Box>
);

export default AvailableSections;
