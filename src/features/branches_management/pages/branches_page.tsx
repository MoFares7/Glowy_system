import React from 'react';
import { Box, Grid, Drawer, Typography, CircularProgress } from '@mui/material';
import DashboardLayout from '../../../shared/components/LayoutContainer/LayoutDashboard';
import MainInformationTable from '../../../shared/components/Table/main_table';
import HeaderLayout from '../../../shared/components/LayoutContainer/HeaderLayout/header_layout';
import { colors } from '../../../assets/theme/colors';
import BranchCard from '../ui/branch_card';
import AddBranchContent from '../feature/add_branch_content';
import Footer from '../../../shared/components/Footer/footer';
import useBranches from '../hook/use_branch';

const BranchesPage: React.FC = () => {
  const {
    viewMode,
    setViewMode,
    selected,
    handleSelect,
    drawerOpen,
    setDrawerOpen,
    rows,
    data,
    isError,
    isLoading,
    handleAddBranch
  } = useBranches();

  return (
    <DashboardLayout>
      <Box sx={{ px: 5, py: 3, border: `1px solid ${colors.secondary?.main}`, backgroundColor: colors.background?.paper }}>
        <HeaderLayout
          viewMode={viewMode}
          setViewMode={setViewMode}
          selectedCount={selected.length}
          handleAddBranch={handleAddBranch}
        />
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <CircularProgress />
          </Box>
        ) : isError ? (
          <Typography color="error" variant="h6" align="center">
            Something went wrong while fetching branches.
          </Typography>
        ) : (
          viewMode === 'table' ? (
            <MainInformationTable
              selected={selected}
              onSelect={handleSelect}
              rows={rows}
            />
          ) : (
            <Grid container spacing={3}>
              {data?.data?.data.map((branch: any) => (
                <Grid item key={branch.id} xs={12} sm={6} md={4} lg={2.4}>
                  <BranchCard
                    image={branch.images[0]}
                    title={branch.name_en}
                    subTitle={branch.description_en}
                    status={branch.activateStatus === 'ACTIVE' ? 'Active' : 'Inactive'}
                  />
                </Grid>
              ))}
            </Grid>
          )
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: {
                sm: '85%',
                md: '60%',
                xl: '35%'
              },
              justifyContent: 'center',
            },
          }}
        >
          <AddBranchContent setDrawerOpen={setDrawerOpen} />
        </Drawer>

        <Footer />
      </Box>
    </DashboardLayout>
  );
};

export default BranchesPage;
