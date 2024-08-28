import React from 'react';
import { Box, Typography } from '@mui/material';
import { borders } from '../../../assets/theme/borders';
import { colors } from '../../../assets/theme/colors';
import image from '../../../assets/images/download.jpg';
import { fonts } from '../../../assets/theme/fonts';

const BranchImageSection = () => (
    <Box sx={{ width: '100%'}}>
        <Typography sx={{ typography: fonts.h6 }}>Branch Image</Typography>
        <Box
            sx={{
                mt: 3,
                borderRadius: borders.borderRadius.md,
                overflow: 'hidden',
                backgroundColor: colors.background.paper,
                boxShadow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                src={image}
                alt="Branch"
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                }}
            />
        </Box>
    </Box>
);

export default BranchImageSection;
