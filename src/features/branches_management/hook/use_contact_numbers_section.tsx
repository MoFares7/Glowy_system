import { useState } from 'react';

const useContactNumbers = () => {
    const [contactNumbers, setContactNumbers] = useState<string[]>([]);
    const [newContactNumber, setNewContactNumber] = useState('');

    const handleAddContactNumber = () => {
        if (newContactNumber.trim() !== '') {
            setContactNumbers([...contactNumbers, newContactNumber.trim()]);
            setNewContactNumber('');
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
