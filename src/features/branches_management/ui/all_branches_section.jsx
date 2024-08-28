import React from 'react';
import { Avatar, Box, Checkbox, Divider, Typography } from '@mui/material';
import { fonts } from '../../../assets/theme/fonts';
import { colors } from '../../../assets/theme/colors';
import { borders } from '../../../assets/theme/borders';
import image from '../../../assets/images/download.jpg';
import PlusIcon from '../../../assets/icons/plus_black.svg';
import PrimaryButton from '../../../components/Buttons/primary_button';

const branches = [
    { id: 1, name: 'Mezzeh Branch', description: 'Mezzeh Mezzeh Branch', imageSrc: image, isSelect: true },
    { id: 2, name: 'Downtown Branch', description: 'Downtown Downtown Branch with a really long description that should be truncated.', imageSrc: image, isSelect: false },
    { id: 3, name: 'Uptown Branch', description: 'Uptown Uptown Branch', imageSrc: image, isSelect: false },
    { id: 4, name: 'Suburb Branch', description: 'Suburb Suburb Branch', imageSrc: image, isSelect: false },
];

const AllBranchesSection = () => {
    return (
        <Box
            sx={{
                width: '100%',
                borderLeft: `1px solid ${colors.secondary.main}`,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    height: '75px',
                    borderBottom: `1px solid ${colors.secondary.main}`,
                }}
            >
                <Typography sx={{ typography: fonts.h6 }}>All Branches</Typography>
                <PrimaryButton
                    isIcon={true}
                    isTitleAndIcon={false}
                    icon={PlusIcon}
                />
            </Box>

            {/* All Branches */}
            <Box sx={{ p: 1 }}>
                {branches.map((branch, index) => (
                    <React.Fragment key={branch.id}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                                p: 1,
                                borderRadius: borders.borderRadius.sm,
                                backgroundColor: branch.isSelect ? colors.primary.main : colors.background.paper,
                            }}
                        >
                            <Checkbox
                                checked={branch.isSelect}
                                sx={{
                                    borderColor: colors.secondary?.light,
                                    '&.Mui-checked': {
                                        color: colors.background.paper
                                    },
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                        borderColor: colors.secondary?.light,
                                    },
                                    m: 1,
                                }}
                            />
                            <Avatar
                                src={branch.imageSrc}
                                sx={{
                                    width: 40,
                                    height: 40,
                                    mx: 1,
                                }}
                            />
                            <Box sx={{ px: 1, minWidth: 0 }}> {/* Ensuring Box does not stretch beyond parent */}
                                <Typography
                                    sx={{
                                        typography: fonts.subtitle1,
                                        color: branch.isSelect ? colors.background.paper : colors.text.primary,
                                    }}
                                >
                                    {branch.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        typography: fonts.subtitle2,
                                        color: branch.isSelect ? colors.background.paper : colors.text.primary,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {branch.description}
                                </Typography>
                            </Box>
                        </Box>
                        <Divider sx={{
                            backgroundColor: colors.secondary.default,
                            height: '1px',
                            width: '100%',
                            my: 1
                        }} />
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
};

export default AllBranchesSection;
