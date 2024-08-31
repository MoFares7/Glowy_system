import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { colors } from '../../../assets/theme/colors';
import { borders } from '../../../assets/theme/borders';
import { MoreVertOutlined } from '@mui/icons-material';
import { fonts } from '../../../assets/theme/fonts';

interface BranchCardProps {
  image: string;
  title: string;
  subTitle: string;
  status: string;
}

const BranchCard: React.FC<BranchCardProps> = ({ image, title, subTitle, status }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const baseUrl = 'https://194.233.86.4:8091/uploads/';

  const imageUrl = `${baseUrl}${image}`;

  return (
    <Box sx={{
      borderRadius: borders.borderRadius.sm,
      textAlign: 'center',
      py: 3,
      px: 2,
      border: `1px solid ${colors.secondary?.main}`,
      position: 'relative',
      maxWidth: 250, 
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
          width: '100%',
          height: 'auto', // Maintain aspect ratio
          maxWidth: 100, // Set a max width
          maxHeight: 100, // Set a max height
          objectFit: 'cover',
          borderRadius: borders.borderRadius.md,
        }
      }}>
        <img 
          src={imageUrl} 
          alt={title} 
        //   onError={(e) => (e.currentTarget.src = '/path/to/fallback-image.jpg')} // Fallback image
        />
      </Box>

      <Typography sx={{ typography: fonts.subtitle1, color: '#191D23' }}>{title}</Typography>
      <Typography sx={{ typography: fonts.subtitle1, color: colors.text?.secondary }}>{subTitle}</Typography>

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
