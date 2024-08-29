import React from 'react';
import { TextField, MenuItem, InputAdornment } from '@mui/material';
import { colors } from '../../assets/theme/colors';

interface NormalDropDownFieldProps {
  height?: string;
  margin?: string;
  isFullWidth?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  hintText?: string;
  autoComplete?: string;
  type?: string;
  error?: boolean;
  options?: { value: string; label: string }[];
  isFulWidth?: boolean;
  labelColor?: string;
  width?: string | { xs?: string; md?: string; xl?: string }; // Adjusted width type
  backgroundColor?: string;
  icon?: React.ReactNode;
}

const NormalDropDownField: React.FC<NormalDropDownFieldProps> = ({
  height,
  margin,
  isFullWidth,
  value,
  onChange,
  label,
  hintText,
  autoComplete,
  type,
  error,
  options,
  isFulWidth,
  labelColor,
  width,
  backgroundColor,
  icon
}) => {
  const responsiveWidth = (typeof width === 'object') ? width : { xs: width, md: width, xl: width };

  return (
    <TextField
      required
      fullWidth={isFullWidth}
      value={value}
      type={type}
      placeholder={hintText}
      autoComplete={autoComplete}
      onChange={onChange}
      autoFocus
      error={error}
      select={!!options}
      sx={{
        margin: margin,
        height: height || '45px',
        backgroundColor: backgroundColor || colors.background?.paper,
        fontSize: '0.875rem',
        width: isFulWidth ? '100%' : responsiveWidth,
        '& .MuiOutlinedInput-root': {
          height: '100%',
          borderColor: error ? colors.error.main : colors.secondary?.light,
          '& fieldset': {
            borderColor: error ? colors.error.main : colors.secondary?.light,
          },
          '&.Mui-focused fieldset': {
            borderColor: colors.primary?.main,
          },
          '& .MuiSelect-select': {
            fontSize: '0.875rem',
          },
        },
        '& .MuiFormLabel-root': {
          color: labelColor || colors.text?.primary,
        },
      }}
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {icon}
            </div>
          </InputAdornment>
        ) : undefined,
      }}
    >
      {options && options.map((option) => (
        <MenuItem key={option.value} value={option.value} sx={{ fontSize: '1rem' }}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default NormalDropDownField;
