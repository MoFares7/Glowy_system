import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export function useTableLogic(rows: Row[], selected: string[], onSelect: (selected: string[]) => void) {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<keyof Row>('branchName');
    const navigate = useNavigate();

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((row) => row.branchName);
            onSelect(newSelecteds);
        } else {
            onSelect([]);
        }
    };

    const handleRowClick = (branchName: string) => {
        navigate(`/details`);
    };

    const handleCheckboxClick = (event: React.MouseEvent, branchName: string) => {
        event.stopPropagation();
        const selectedIndex = selected.indexOf(branchName);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = [...selected, branchName];
        } else if (selectedIndex === 0) {
            newSelected = selected.slice(1);
        } else if (selectedIndex === selected.length - 1) {
            newSelected = selected.slice(0, -1);
        } else if (selectedIndex > 0) {
            newSelected = [
                ...selected.slice(0, selectedIndex),
                ...selected.slice(selectedIndex + 1),
            ];
        }

        onSelect(newSelected);
    };

    const handleRequestSort = (property: keyof Row) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const isSelected = (branchName: string) => selected.indexOf(branchName) !== -1;

    const sortedRows = [...rows].sort((a, b) => {
        if (orderBy) {
            const aValue = a[orderBy];
            const bValue = b[orderBy];
            if (aValue < bValue) return order === 'asc' ? -1 : 1;
            if (aValue > bValue) return order === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return {
        order,
        orderBy,
        handleSelectAllClick,
        handleRowClick,
        handleCheckboxClick,
        handleRequestSort,
        isSelected,
        sortedRows,
    };
}
