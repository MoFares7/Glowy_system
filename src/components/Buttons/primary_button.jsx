import React from 'react';
import { colors } from '../../config/theme/colors';
import { Button, Box, Typography } from '@mui/material';
import { borders } from '../../assets/theme/borders';

const PrimaryButton = ({ title, width, borderColor, borderRadius, backgroundColor, colorTitle, hoverColor, isDark, isIcon, icon, onClick }) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                backgroundColor: isDark ? colors.primary.main : backgroundColor,
                borderRadius: borderRadius,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 40,
                height: 40,
                width: width,
                color: colorTitle,
                border: `1px solid ${borderColor}`,
                transition: isIcon ? 'transform 0.1s ease' : '',
                '&:hover': {
                    transform: isIcon ? 'translateY(-1px)' : '',
                    backgroundColor: hoverColor,
                },
            }}
        >
            {isIcon ? (
                <img src={icon} alt="icon" style={{ width: 24, height: 24 }} />
            ) : (
                <Box display="flex" alignItems="center">
                    <img src={icon} alt="icon" style={{ width: 24, height: 24, mx: 0.5 }} />
                    <Typography variant="subtitle1" mx={0.5}>
                        {title}
                    </Typography>
                </Box>
            )
            }
        </Button >
    );
};

export default PrimaryButton;
