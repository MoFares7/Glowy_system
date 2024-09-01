import React from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { colors } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/theme/fonts';
import { borders } from '../../../assets/theme/borders';
import MDTextField from '../../../shared/components/TextField/text_field';
import useWeeklyTimeSelector from '../hook/use_day_time_selector';

interface WeeklyTimeSelectorProps {
    onChange: (hours: any[]) => void;
}

const WeeklyTimeSelector: React.FC<WeeklyTimeSelectorProps> = ({ onChange }) => {
    const { days, selectedDays, handleSelectAll, handleClearAll, handleToggleDay } = useWeeklyTimeSelector();

    const handleDayToggle = (day: string, isOpen: boolean, from?: string, to?: string) => {
        handleToggleDay(day, isOpen);
        const availableHours = days
            .filter(d => selectedDays[d])
            .map(d => ({
                day: d.toUpperCase(),
                from: from ?? '09:00',
                to: to ?? '21:00',
                partitionRatio: 1,
                unit: 'HOUR',
                isLimittedAppointment: false,
                maxApointmentPerRatio: 20,
            }));

        onChange(availableHours);
    };

    const formatSelectedOptions = () => {
        return days
            .filter(d => selectedDays[d])
            .map(d => `${d}: 09:00 - 21:00`)
            .join(', ');
    };

    return (
        <Box sx={{ p: 2, border: `1px solid ${colors.secondary?.light}`, borderRadius: borders.borderRadius.xs }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1 }}>
                <Typography
                    sx={{ typography: fonts.subtitle2, cursor: 'pointer' }}
                    onClick={handleSelectAll}
                >
                    SELECT ALL
                </Typography>
                <Typography
                    sx={{ typography: fonts.subtitle2, opacity: '0.5', cursor: 'pointer' }}
                    onClick={handleClearAll}
                >
                    CLEAR
                </Typography>
            </Box>
            {days.map((day) => (
                <DayTimeSelector
                    key={day}
                    day={day}
                    isOpen={selectedDays[day]}
                    from={'09:00'}
                    to={'21:00'}
                    onToggle={handleDayToggle}
                />
            ))}
        </Box>
    );
};

interface DayTimeSelectorProps {
    day: string;
    isOpen: boolean;
    from: string;
    to: string;
    onToggle: (day: string, isOpen: boolean, from?: string, to?: string) => void;
}

const DayTimeSelector: React.FC<DayTimeSelectorProps> = ({ day, isOpen, from, to, onToggle }) => {
    return (
        <Box sx={{ py: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Checkbox
                        checked={isOpen}
                        onChange={(e) => onToggle(day, e.target.checked)}
                        sx={{
                            color: colors.secondary?.light,
                            '&.Mui-checked': { color: colors.text?.primary },
                            '& .MuiSvgIcon-root': { fontSize: 28, borderColor: colors.secondary?.light },
                        }}
                    />
                    <Typography sx={{ typography: fonts.subtitle1, fontWeight: 600 }}>{day}</Typography>
                </Box>

                {isOpen && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <MDTextField
                            type="time"
                            value={from}
                            onChange={(e) => onToggle(day, true, e.target.value, to)}
                        />
                        <Typography sx={{ typography: fonts.subtitle1, fontWeight: 200, opacity: 0.5 }}>TO</Typography>
                        <MDTextField
                            type="time"
                            value={to}
                            onChange={(e) => onToggle(day, true, from, e.target.value)}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default WeeklyTimeSelector;
