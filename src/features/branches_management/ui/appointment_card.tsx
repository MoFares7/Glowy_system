import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { borders } from '../../../assets/theme/borders';
import { colors } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/theme/fonts';
import moreOption from '../../../assets/icons/moreOption.svg';

const AppointmentCard = ({ title, subTitle, colorSider, sourceImage, destinationImage, destinationTitle }) => {
    return (
        <Box sx={{
            my: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            borderRadius: borders.borderRadius.xs,
            border: `1px solid ${colors.secondary?.default}`,
            width: '100%',
            height: 'auto',
            overflow: 'hidden',
        }}>
            {/* First Section */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '70%',
                overflow: 'hidden', 
            }}>
                <Box sx={{
                    width: 7,
                    height: '100%',
                    backgroundColor: colorSider,
                    borderRadius: `${borders.borderRadius.xs} 0 0 ${borders.borderRadius.xs}`,
                }} />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mx: 2,
                    '& img': {
                        width: 50,
                        height: 50,
                        objectFit: 'cover',
                        borderRadius: borders.borderRadius.xs,
                    }
                }}>
                    <img src={sourceImage} alt={'appointment'} />
                </Box>
                <Box>
                    <Typography sx={{ typography: fonts.subtitle1, fontWeight: 500 }}>
                        {title}
                    </Typography>
                    <Typography sx={{ typography: fonts.subtitle1, fontWeight: 300 }}>
                        {subTitle}
                    </Typography>
                </Box>
            </Box>

            {/* Second Section */}
            <Box sx={{
                display: 'flex',
                width: '30%',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 1,
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mx: 2,
                        '& img': {
                            width: 50,
                            height: 50,
                            objectFit: 'cover',
                            borderRadius: borders.borderRadius.lg,
                        }
                    }}>
                        <img src={destinationImage} alt={'appointment'} />
                    </Box>
                    <Typography sx={{ typography: fonts.subtitle1, fontWeight: 400 }}>
                        {destinationTitle}
                    </Typography>
                </Box>

                <IconButton>
                    <img src={moreOption} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default AppointmentCard;
