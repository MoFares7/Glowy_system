import React from 'react';
import DashboardLayout from '../../../components/LayoutContainer/LayoutDashboard';
import { colors } from '../../../assets/theme/colors';
import { Box } from '@mui/material';
import AllBranchesSection from '../ui/all_branches_section';
import SummaryBranch from '../feature/summary_branch';
import SpecializersServicesBranch from '../feature/specializers_services_branch';
import useTabs from '../hook/use_tab';
import MainTab from '../../../components/Tabs/index';

const DetailsBranchPage = () => {
    const tabNames = ['Summary', 'Specializers & Services', 'Appointments', 'Balance'];

    const { selectedTab, handleTabClick } = useTabs(0);

    return (
        <DashboardLayout>
            <Box
                sx={{
                    pb: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: `1px solid ${colors.secondary.main}`,
                    backgroundColor: colors.background.paper,
                }}
            >
                {/* Main Tabs Section */}
                <Box
                    sx={{
                        width: '75%',
                        borderRight: `1px solid ${colors.secondary.light}`,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            px: 2,
                            py: 1,
                            height: '75px',
                            borderBottom: `1px solid ${colors.secondary.main}`,
                        }}
                    >
                        <MainTab
                            tabNames={tabNames}
                            selectedTab={selectedTab}
                            onTabClick={handleTabClick}
                        />
                    </Box>

                    {/* Conditionally render components based on selected tab */}
                    {selectedTab === 0 && <SummaryBranch />}
                    {selectedTab === 1 && <SpecializersServicesBranch />}
                </Box>

                <Box
                    sx={{
                        width: '25%',
                        borderLeft: `1px solid ${colors.secondary.main}`,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <AllBranchesSection />
                </Box>
            </Box>
        </DashboardLayout>
    );
};

export default DetailsBranchPage;
