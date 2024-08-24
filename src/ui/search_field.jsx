import React, { useState } from 'react';
import { TextField, Box, IconButton } from '@mui/material';
import { colors } from '../config/theme/colors';
import searchField from '../assets/images/search_field.svg';
import searchFieldSelected from '../assets/images/search_field_selected.svg';
import { SearchSharp } from '@mui/icons-material';

const SearchField = () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',

        }}>

            <Box sx={{
                display: 'flex',
                position: 'relative',
                mr: '-7px',
                height: 'auto',
            }}>
                <img
                    src={isSelected ? searchFieldSelected : searchField}
                    style={{ width: '100%', height: 'auto' }}
                />

                <TextField
                    variant="outlined"
                    placeholder="Search In Branches"
                    onFocus={() => setIsSelected(true)}
                    onBlur={() => setIsSelected(false)}
                    sx={{
                        position: 'absolute',
                        top: "4px",
                        left: 0,
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box',
                        color: colors.text.secondary,
                        borderRadius: '20px',
                        fontSize: '18px',
                        px: 2,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '20px 0 0 20px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            boxShadow: 'none',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiInputBase-input': {

                            textAlign: 'star',
                            padding: '10px 0',
                            fontSize: '18px',
                        },
                        '& .MuiInputLabel-root': {
                            fontSize: '18px',
                        },
                        '& .MuiInputLabel-shrink': {
                            fontSize: '18px',
                        },
                    }}
                />
            </Box>

            <IconButton
                sx={{
                    borderRadius: '50%',
                    padding: 2,
                    backgroundColor: colors.primary.main,
                    color: colors.background.paper,
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                }}
            >
                <SearchSharp />
            </IconButton>

        </Box>
    );
};

export default SearchField;
