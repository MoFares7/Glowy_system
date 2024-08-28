import React, { useState } from 'react';
import {
  Box,
  Grid,
  Drawer,
} from '@mui/material';
import DashboardLayout from '../../../components/LayoutContainer/LayoutDashboard';
import MainInformationTable from '../../../components/Table/main_table';
import branchImage from '../../../assets/images/logo.svg';
import HeaderLayout from '../../../components/LayoutContainer/HeaderLayout/header_layout';
import { colors } from '../../../assets/theme/colors';
import BranchCard from '../ui/branch_card';
import Footer from '../../../components/Footer/footer';
import AddBranchContent from '../feature/add_branch_content';

const BranchesPage = () => {
  const [viewMode, setViewMode] = useState('table');
  const [selected, setSelected] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const branchData = [
    { image: branchImage, title: 'First Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
    { image: branchImage, title: 'HP Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Inactive' },
    { image: branchImage, title: 'Second Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
    { image: branchImage, title: 'First Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
    { image: branchImage, title: 'HP Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Inactive' },
    { image: branchImage, title: 'Third Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Inactive' },
    { image: branchImage, title: 'Apple Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
    { image: branchImage, title: 'First Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
    { image: branchImage, title: 'HP Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Inactive' },
    { image: branchImage, title: 'First Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
  ];

  const handleSelect = (selectedItems) => {
    setSelected(selectedItems);
  };

  const handleAddBranch = () => {
    setDrawerOpen(true);
  };

  return (
    <DashboardLayout>
      <Box sx={{ px: 5, py: 3, border: `1px solid ${colors.secondary.main}`, backgroundColor: colors.background.paper }}>
        <HeaderLayout
          viewMode={viewMode}
          setViewMode={setViewMode}
          selectedCount={selected.length}
          handleAddBranch={handleAddBranch}
        />

        {viewMode === 'table' ? (
          <MainInformationTable
            selected={selected}
            onSelect={handleSelect}
          />
        ) : (
          <Grid container spacing={3}>
            {branchData.map((branch, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
                <BranchCard
                  image={branch.image}
                  title={branch.title}
                  subTitle={branch.subtitle}
                  status={branch.state}
                />
              </Grid>
            ))}
          </Grid>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '35%', 
              justifyContent:'center',
              
            },
          }}
        >
          <AddBranchContent
            setDrawerOpen={setDrawerOpen}
          />
        </Drawer>

        <Footer />
      </Box>
    </DashboardLayout>
  );
};

export default BranchesPage;
