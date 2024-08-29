import React from 'react';
import { Box, Typography } from '@mui/material';
import { fonts } from '../../../assets/theme/fonts';
import { colors } from '../../../assets/theme/colors';

const AboutBranchSection = () => (
    <Box sx={{ width: '100%' }}>
        <Typography sx={{ typography: fonts.h6 }}>About Branch</Typography>
        <Box sx={{ py: 1 }}>
            <Typography sx={{ typography: fonts.subtitle1, color: colors.text?.secondary }}>
                Branch Name In AR
            </Typography>
            <Typography sx={{ typography: fonts.subtitle1 }}>فرع المهاجرين</Typography>
        </Box>
        <Box sx={{ py: 1 }}>
            <Typography sx={{ typography: fonts.subtitle1, color: colors.text?.secondary }}>
                Branch Name In En
            </Typography>
            <Typography sx={{ typography: fonts.subtitle1 }}>Al-Mezzeh Branch</Typography>
        </Box>
        <Box sx={{ py: 1 }}>
            <Typography sx={{ typography: fonts.subtitle1, color: colors.text?.secondary }}>
                Branch Name In TR
            </Typography>
            <Typography sx={{ typography: fonts.subtitle1 }}>Al-Mezzeh Branch</Typography>
        </Box>
        <Box sx={{ py: 1 }}>
            <Typography sx={{ typography: fonts.subtitle1, color: colors.text?.secondary }}>
                Description In En
            </Typography>
            <Typography sx={{ typography: fonts.subtitle1 }}>
                About This Branch, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Imperdiet Dui Accumsan Sit Amet. In Pellentesque Massa Placerat Duis Ultricies Lacus. Sit Amet Risus Nullam Eget Felis Eget. Faucibus In Ornare Quam Viverra Orci Sagittis Eu Volutpat Odio.
            </Typography>
        </Box>
        <Box sx={{ py: 1 }}>
            <Typography sx={{ typography: fonts.subtitle1, color: colors.text?.secondary }}>
                Description In AR
            </Typography>
            <Typography sx={{ typography: fonts.subtitle1 }}>
                About This Branch, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Imperdiet Dui Accumsan Sit Amet. In Pellentesque Massa Placerat Duis Ultricies Lacus. Sit Amet Risus Nullam Eget Felis Eget. Faucibus In Ornare Quam Viverra Orci Sagittis Eu Volutpat Odio.
            </Typography>
        </Box>
        <Box sx={{ py: 1 }}>
            <Typography sx={{ typography: fonts.subtitle1, color: colors.text?.secondary }}>
                Description In TR
            </Typography>
            <Typography sx={{ typography: fonts.subtitle1 }}>
                About This Branch, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Imperdiet Dui Accumsan Sit Amet. In Pellentesque Massa Placerat Duis Ultricies Lacus. Sit Amet Risus Nullam Eget Felis Eget. Faucibus In Ornare Quam Viverra Orci Sagittis Eu Volutpat Odio.
            </Typography>
        </Box>
    </Box>
);

export default AboutBranchSection;
