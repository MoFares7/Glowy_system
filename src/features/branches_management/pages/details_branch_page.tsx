import React from 'react';
import DashboardLayout from '../../../components/LayoutContainer/LayoutDashboard/index';
import { colors } from '../../../assets/theme/colors';
import { Box } from '@mui/material';
import AllBranchesSection from '../ui/all_branches_section';
import SpecializersServicesBranch from '../components/specializers_services_branch';
import useTabs from '../hook/use_tab';
import MainTab from '../../../components/Tabs/index';
import AppointmentsBranch from '../components/appointments_branch';
import BalanceBranch from '../components/balance_branch';
import SummaryBranch from '../components/summary_branch';

const DetailsBranchPage: React.FC = () => {
    const tabNames: string[] = ['Summary', 'Specializers & Services', 'Appointments', 'Balance'];

    const { selectedTab, handleTabClick } = useTabs(0);

    return (
        <DashboardLayout>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                {/* Main Tabs Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        paddingRight: '25%',
                        backgroundColor: colors.background?.paper,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderBottom: `1px solid ${colors.secondary?.light}`,
                        }}
                    >
                        <MainTab
                            tabNames={tabNames}
                            selectedTab={selectedTab}
                            onTabClick={handleTabClick}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            overflowY: 'auto',
                            '&::-webkit-scrollbar': {
                                width: '0px',
                                background: 'transparent',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'transparent',
                            },
                            '-ms-overflow-style': 'none',
                            'scrollbar-width': 'none',
                        }}
                    >
                        {selectedTab === 0 && <SummaryBranch />}
                        {selectedTab === 1 && <SpecializersServicesBranch />}
                        {selectedTab === 2 && <AppointmentsBranch />}
                        {selectedTab === 3 && <BalanceBranch />}
                    </Box>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '25%',
                        height: '100%',
                        borderLeft: `1px solid ${colors.secondary?.main}`,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: colors.background?.paper,
                    }}
                >
                    <AllBranchesSection />
                </Box>
            </Box>
        </DashboardLayout>
    );
};

export default DetailsBranchPage;
