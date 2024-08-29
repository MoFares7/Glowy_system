// MainInformationTable.tsx
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { TableSortLabel, Box, IconButton } from '@mui/material';
import { colors } from '../../assets/theme/colors';
import { borders } from '../../assets/theme/borders';
import person from '../../assets/images/image.png';
import moreActionIcon from '../../assets/icons/moreOption.svg';
import sortIcon from '../../assets/icons/sort.svg';
import { useTableLogic } from '../../hook/use_table';

interface Row {
    image: string;
    branchName: string;
    address: string;
    description: string;
    status: string;
    createdAt: string;
    createdBy: string;
    action: string;
}

interface MainInformationTableProps {
    selected: string[];
    onSelect: (selected: string[]) => void;
}

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
    cursor: 'pointer',
}));

const rows: Row[] = [
    { image: person, branchName: 'Frozen yoghurt', address: 'Address 1', description: 'Delicious', status: 'Active', createdAt: '2024-08-22', createdBy: 'Admin', action: 'Edit' },
    { image: person, branchName: 'Ice cream sandwich', address: 'Address 2', description: 'Tasty', status: 'Inactive', createdAt: '2024-08-21', createdBy: 'User', action: 'Edit' },
    { image: person, branchName: 'Eclair1', address: 'Address 3', description: 'Sweet', status: 'Active', createdAt: '2024-08-21', createdBy: 'Admin', action: 'Edit' },
    { image: person, branchName: 'Cupcake', address: 'Address 4', description: 'Yummy', status: 'Inactive', createdAt: '2024-08-21', createdBy: 'User', action: 'Edit' },
    { image: person, branchName: 'Eclair2', address: 'Address 12', description: 'Yummy', status: 'Active', createdAt: '2024-08-21', createdBy: 'Admin', action: 'Edit' },
    { image: person, branchName: 'Frozen', address: 'Address 2', description: 'Yummy', status: 'Inactive', createdAt: '2024-08-21', createdBy: 'User', action: 'Edit' },
    { image: person, branchName: 'Eclair3', address: 'Address 323', description: 'Yummy', status: 'Active', createdAt: '2024-08-21', createdBy: 'Admin', action: 'Edit' },
];

export default function MainInformationTable({ selected, onSelect }: MainInformationTableProps) {
    const {
        order,
        orderBy,
        handleSelectAllClick,
        handleRowClick,
        handleCheckboxClick,
        handleRequestSort,
        isSelected,
        sortedRows,
    } = useTableLogic(rows, selected, onSelect);

    return (
        <TableContainer>
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
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'branchName'}
                                direction={orderBy === 'branchName' ? order : 'asc'}
                                onClick={() => handleRequestSort('branchName')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                BRANCH NAME
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'address'}
                                direction={orderBy === 'address' ? order : 'asc'}
                                onClick={() => handleRequestSort('address')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                ADDRESS
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'description'}
                                direction={orderBy === 'description' ? order : 'asc'}
                                onClick={() => handleRequestSort('description')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                DESCRIPTION
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'status'}
                                direction={orderBy === 'status' ? order : 'asc'}
                                onClick={() => handleRequestSort('status')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                STATUS
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'createdAt'}
                                direction={orderBy === 'createdAt' ? order : 'asc'}
                                onClick={() => handleRequestSort('createdAt')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                CREATED AT
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'createdBy'}
                                direction={orderBy === 'createdBy' ? order : 'asc'}
                                onClick={() => handleRequestSort('createdBy')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                CREATED BY
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">ACTION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedRows.map((row) => (
                        <StyledTableRow
                            key={row.branchName}
                            onClick={() => handleRowClick(row.branchName)}
                        >
                            <StyledTableCell padding="checkbox" align="center">
                                <Checkbox
                                    checked={isSelected(row.branchName)}
                                    onClick={(event) => handleCheckboxClick(event, row.branchName)}
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
                                    backgroundColor: row.status === 'Active' ? colors.success?.state : colors.error?.state,
                                }}>
                                    {row.status}
                                </Box>
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
                            <StyledTableCell align="center">{row.createdBy}</StyledTableCell>
                            <StyledTableCell align="center">
                                <IconButton aria-label="more options">
                                    <img src={moreActionIcon} alt="More options" />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
