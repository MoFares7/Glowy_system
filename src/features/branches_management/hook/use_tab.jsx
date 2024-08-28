import { useState } from 'react';

const useTabs = (initialIndex = 0) => {
    const [selectedTab, setSelectedTab] = useState(initialIndex);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    return {
        selectedTab,
        handleTabClick,
    };
};

export default useTabs;
