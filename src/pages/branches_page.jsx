import React, { useState } from 'react';
import DashboardLayout from '../components/LayoutContainer/LayoutDashboard';
import { Box, Grid } from '@mui/material';
import { colors } from '../config/theme/colors';

import BranchCard from '../ui/branch_card';
import MainInformationTable from '../components/Table/main_table';
import branchImage from '../assets/images/logo.svg';
import HeaderLayout from '../components/LayoutContainer/HeaderLayout/header_layout';

const BranchesPage = () => {
  const [viewMode, setViewMode] = useState('table');

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

  console.log(window.innerWidth)
  return (
    <DashboardLayout>
      <Box sx={{
        px: 5,
        py: 3,
        border: `1px solid ${colors.secondary.main}`,
        backgroundColor: colors.background.paper
      }}>

        <HeaderLayout
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {viewMode === 'table' ? (
          <MainInformationTable />
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
      </Box>
    </DashboardLayout>
  );
}

export default BranchesPage;
