import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BranchesPage from '../features/branches_management/pages/branches_page';
import DashboardManagementPage from '../features/Dashboard_management/dashboard_management_page';
import DetailsBranchPage from '../features/branches_management/pages/details_branch_page';

export const menuItems = [
    {
        name: 'Dashboard',
        path: '/',
        component: DashboardManagementPage,
    },
    {
        name: 'Manage Salon',
        subMenu: [
            {
                name: 'Branches list',
                path: '/manage-salon/branches',
                component: BranchesPage,
            },
            {
                name: 'Departments list',
                path: '/manage-salon/departments',
                component: BranchesPage,
            },
        ],
    },
    {
        name: 'Details',
        path: '/details',
        component: DetailsBranchPage,
    },
];

const RoutesManagement = () => {
    return (
        <Routes>
            {menuItems.map((item, index) => (
                <Route
                    key={index}
                    path={item.path}
                    element={<item.component />}
                />
            ))}
            {menuItems
                .filter((item) => item.subMenu)
                .flatMap((item) => item.subMenu)
                .map((subItem, index) => (
                    <Route
                        key={index}
                        path={subItem.path}
                        element={<subItem.component />}
                    />
                ))}
        </Routes>
    );
};

export default RoutesManagement;
