import React, { useState } from 'react';
import DashboardLayout from '../components/LayoutContainer/LayoutDashboard';
import { Box, Grid, Pagination, Typography } from '@mui/material';
import { colors } from '../config/theme/colors';
import BranchCard from '../ui/branch_card';
import MainInformationTable from '../components/Table/main_table';
import branchImage from '../assets/images/logo.svg';
import HeaderLayout from '../components/LayoutContainer/HeaderLayout/header_layout';
import { borders } from '../assets/theme/borders';
import { fonts } from '../config/theme/fonts';
import DropDownField from '../components/DropDown';

const BranchesPage = () => {
  const [viewMode, setViewMode] = useState('table');
  const [selected, setSelected] = useState([]);

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

  // Function to handle selection
  const handleSelect = (selectedItems) => {
    setSelected(selectedItems);
  };

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
          selectedCount={selected.length}
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

        <Box sx={{
          display: {
            xs: 'block',
            md: 'flex',
            xl: 'flex'
          },
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: 3,
        }}>
          <Box sx={{ display: 'flex', width: '50%', justifyContent: 'start', alignItems: 'center', px: 3 }}>
            <DropDownField
              isFullWidth={true}
              margin={1}
              backgroundColor={colors.background.paper}
              width={{
                xs: "100%",
                md: "30%",
                xl: '10%',
              }}
              value={5}
              options={[
                { value: 5, label: '5' },
                { value: 10, label: '10' },
                { value: 15, label: '15' },
                { value: 20, label: '20' },
                { value: 25, label: '25' },
              ]}
            />
            <Typography typography={fonts.subtitle1} sx={{ color: colors.text.secondary }}>Results: 1-5 Of 352</Typography>
          </Box>
          <Box sx={{ width: '50%', display: 'flex', justifyContent: 'end' }}>
            <Pagination
              count={10}
              sx={{
                '& .MuiPaginationItem-root': {
                  typography: fonts.subtitle1,
                  '&:hover': {
                    backgroundColor: colors.secondary.default,
                  },
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  p: 2,
                  color: colors.background.paper,
                  backgroundColor: colors.primary.main, 
                  borderRadius: borders.borderRadius.xs,
                  '&:hover': {
                    backgroundColor: colors.primary.main, 
                  },
                },
              }}
            />
          </Box>
        </Box>

      </Box>
    </DashboardLayout >
  );
}

export default BranchesPage;
