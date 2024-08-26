import { Box, Pagination, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../assets/theme/colors'
import { fonts } from '../../assets/theme/fonts'
import { borders } from '../../assets/theme/borders'
import NormalDropDownField from '../DropDown/normal_drop_down'

const Footer = () => {
  return (
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
        <NormalDropDownField
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
  )
}

export default Footer
