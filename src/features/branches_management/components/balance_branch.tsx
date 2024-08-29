import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import MDDateField from '../../../components/TextField/date_field';
import NormalDropDownField from '../../../components/DropDown/normal_drop_down';
import exportIcon from '../../../assets/icons/export.svg';
import PrimaryButton from '../../../components/Buttons/primary_button';
import { colors } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/theme/fonts';
import { borders } from '../../../assets/theme/borders';
import MainInformationTable from './balance_table';

const BalanceBranch = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [exportFormat, setExportFormat] = useState<string>('');

    const handleStartDateChange = (date: Date | null) => setStartDate(date ? date.toISOString().split('T')[0] : '');
    const handleEndDateChange = (date: Date | null) => setEndDate(date ? date.toISOString().split('T')[0] : '');
    const handleExportFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => setExportFormat(event.target.value);

    return (
        <>
            <Box sx={{
                p: 4,
                display: { xs: 'block', md: 'block', xl: 'flex' },
                alignItems: 'center',
                gap: 2,
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2,
                }}>
                    <MDDateField
                        isHaveBorder={true}
                        value={startDate}
                        onChange={handleStartDateChange}
                        placeholder="Start Date"
                        width={{ xs: '100%', md: '48%', xl: '35%' }}
                    />

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: `1px solid ${colors.secondary?.default}`,
                        borderRadius: '4px',
                    }}>
                        <MDDateField
                            isFulWidth={true}
                            isHaveBorder={false}
                            onChange={handleStartDateChange}
                            value={startDate}
                            placeholder="From"

                        />

                        <Typography sx={{ typography: fonts.subtitle2 }}>-</Typography>

                        <MDDateField
                            isFulWidth={true}
                            isHaveBorder={false}
                            value={endDate}
                            onChange={handleEndDateChange}
                            placeholder="To"
                        />
                    </Box>
                </Box>

                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: { xs: 'block', md: 'flex' },
                    gap: 2,
                }}>
                    <NormalDropDownField
                        width={{
                            xs: '100%',
                            md: '70%',
                            xl: '50%',
                        }}
                        icon={<img src={exportIcon} alt="Export Icon" style={{ width: '24px', height: '24px' }} />}
                        isFullWidth={true}
                        value={exportFormat}
                        onChange={handleExportFormatChange}
                        hintText={'Export as'}
                        labelColor={colors.text?.primary}
                        options={[
                            { value: 'PDF', label: 'PDF' },
                            { value: 'Excel', label: 'Excel' },
                        ]}
                        backgroundColor={colors.background?.paper}
                    />

                    <PrimaryButton
                        title={'Apply Filter'}
                        fontType={'subtitle1'}
                        height={'45px'}
                        borderRadius={borders.borderRadius.xs}
                        backgroundColor={colors.primary?.main}
                        hoverColor={colors.primary?.state}
                        colorTitle={colors.background?.paper}
                        isTitleAndIcon={false}
                        isIcon={false}
                    />
                </Box>
            </Box>

            <Typography sx={{ textAlign: 'center', typography: fonts.h4 }}>
                Branches Transactions Report
            </Typography>
            <Typography sx={{ p: '10px 0px 0 0', textAlign: 'center', typography: fonts.subtitle1 }}>
                From 01 Nov 2023 To 30 Nov 2023
            </Typography>

            <Box sx={{ py: 2 }}>
                <MainInformationTable />
            </Box>
        </>
    );
};

export default BalanceBranch;
