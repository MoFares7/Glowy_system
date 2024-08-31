import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { colors } from '../../../assets/theme/colors';

interface MDDateFieldProps {
  isFulWidth?: boolean;
  value?: string;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  isHaveBorder?: boolean;
  width?: string | { xs?: string; md?: string; xl?: string };
}

const MDDateField: React.FC<MDDateFieldProps> = ({
  isFulWidth,
  value,
  onChange,
  placeholder,
  isHaveBorder = true,
  width,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

  const formatDate = (date: Date | null) => {
    if (!date || isNaN(date.getTime())) return '';
    return date.toISOString().split('T')[0];
  };

  const responsiveWidth = (typeof width === 'object') ? width : { xs: width, md: width, xl: width };

  return (
    <TextField
      required
      fullWidth={isFulWidth}
      value={formatDate(selectedDate)}
      onChange={(e) => {
        const newDate = new Date(e.target.value);
        if (!isNaN(newDate.getTime())) {
          setSelectedDate(newDate);
          if (onChange) onChange(newDate);
        }
      }}
      type="date"
      placeholder={placeholder}
      sx={{
        height: '50px',
        backgroundColor: colors.background?.paper,
        fontSize: '0.875rem',
        width: isFulWidth ? '100%' : responsiveWidth,
        color: 'red',
        cursor: 'pointer',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: isHaveBorder ? colors.secondary?.light : 'transparent',
          },
          '&:hover fieldset': {
            borderColor: isHaveBorder ? colors.secondary?.light : 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: isHaveBorder ? colors.primary?.main : 'transparent',
          },
        },
        '& .MuiInputLabel-outlined': {
          transform: 'translate(14px, 12px) scale(1)',
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
          transform: 'translate(14px, -6px) scale(0.75)',
        },
        '& .MuiOutlinedInput-input': {
          padding: '15px 14px',
        },
      }}
      InputProps={{
        style: {
          borderRadius: '0.2rem',
          fontSize: '1rem',
        },
        startAdornment: (
          <InputAdornment position="start">

          </InputAdornment>
        ),
      }}
    />
  );
};

export default MDDateField;
