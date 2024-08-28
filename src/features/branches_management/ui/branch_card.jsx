import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { colors } from '../../../assets/theme/colors';
import { borders } from '../../../assets/theme/borders';
import { MoreVertOutlined } from '@mui/icons-material';
import { fonts } from '../../../assets/theme/fonts';

const BranchCard = ({ image, title, subTitle, status }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            borderRadius: borders.borderRadius.sm,
            textAlign: 'center',
            py: 3,
            px: 2,
            border: `1px solid ${colors.secondary.main}`,
            position: 'relative'
        }}>
            <IconButton
                sx={{ position: 'absolute', top: 8, right: 8 }}
                onClick={handleClick}
            >
                <MoreVertOutlined />
            </IconButton>
            <Box sx={{
                mb: 2,
                '& img': {
                    width: 100,
                    height: 100,
                    objectFit: 'cover',
                    borderRadius: borders.borderRadius.md,
                    backgroundColor:'red'
                }
            }}>
                <img src={image} alt={title} />
            </Box>

            <Typography typography={fonts.subtitle1} sx={{ color: '#191D23' }}>{title}</Typography>
            <Typography typography={fonts.subtitle1} sx={{ color: colors.text.secondary }}>{subTitle}</Typography>

            <Box sx={{
                mt: 2,
                mx: 10,
                py: 0.5,
                borderRadius: borders.borderRadius.lg,
                color: status === 'Active' ? colors.success?.main : colors.error?.main,
                backgroundColor: status === 'Active' ? colors.success?.state : colors.error?.state
            }}>
                {status}
            </Box>



            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Action 1</MenuItem>
                <MenuItem onClick={handleClose}>Action 2</MenuItem>
                <MenuItem onClick={handleClose}>Action 3</MenuItem>
            </Menu>

        </Box>
    );
}

export default BranchCard;
