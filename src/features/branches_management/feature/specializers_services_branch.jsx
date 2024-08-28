import { Box, Grid } from '@mui/material';
import React from 'react';
import ExpandedBox from '../ui/expanded_box';
import { colors } from '../../../assets/theme/colors';
import BranchCard from '../ui/branch_card';
import branchImage from '../../../assets/images/download.jpg';
import useExpand from '../hook/use_expanded_box';

const SpecializersServicesBranch = () => {
    const { isExpanded: isSpecializersExpanded, toggleExpand: toggleSpecializers } = useExpand();
    const { isExpanded: isMakeUpExpanded, toggleExpand: toggleMakeUp } = useExpand();
    const { isExpanded: isServicesExpanded, toggleExpand: toggleServices } = useExpand();

    const branchData = [
        { image: branchImage, title: 'First Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
        { image: branchImage, title: 'HP Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Inactive' },
        { image: branchImage, title: 'Second Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
        { image: branchImage, title: 'First Branch', subtitle: 'A Dental Clinic Is A Plac..', state: 'Active' },
    ];

    return (
        <Box sx={{ p: 4 }}>
            {/* Available Specializers Section */}
            <ExpandedBox
                title={"Available Specializers"}
                subTitle={"7 Specializers "}
                colorTitle={colors.text.primary}
                initialBackgroundColor={colors.info.light}
                expandedBackgroundColor={colors.background.paper}
                borderColor={colors.info.light}
                onClick={toggleSpecializers}
                isExpanded={isSpecializersExpanded}
            />
            {isSpecializersExpanded && (
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

            {/* Make Up Section */}
            <Box sx={{ py: 2 }} />
            <ExpandedBox
                title={"Make up section"}
                subTitle={"5 Specializers "}
                colorTitle={colors.text.primary}
                initialBackgroundColor={colors.info.light}
                expandedBackgroundColor={colors.background.paper}
                borderColor={colors.info.light}
                onClick={toggleMakeUp}
                isExpanded={isMakeUpExpanded}
            />
            {isMakeUpExpanded && (
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

            {/* Available Services Section */}
            <Box sx={{ py: 2 }} />
            <ExpandedBox
                title={"Available Services"}
                subTitle={"5 Specializers "}
                colorTitle={colors.text.primary}
                initialBackgroundColor={colors.info.light}
                expandedBackgroundColor={colors.background.paper}
                borderColor={colors.info.light}
                onClick={toggleServices}
                isExpanded={isServicesExpanded}
            />
            {isServicesExpanded && (
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
    );
};

export default SpecializersServicesBranch;
