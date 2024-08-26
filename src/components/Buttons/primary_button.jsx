import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const PrimaryButton = ({
    title,
    width,
    fontType,
    borderColor,
    borderRadius,
    backgroundColor,
    colorTitle,
    hoverColor,
    isTitleAndIcon,
    isIcon,
    icon,
    onClick
}) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                backgroundColor: backgroundColor,
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
                    {isTitleAndIcon && (
                        <img src={icon} alt="icon" style={{ width: 24, height: 24, marginRight: 8 }} />
                    )}
                    <Typography variant={fontType} mx={0.5}>
                        {title}
                    </Typography>
                </Box>
            )}
        </Button>
    );
};

export default PrimaryButton;
