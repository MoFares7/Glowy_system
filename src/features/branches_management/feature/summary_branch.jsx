import React from 'react';
import { colors } from '../../../assets/theme/colors';
import { Box, Divider, Typography } from '@mui/material';
import { fonts } from '../../../assets/theme/fonts';
import AboutBranchSection from '../ui/about_branch_section';
import BranchImageSection from '../ui/branch_image_section';
import AvailableSections from '../ui/available_section';
import WorkHoursTable from '../ui/work_hours_page';

const SummaryBranch = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexGrow: 1, p: 4 }}>
                <Box sx={{ width: '50%' }}>
                    <AboutBranchSection />
                </Box>

                <Divider
                    orientation="vertical"
                    sx={{
                        backgroundColor: colors.secondary.default,
                        height: '100%',
                        width: '1px',
                        mx: 5
                    }}
                />

                <Box sx={{ width: '50%' }}>
                    <BranchImageSection />
                    <AvailableSections />
                </Box>
            </Box>

            <Box sx={{ px: 4 }}>
                <Typography sx={{ typography: fonts.h6 }}>Working Hours</Typography>
                <Box pt={3} />
                <WorkHoursTable />
            </Box>
        </>
    )
}

export default SummaryBranch
