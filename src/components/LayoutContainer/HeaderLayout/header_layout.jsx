import { Box, Typography } from '@mui/material';
import React from 'react';
import SearchField from '../../../features/branches_management/ui/search_field';
import { colors } from '../../../assets/theme/colors';
import { borders } from '../../../assets/theme/borders';
import PrimaryButton from '../../Buttons/primary_button';
import layoutFormIcon from '../../../assets/icons/layout.svg';
import layoutGridIcon from '../../../assets/icons/grid.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import moreOptionIcon from '../../../assets/icons/moreOption.svg';
import xIcon from '../../../assets/icons/x.svg';
import { fonts } from '../../../assets/theme/fonts';

const HeaderLayout = ({ viewMode, setViewMode, selectedCount, handleAddBranch }) => {
    return (
        <Box sx={{ pb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <SearchField />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
            }}>
                {selectedCount !== 0 ?

                    <>
                        <Typography typography={fonts.subtitle1}>
                            {selectedCount} Branch(S) Selected
                        </Typography>

                        <PrimaryButton
                            isDark={false}
                            isIcon={true}
                            icon={moreOptionIcon}
                            borderColor={colors.secondary.main}
                            borderRadius={borders.borderRadius.sm}
                        />

                        <PrimaryButton
                            isDark={false}
                            isIcon={true}
                            icon={xIcon}
                            borderColor={colors.secondary.main}
                            borderRadius={borders.borderRadius.sm}
                        />
                    </>
                    :
                    <>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            border: `1px solid ${colors.secondary.main}`,
                            borderRadius: borders.borderRadius.sm,
                            p: 0.05
                        }}>
                            <PrimaryButton
                                isDark={false}
                                isIcon={true}
                                icon={layoutFormIcon}
                                backgroundColor={viewMode === 'table' ? colors.secondary.light : colors.background.paper}
                                onClick={() => setViewMode('table')}
                                hoverColor={colors.secondary.main}
                            />
                            <PrimaryButton
                                isDark={false}
                                isIcon={true}
                                icon={layoutGridIcon}
                                backgroundColor={viewMode === 'grid' ? colors.secondary.light : colors.background.paper}
                                onClick={() => setViewMode('grid')}
                                hoverColor={colors.secondary.main}
                            />
                        </Box>
                        <PrimaryButton
                            title={'Add'}
                            fontType={fonts.subtitle1}
                            fontSize={17.5}
                            hoverColor={colors.primary.state}
                            colorTitle={colors.background.paper}
                            icon={plusIcon}
                            backgroundColor={colors.primary.main}
                            isIcon={false}
                            borderRadius={borders.borderRadius.sm}
                            onClick={handleAddBranch}
                            isTitleAndIcon={true}
                        />
                        <PrimaryButton
                            isDark={false}
                            isIcon={true}
                            icon={moreOptionIcon}
                            borderColor={colors.secondary.main}
                            borderRadius={borders.borderRadius.sm}
                        />
                    </>
                }
            </Box>
        </Box>
    );
}

export default HeaderLayout;
