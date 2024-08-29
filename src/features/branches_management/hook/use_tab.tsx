import { useState } from 'react';

type UseTabsReturn = {
    selectedTab: number;
    handleTabClick: (index: number) => void;
};

const useTabs = (initialIndex: number = 0): UseTabsReturn => {
    const [selectedTab, setSelectedTab] = useState<number>(initialIndex);

    const handleTabClick = (index: number): void => {
        setSelectedTab(index);
    };

    return {
        selectedTab,
        handleTabClick,
    };
};

export default useTabs;
