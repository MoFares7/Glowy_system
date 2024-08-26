import React from 'react';
import { TextField, MenuItem, Box, Chip, Checkbox, Typography } from '@mui/material';
import { colors } from '../../assets/theme/colors';
import { borders } from '../../assets/theme/borders';
import { fonts } from '../../assets/theme/fonts';

const MultiOptionsDropDownField = ({
    height,
    margin,
    isFullWidth,
    value = [],
    onChange,
    hintText,
    autoComplete,
    type,
    error,
    options,
    isFulWidth,
    width,
    backgroundColor,
    label
}) => {

    const selectedValues = Array.isArray(value) ? value : [];

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const newValues = selectedValues.includes(selectedValue)
            ? selectedValues.filter(v => v !== selectedValue)
            : [...selectedValues, selectedValue];

        onChange(newValues);
    };

    return (
        <>
            <Typography typography={fonts.subtitle1} fontWeight={400} >
                {label}
            </Typography>

            <TextField
                margin="normal"
                required
                fullWidth={isFullWidth}
                value=""
                type={type}
                placeholder={hintText}
                autoComplete={autoComplete}
                onChange={handleSelectChange}
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
                    <MenuItem
                        key={option.value}
                        value={option.value}
                        sx={{ fontSize: '1rem' }}
                        onClick={() => handleSelectChange({ target: { value: option.value } })}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox
                                checked={selectedValues.includes(option.value)}
                                sx={{ p: 0, mr: 1 }}
                            />
                            {option.label}
                        </Box>
                    </MenuItem>
                ))}
            </TextField>

            <Box sx={{ display: 'flex', justifyContent: 'start', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {selectedValues.map((val) => (
                    <Chip
                        key={val}
                        label={options.find(option => option.value === val)?.label}
                        // onDelete={() => handleSelectChange({ target: { value: val } })}
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            typography: fonts.subtitle2,
                            backgroundColor: colors.text.primary,
                            color: colors.background.paper,
                        }}

                    />
                ))}
            </Box>
        </>
    );
};

export default MultiOptionsDropDownField;
