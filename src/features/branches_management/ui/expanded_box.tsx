import { Box, Typography } from '@mui/material';
import React from 'react';
import { borders } from '../../../assets/theme/borders';
import { fonts } from '../../../assets/theme/fonts';
import arrows_up from '../../../assets/icons/arrows_up.svg';
import arrows_down from '../../../assets/icons/arrows_down.svg';

const ExpandedBox = ({ title, subTitle, colorTitle, isPrimary, initialBackgroundColor, expandedBackgroundColor, borderColor, isExpanded, onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '20px',
                backgroundColor: isExpanded && !isPrimary ? expandedBackgroundColor : initialBackgroundColor,
                border: `1px solid ${borderColor}`,
                borderRadius: borders.borderRadius.sm,
                cursor: 'pointer'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={isExpanded && !isPrimary ? arrows_up : arrows_down} alt="Toggle Icon" />
                <Typography sx={{ px: 2, typography: fonts.subtitle1, color: colorTitle }}>
                    {title}
                </Typography>
            </Box>
            <Typography sx={{ typography: fonts.subtitle1, color: colorTitle }}>
                {subTitle}
            </Typography>
        </Box>
    );
};

export default ExpandedBox;
