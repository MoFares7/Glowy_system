import { Box, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../config/theme/colors'
import { borders } from '../assets/theme/borders'
import { fonts } from '../config/theme/fonts'

const BranchCard = ({ image, title, subTitle, status }) => {
    return (
        <Box sx={{
            borderRadius:borders.borderRadius.sm,
            textAlign: 'center',
            py:3,
            px: 2,
            border: `1px solid ${colors.secondary.main}`
        }}>

            <Box sx={{
                mb: 2,
                '& img': {
                    width: '100', 
                    height: '100', 
                    objectFit: 'cover',
                    borderRadius: 0
                }
            }}>
                <img src={image} alt={title} />
            </Box>

            <Typography typography={fonts.subtitle1} sx={{ color: '#191D23' }}>{title}</Typography>
            <Typography typography={fonts.subtitle1} sx={{ color: colors.text.secondary }}>{subTitle}</Typography>

            <Box sx={{
                mt:2,
                mx:10,
                py: 0.5,
                // width:'250px',
                borderRadius: borders.borderRadius.lg,
                color: status === 'Active' ? colors.success?.main : colors.error?.main,
                backgroundColor: status === 'Active' ? colors.success?.state : colors.error?.state
            }}>
                {status}
            </Box>
        </Box>
    )
}

export default BranchCard
