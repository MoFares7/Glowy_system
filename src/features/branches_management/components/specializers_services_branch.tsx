import { Box, Grid } from '@mui/material';
import React from 'react';
import ExpandedBox from '../ui/expanded_box';
import { colors } from '../../../assets/theme/colors';
import BranchCard from '../ui/branch_card';
import branchImage from '../../../assets/images/download.jpg';
import useExpand from '../hook/use_expanded_box';

const SpecializersServicesBranch = () => {
    // Main sections expansion
    const { isExpanded: isAvailableSpecializersExpanded, toggleExpand: toggleAvailableSpecializers } = useExpand();
    const { isExpanded: isAvailableServicesExpanded, toggleExpand: toggleAvailableServices } = useExpand();

    // Sub-sections for Available Specializers
    const { isExpanded: isNailsSpecializersExpanded, toggleExpand: toggleNailsSpecializers } = useExpand();
    const { isExpanded: isMakeUpSpecializersExpanded, toggleExpand: toggleMakeUpSpecializers } = useExpand();

    // Sub-sections for Available Services
    const { isExpanded: isNailsServicesExpanded, toggleExpand: toggleNailsServices } = useExpand();
    const { isExpanded: isMakeUpServicesExpanded, toggleExpand: toggleMakeUpServices } = useExpand();

    const branchData = [
        { image: branchImage, title: 'First Branch', subtitle: 'A Dental Clinic Is A Place..', state: 'Active' },
        { image: branchImage, title: 'HP Branch', subtitle: 'A Dental Clinic Is A Place..', state: 'Inactive' },
        { image: branchImage, title: 'Second Branch', subtitle: 'A Dental Clinic Is A Place..', state: 'Active' },
        { image: branchImage, title: 'Second Branch', subtitle: 'A Dental Clinic Is A Place..', state: 'Active' },
        { image: branchImage, title: 'Second Branch', subtitle: 'A Dental Clinic Is A Place..', state: 'Active' },
        { image: branchImage, title: 'Second Branch', subtitle: 'A Dental Clinic Is A Place..', state: 'Active' },
        { image: branchImage, title: 'Third Branch', subtitle: 'A Dental Clinic Is A Place..', state: 'Inactive' },
    ];

    return (
        <Box sx={{ p: 4 }}>
            {/* Available Specializers Section */}
            <ExpandedBox
                isPrimary={true}
                title={"Available Specializers"}
                subTitle={`${branchData.length} Specializers`}
                colorTitle={colors.text?.primary}
                initialBackgroundColor={colors.info?.light}
                expandedBackgroundColor={colors.background?.paper}
                borderColor={colors.info?.light}
                onClick={toggleAvailableSpecializers}
                isExpanded={isAvailableSpecializersExpanded}
            />
            {isAvailableSpecializersExpanded && (
                <Box sx={{
                    maxHeight: '500px',
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
                }}>
                    {/* Nails Section within Specializers */}
                    <Box sx={{ py: 2 }} />
                    <ExpandedBox
                        title={"Nails section"}
                        subTitle={`${branchData.length} Specializers`}
                        colorTitle={colors.text?.primary}
                        initialBackgroundColor={colors.info?.light}
                        expandedBackgroundColor={colors.background?.paper}
                        borderColor={colors.info?.light}
                        onClick={toggleNailsSpecializers}
                        isExpanded={isNailsSpecializersExpanded}
                    />
                    {isNailsSpecializersExpanded && (
                        <Grid container spacing={2} sx={{ pt: 4 }}>
                            {branchData.map((branch, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
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

                    {/* Make Up Section within Specializers */}
                    <Box sx={{ py: 2 }} />
                    <ExpandedBox
                        title={"Make Up section"}
                        subTitle={`${branchData.length} Specializers`}
                        colorTitle={colors.text?.primary}
                        initialBackgroundColor={colors.info?.light}
                        expandedBackgroundColor={colors.background?.paper}
                        borderColor={colors.info?.light}
                        onClick={toggleMakeUpSpecializers}
                        isExpanded={isMakeUpSpecializersExpanded}
                    />
                    {isMakeUpSpecializersExpanded && (
                        <Grid container spacing={2} sx={{ pt: 4 }}>
                            {branchData.map((branch, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
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
            )}

            {/* Available Services Section */}
            <Box sx={{ py: 2 }} />
            <ExpandedBox
                isPrimary={true}
                title={"Available Services"}
                subTitle={`${branchData.length} Specializers`}
                colorTitle={colors.text?.primary}
                initialBackgroundColor={colors.info?.light}
                expandedBackgroundColor={colors.background?.paper}
                borderColor={colors.info?.light}
                onClick={toggleAvailableServices}
                isExpanded={isAvailableServicesExpanded}
            />
            {isAvailableServicesExpanded && (
                <Box sx={{
                    maxHeight: '400px',
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
                }}>
                    {/* Nails Section within Services */}
                    <Box sx={{ py: 2 }} />
                    <ExpandedBox
                        title={"Nails section"}
                        subTitle={`${branchData.length} Specializers`}
                        colorTitle={colors.text?.primary}
                        initialBackgroundColor={colors.info?.light}
                        expandedBackgroundColor={colors.background?.paper}
                        borderColor={colors.info?.light}
                        onClick={toggleNailsServices}
                        isExpanded={isNailsServicesExpanded}
                    />
                    {isNailsServicesExpanded && (
                        <Grid container spacing={2} sx={{ pt: 4 }}>
                            {branchData.map((branch, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
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

                    {/* Make Up Section within Services */}
                    <Box sx={{ py: 2 }} />
                    <ExpandedBox
                        title={"Make Up section"}
                        subTitle={`${branchData.length} Specializers`}
                        colorTitle={colors.text?.primary}
                        initialBackgroundColor={colors.info?.light}
                        expandedBackgroundColor={colors.background?.paper}
                        borderColor={colors.info?.light}
                        onClick={toggleMakeUpServices}
                        isExpanded={isMakeUpServicesExpanded}
                    />
                    {isMakeUpServicesExpanded && (
                        <Grid container spacing={2} sx={{ pt: 4 }}>
                            {branchData.map((branch, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
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
            )}
        </Box>
    );
};

export default SpecializersServicesBranch;
