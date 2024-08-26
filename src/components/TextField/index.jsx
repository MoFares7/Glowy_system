import React from 'react';
import { TextField, Typography, InputAdornment } from '@mui/material';
import { colors } from '../../assets/theme/colors';
import { borders } from '../../assets/theme/borders';
import { fonts } from '../../assets/theme/fonts';

const MDTextField = ({
    height,
    isFulWidth,
    value,
    onChange,
    label,
    autoComplete,
    hintText,
    type,
    error,
    width,
    multiline,
    rows,
    defaultValue,
    icon,
    selectedOptions, // New prop to display selected options
    onClick // Click handler for dropdown
}) => {
    return (
        <>
            <Typography typography={fonts.subtitle1} fontWeight={400}>
                {label}
            </Typography>
            <TextField
                margin="normal"
                required
                placeholder={hintText}
                fullWidth={isFulWidth}
                value={value}
                type={type}
                defaultValue={defaultValue}
                autoComplete={autoComplete}
                onChange={onChange}
                autoFocus
                error={error}
                multiline={multiline}
                rows={rows}
                sx={{
                    height: height,
                    borderRadius: borders.borderRadius.xs,
                    margin: '1rem 0',
                    fontSize: '0.875rem',
                    width: isFulWidth ? '100%' : width,
                    color: error ? 'red' : 'inherit',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: borders.borderRadius.xs,
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: error ? 'red' : colors.secondary.light,
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: error ? 'red' : colors.secondary.default,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: error ? 'red' : colors.secondary.main,
                        },
                    },
                    '& .MuiInputLabel-outlined': {
                        transform: 'translate(14px, 12px) scale(1)',
                    },
                    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                        transform: 'translate(14px, -6px) scale(0.75)',
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: '12px 14px',
                    },
                }}
                InputProps={{
                    style: {
                        fontSize: '0.875rem',
                    },
                    endAdornment: icon ? (
                        <InputAdornment position="end">
                            {icon}
                        </InputAdornment>
                    ) : null,
                }}
                onClick={onClick}
            />
            {selectedOptions && (
                <Box sx={{ mt: 1 }}>
                    <Typography>{selectedOptions.join(', ')}</Typography>
                </Box>
            )}
        </>
    );
};

export default MDTextField;
