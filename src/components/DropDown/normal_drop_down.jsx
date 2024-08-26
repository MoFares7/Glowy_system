import React from 'react';
import { TextField, MenuItem, Typography } from '@mui/material';
import { colors } from '../../assets/theme/colors';
import { borders } from '../../assets/theme/borders';

const NormalDropDownField = ({
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
    backgroundColor
}) => {
    return (
        <TextField
            margin="normal"
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
                borderRadius: 'none',
                margin: margin,
                height: height || '45px',
                backgroundColor: backgroundColor || colors.primary.main,
                fontSize: '0.875rem',
                width: isFulWidth ? '100%' : width,
                color: colors.text.primary,
                '& .MuiOutlinedInput-root': {
                    height: '100%',
                    borderRadius: 'none',
                    '& .MuiSelect-select': {
                        fontSize: '0.875rem',
                    },
                },
            }}
            inputProps={{
                style: {
                    borderRadius: borders.borderRadius.xs,
                    fontSize: '0.875rem',
                },
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