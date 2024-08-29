import { useState } from 'react';

const useExpand = (initialState = false) => {
    const [isExpanded, setIsExpanded] = useState(initialState);

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    return {
        isExpanded,
        toggleExpand
    };
}
export default useExpand;



