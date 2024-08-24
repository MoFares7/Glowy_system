import { Box } from '@mui/material'
import React from 'react'
import SearchField from '../../../ui/search_field'
import { colors } from '../../../config/theme/colors'
import { borders } from '../../../assets/theme/borders'
import PrimaryButton from '../../Buttons/primary_button'
import layoutFormIcon from '../../../assets/icons/layout.svg';
import layoutGridIcon from '../../../assets/icons/grid.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import moreOptionIcon from '../../../assets/icons/moreOption.svg';

const HeaderLayout = ({ viewMode, setViewMode }) => {
    return (
        <Box sx={{ pb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <SearchField />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    border: `1px solid ${colors.secondary.main}`,
                    borderRadius: borders.borderRadius.sm,
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
                    hoverColor={colors.primary.state}
                    colorTitle={colors.background.paper}
                    icon={plusIcon}
                    isDark={true}
                    isIcon={false}
                    borderRadius={borders.borderRadius.sm}
                />
                <PrimaryButton
                    isDark={false}
                    isIcon={true}
                    icon={moreOptionIcon}
                    borderColor={colors.secondary.main}
                    borderRadius={borders.borderRadius.sm}
                />
            </Box>
        </Box>
    )
}

export default HeaderLayout
