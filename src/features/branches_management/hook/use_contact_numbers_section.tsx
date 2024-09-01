import { useState } from 'react';

const useContactNumbers = (setValue?: (name: string, value: any) => void) => {
    const [contactNumbers, setContactNumbers] = useState<string[]>([]);
    const [newContactNumber, setNewContactNumber] = useState('');

    const handleAddContactNumber = () => {
        if (newContactNumber !== '') {
            const updatedNumbers = [...contactNumbers, newContactNumber];
            setContactNumbers(updatedNumbers);
            setNewContactNumber('');
            if (setValue) {
                setValue('phoneNumbers', updatedNumbers);
            }
        }
    };

    return {
        contactNumbers,
        newContactNumber,
        setNewContactNumber,
        handleAddContactNumber,
    };
};

export default useContactNumbers;
