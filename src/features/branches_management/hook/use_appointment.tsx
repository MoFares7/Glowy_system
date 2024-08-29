import { useState } from 'react';

type ExpandedState = {
    [key: string]: boolean;
};

type UseAppointmentReturn = {
    expanded: ExpandedState;
    toggleExpand: (section: string) => void;
};

const useAppointment = (): UseAppointmentReturn => {
    const [expanded, setExpanded] = useState < ExpandedState > ({});

    const toggleExpand = (section: string): void => {
        setExpanded((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return {
        expanded,
        toggleExpand,
    };
};

export default useAppointment;
