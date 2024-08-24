import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { colors } from '../../config/theme/colors';
import person from '../../assets/images/image.png';
import { Box, IconButton } from '@mui/material';
import { borders } from '../../assets/theme/borders';
import moreActionIcon from '../../assets/icons/moreOption.svg';

// Styled TableCell for header and body
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F1F1F1',
        color: colors.text?.primary,
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: theme.typography.subtitle1.fontWeight,
        lineHeight: theme.typography.subtitle1.lineHeight,
        padding: '8px 16px',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: theme.typography.subtitle1.fontSize,
        padding: '8px 16px',
        borderBottom: `1px solid ${colors.secondary?.default}`,
    },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// Function to create data rows
function createData(
    image: string,
    branchName: string,
    address: string,
    description: string,
    status: string,
    createdAt: string,
    createdBy: string,
    action: string
) {
    return { image, branchName, address, description, status, createdAt, createdBy, action };
}

// Sample data rows
const rows = [
    createData(person, 'Frozen yoghurt', 'Address 1', 'Delicious', 'Active', '2024-08-22', 'Admin', 'Edit'),
    createData(person, 'Ice cream sandwich', 'Address 2', 'Tasty', 'Inactive', '2024-08-21', 'User', 'Edit'),
    createData(person, 'Eclair1', 'Address 3', 'Sweet', 'Active', 'Active', '2024-08-21', 'Edit'),
    createData(person, 'Cupcake', 'Address 4', 'Yummy', 'Inactive', 'Active', '2024-08-21', 'Edit'),
    createData(person, 'Eclair2', 'Address 12', 'Yummy', 'Active', 'Active', '2024-08-21', 'Edit'),
    createData(person, 'Frozen', 'Address 2', 'Yummy', 'Inactive', 'Active', '2024-08-21', 'Edit'),
    createData(person, 'Eclair3', 'Address 323', 'Yummy', 'Active', 'Active', '2024-08-21', 'Edit'),
];

export default function MainInformationTable() {
    const [selected, setSelected] = useState<string[]>([]);

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelected(rows.map(row => row.branchName));
            return;
        }
        setSelected([]);
    };

    const handleClick = (branchName: string) => {
        const selectedIndex = selected.indexOf(branchName);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, branchName);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (branchName: string) => selected.indexOf(branchName) !== -1;

    return (
        <TableContainer >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">
                            <Checkbox
                                onChange={handleSelectAllClick}
                                checked={rows.length > 0 && selected.length === rows.length}
                                indeterminate={selected.length > 0 && selected.length < rows.length}
                            />
                        </StyledTableCell>
                        <StyledTableCell>IMAGE</StyledTableCell>
                        <StyledTableCell align="center">BRANCH NAME</StyledTableCell>
                        <StyledTableCell align="center">ADDRESS</StyledTableCell>
                        <StyledTableCell align="center">DESCRIPTION</StyledTableCell>
                        <StyledTableCell align="center">STATUS</StyledTableCell>
                        <StyledTableCell align="center">CREATED AT</StyledTableCell>
                        <StyledTableCell align="center">CREATED BY</StyledTableCell>
                        <StyledTableCell align="center">ACTION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.branchName}>
                            <StyledTableCell padding="checkbox" align="center">
                                <Checkbox
                                    checked={isSelected(row.branchName)}
                                    onChange={() => handleClick(row.branchName)}
                                    inputProps={{ 'aria-labelledby': row.branchName }}
                                    sx={{
                                        color: colors.secondary?.light,
                                        '&.Mui-checked': {
                                            color: colors.text?.primary,
                                        },
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 24,
                                            borderColor: colors.secondary?.light,
                                        },
                                    }}
                                />

                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                <img
                                    src={row.image}
                                    alt={row.branchName}
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                />
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.branchName}</StyledTableCell>
                            <StyledTableCell align="center">{row.address}</StyledTableCell>
                            <StyledTableCell align="center">{row.description}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Box sx={{
                                    py: 0.5,
                                    borderRadius: borders.borderRadius.lg,
                                    color: row.status === 'Active' ? colors.success?.main : colors.error?.main,
                                    backgroundColor: row.status === 'Active' ? colors.success?.state : colors.error?.state
                                }}>
                                    {row.status}
                                </Box>

                            </StyledTableCell>
                            <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
                            <StyledTableCell align="center">{row.createdBy}</StyledTableCell>
                            <StyledTableCell align="center">
                                <IconButton>
                                    <img src={moreActionIcon} />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
