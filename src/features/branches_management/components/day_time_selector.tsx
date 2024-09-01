import React, { useState } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { colors } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/theme/fonts';
import { borders } from '../../../assets/theme/borders';
import MDTextField from '../../../shared/components/TextField/text_field';

interface WeeklyTimeSelectorProps {
    onChange: (hours: any[]) => void;
}

const WeeklyTimeSelector: React.FC<WeeklyTimeSelectorProps> = ({ onChange }) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [selectedDays, setSelectedDays] = useState<Record<string, { isOpen: boolean, from: string, to: string }>>(() => {
        return days.reduce((acc, day) => {
            acc[day] = { isOpen: false, from: '09:00', to: '21:00' };
            return acc;
        }, {} as Record<string, { isOpen: boolean, from: string, to: string }>);
    });

    const handleToggleDay = (day: string, isOpen: boolean, from?: string, to?: string) => {
        setSelectedDays((prev) => {
            const updatedDays = {
                ...prev,
                [day]: { isOpen, from: from ?? prev[day].from, to: to ?? prev[day].to },
            };

            const availableHours = Object.keys(updatedDays)
                .filter((d) => updatedDays[d].isOpen)
                .map((d) => ({
                    day: d.toUpperCase(),
                    from: updatedDays[d].from,
                    to: updatedDays[d].to,
                    partitionRatio: 1,
                    unit: 'HOUR',
                    isLimittedAppointment: false,
                    maxApointmentPerRatio: 20,
                }));

            onChange(availableHours);
            return updatedDays;
        });
    };

    return (
        <Box sx={{ p: 2, border: `1px solid ${colors.secondary?.light}`, borderRadius: borders.borderRadius.xs }}>
            {days.map((day) => (
                <DayTimeSelector
                    key={day}
                    day={day}
                    isOpen={selectedDays[day].isOpen}
                    from={selectedDays[day].from}
                    to={selectedDays[day].to}
                    onToggle={handleToggleDay}
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
