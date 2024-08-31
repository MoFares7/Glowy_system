import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchField from '../../../../features/branches_management/ui/search_field';
import { colors } from '../../../../assets/theme/colors';
import { borders } from '../../../../assets/theme/borders';
import PrimaryButton from '../../Buttons/primary_button';
import layoutFormIcon from '../../../../assets/icons/layout.svg';
import layoutGridIcon from '../../../../assets/icons/grid.svg';
import plusIcon from '../../../../assets/icons/plus.svg';
import moreOptionIcon from '../../../../assets/icons/moreOption.svg';
import xIcon from '../../../../assets/icons/x.svg';
import { fonts } from '../../../../assets/theme/fonts';

interface HeaderLayoutProps {
    viewMode: 'table' | 'grid';
    setViewMode: (viewMode: 'table' | 'grid') => void;
    selectedCount: number;
    handleAddBranch: () => void;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ viewMode, setViewMode, selectedCount, handleAddBranch }) => {
    return (
        <Box sx={{
            pb: 3,
            display: {
                xs: 'block',
                md: 'block',
                xl: 'flex'
            },
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <SearchField />
            <Box sx={{
                display: {
                    xs: 'block',
                    md: 'block',
                    xl: 'flex'
                },
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Box sx={{ display: 'flex', gap: 2, }}>
                    {selectedCount !== 0 ? (
                        <>
                            <Typography sx={{ typography: fonts.subtitle1 }}>
                                {selectedCount} Branch(S) Selected
                            </Typography>

                            <PrimaryButton
                                isDark={false}
                                isIcon={true}
                                icon={moreOptionIcon}
                                borderColor={colors.secondary?.main}
                                borderRadius={borders.borderRadius.sm}
                            />

                            <PrimaryButton
                                isDark={false}
                                isIcon={true}
                                icon={xIcon}
                                borderColor={colors.secondary?.main}
                                borderRadius={borders.borderRadius.sm}
                            />
                        </>
                    ) : (
                        <>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                border: `1px solid ${colors.secondary?.main}`,
                                borderRadius: borders.borderRadius.sm,
                            }}>
                                <PrimaryButton
                                    isDark={false}
                                    isIcon={true}
                                    icon={layoutFormIcon}
                                    backgroundColor={viewMode === 'table' ? colors.secondary?.light : colors.background?.paper}
                                    onClick={() => setViewMode('table')}
                                    hoverColor={colors.secondary?.main}
                                />
                                <PrimaryButton
                                    isDark={false}
                                    isIcon={true}
                                    icon={layoutGridIcon}
                                    backgroundColor={viewMode === 'grid' ? colors.secondary?.light : colors.background?.paper}
                                    onClick={() => setViewMode('grid')}
                                    hoverColor={colors.secondary?.main}
                                />
                            </Box>
                            <PrimaryButton
                                title={'Add'}
                                fontType='subtitle1'
                                fontSize={17.5}
                                hoverColor={colors.primary?.state}
                                colorTitle={colors.background?.paper}
                                icon={plusIcon}
                                backgroundColor={colors.primary?.main}
                                isIcon={false}
                                borderRadius={borders.borderRadius.sm}
                                onClick={handleAddBranch}
                                isTitleAndIcon={true}
                            />
                            <PrimaryButton
                                isDark={false}
                                isIcon={true}
                                icon={moreOptionIcon}
                                borderColor={colors.secondary?.main}
                                borderRadius={borders.borderRadius.sm}
                            />
                        </>
                    )}
                </Box>
            </Box>
        </Box >
    );
};

export default HeaderLayout;
