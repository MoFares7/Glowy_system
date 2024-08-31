import { useState } from 'react';
import { useGetAllBranchesQuery } from '../apis/branch_api';

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

const useBranches = () => {
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [selected, setSelected] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { data, isError, isLoading } = useGetAllBranchesQuery({});

  const handleSelect = (selectedItems: string[]) => {
    setSelected(selectedItems);
  };

  const handleAddBranch = () => {
    setDrawerOpen(true);
  };

  const rows: Row[] = data?.data?.data.map((branch: any) => ({
    image: branch.images[0],
    branchName: branch.name_en,
    address: branch.address_en,
    description: branch.description_en,
    status: branch.activateStatus === 'ACTIVE' ? 'Active' : 'Inactive',
    createdAt: new Date(branch.createdAt).toLocaleDateString(),
    createdBy: `${branch.createBy.first_name} ${branch.createBy.last_name}`,
    action: 'Edit',
  })) || [];

  return {
    viewMode,
    setViewMode,
    selected,
    handleSelect,
    drawerOpen,
    setDrawerOpen,
    rows,
    data,
    isError,
    isLoading,
    handleAddBranch,
  };
};

export default useBranches;
