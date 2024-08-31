import React from 'react';
import { Button, Box, Typography, TypographyProps } from '@mui/material';
import { borders } from '../../../assets/theme/borders';
import { colors } from '../../../assets/theme/colors';

interface PrimaryButtonProps {
    title?: string;
    width?: string | number;
    height?: string | number;
    fontType?: 'body1' | 'body2' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2';
    borderColor?: string;
    borderRadius?: string | number;
    backgroundColor?: string;
    colorTitle?: string;
    hoverColor?: string;
    isTitleAndIcon?: boolean;
    isIcon?: boolean;
    icon?: string;
    fontSize?: string | number;
    onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    title,
    width,
    height,
    fontType,
    borderColor = 'transparent',
    borderRadius = borders.borderRadius.sm,
    backgroundColor,
    colorTitle = 'inherit',
    hoverColor,
    isTitleAndIcon = false,
    isIcon = false,
    icon,
    fontSize,
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
                height: height ? height : 40,
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
                        <img src={icon} alt="icon" style={{ width: 24, height: 24 }} />
                    )}
                    <Typography variant={fontType} fontSize={fontSize} mx={0.5}>
                        {title}
                    </Typography>
                </Box>
            )}
        </Button>
    );
};

export default PrimaryButton;
