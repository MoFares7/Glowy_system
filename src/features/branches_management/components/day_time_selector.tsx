import React from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { colors } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/theme/fonts';
import { borders } from '../../../assets/theme/borders';
import MDTextField from '../../../components/TextField/text_field';
import useWeeklyTimeSelector from '../hook/use_day_time_selector';

// Main Component
const WeeklyTimeSelector: React.FC = () => {
    const {
        days,
        selectedDays,
        handleSelectAll,
        handleClearAll,
        handleToggleDay
    } = useWeeklyTimeSelector();

    return (
        <Box
            sx={{
                p: 2,
                border: `1px solid ${colors.secondary?.light}`,
                borderRadius: borders.borderRadius.xs,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                <Typography sx={{ typography: fonts.subtitle2, cursor: 'pointer' }} onClick={handleSelectAll}>
                    SELECT ALL
                </Typography>
                <Typography sx={{ typography: fonts.subtitle2, cursor: 'pointer' }} onClick={handleClearAll}>
                    CLEAR
                </Typography>
            </Box>

            {/* Days of the week */}
            {days.map((day) => (
                <DayTimeSelector
                    key={day}
                    day={day}
                    isOpen={selectedDays[day]}
                    onToggle={handleToggleDay}
                />
            ))}
        </Box>
    );
};

// Sub-Component
interface DayTimeSelectorProps {
    day: string;
    isOpen: boolean;
    onToggle: (day: string, isOpen: boolean) => void;
}

const DayTimeSelector: React.FC<DayTimeSelectorProps> = ({ day, isOpen, onToggle }) => {
    return (
        <Box sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Checkbox
                        checked={isOpen}
                        onChange={(e) => onToggle(day, e.target.checked)}
                        sx={{
                            color: colors.secondary?.light,
                            '&.Mui-checked': {
                                color: colors.text?.primary,
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: 28,
                                borderColor: colors.secondary?.light,
                            },
                        }}
                    />
                    <Typography sx={{ typography: fonts.subtitle1, fontWeight: 600 }}>{day}</Typography>
                    <Typography sx={{ typography: fonts.subtitle1, fontWeight: 200, opacity: 0.5 }}>
                        {isOpen ? 'OPEN' : 'CLOSE'}
                    </Typography>
                </Box>

                {isOpen && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <MDTextField type="time" defaultValue="09:00" />
                        <Typography sx={{ typography: fonts.subtitle1, fontWeight: 200, opacity: 0.5 }}>TO</Typography>
                        <MDTextField type="time" defaultValue="21:00" />
                    </Box>
                )}
            </Box>
        </Box>
    );
};


export default WeeklyTimeSelector;

export { DayTimeSelector };
