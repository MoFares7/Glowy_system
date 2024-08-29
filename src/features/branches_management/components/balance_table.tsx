import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { colors } from '../../../assets/theme/colors';
import sortIcon from '../../../assets/icons/sort.svg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: /,
        color: colors.text?.primary,
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: 300,
        lineHeight: theme.typography.subtitle1.lineHeight,
        padding: '22px 16px',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: theme.typography.subtitle1.fontSize,
        padding: '22px 16px',
        borderBottom: `1px solid ${colors.secondary?.default}`,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    cursor: 'pointer',
}));

interface RowData {
    branchName: string;
    date: string;
    time: string;
    transactionType: string;
    transaction: string;
    amount1: number;
    amount2: number;
    balance: number;
}

const createData = (
    branchName: string,
    date: string,
    time: string,
    transactionType: string,
    transaction: string,
    amount1: number,
    amount2: number,
    balance: number
): RowData => ({
    branchName,
    date,
    time,
    transactionType,
    transaction,
    amount1,
    amount2,
    balance,
});

const rows = [
    createData('Branch A', '2024-08-22', '10:00 AM', 'Deposit', 'Cash Deposit', 100, 0, 100),
    createData('Branch B', '2024-08-23', '11:30 AM', 'Withdrawal', 'ATM Withdrawal', 0, 50, 50),
    createData('Branch C', '2024-08-24', '01:00 PM', 'Transfer', 'Internal Transfer', 200, 100, 200),
];

const BalanceTable: React.FC = () => {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<string>('branchName');

    const handleRequestSort = (property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedRows = rows.sort((a, b) => {
        if (orderBy) {
            const aValue = a[orderBy as keyof RowData];
            const bValue = b[orderBy as keyof RowData];
            if (aValue < bValue) return order === 'asc' ? -1 : 1;
            if (aValue > bValue) return order === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
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
                                active={orderBy === 'date'}
                                direction={orderBy === 'date' ? order : 'asc'}
                                onClick={() => handleRequestSort('date')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                DATE
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'time'}
                                direction={orderBy === 'time' ? order : 'asc'}
                                onClick={() => handleRequestSort('time')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                TIME
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'transactionType'}
                                direction={orderBy === 'transactionType' ? order : 'asc'}
                                onClick={() => handleRequestSort('transactionType')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                TRANSACTION TYPE
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'transaction'}
                                direction={orderBy === 'transaction' ? order : 'asc'}
                                onClick={() => handleRequestSort('transaction')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                TRANSACTION
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'amount1'}
                                direction={orderBy === 'amount1' ? order : 'asc'}
                                onClick={() => handleRequestSort('amount1')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                AMOUNT RECEIVED
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'amount2'}
                                direction={orderBy === 'amount2' ? order : 'asc'}
                                onClick={() => handleRequestSort('amount2')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                AMOUNT DUE
                            </TableSortLabel>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <TableSortLabel
                                active={orderBy === 'balance'}
                                direction={orderBy === 'balance' ? order : 'asc'}
                                onClick={() => handleRequestSort('balance')}
                                IconComponent={() => <img src={sortIcon} alt="Sort" style={{ padding: '4px' }} />}
                            >
                                BALANCE
                            </TableSortLabel>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedRows.map((row) => (
                        <StyledTableRow key={row.branchName}>
                            <StyledTableCell align="center">{row.branchName}</StyledTableCell>
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
                            <StyledTableCell align="center">{row.time}</StyledTableCell>
                            <StyledTableCell align="center">{row.transactionType}</StyledTableCell>
                            <StyledTableCell align="center">{row.transaction}</StyledTableCell>
                            <StyledTableCell align="center">{row.amount1}</StyledTableCell>
                            <StyledTableCell align="center">{row.amount2}</StyledTableCell>
                            <StyledTableCell align="center">{row.balance}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BalanceTable;
