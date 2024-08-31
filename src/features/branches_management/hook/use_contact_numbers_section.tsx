import { useState } from 'react';

const useContactNumbers = (setValue?: (name: string, value: any) => void) => {
    const [contactNumbers, setContactNumbers] = useState<string[]>([]);
    const [newContactNumber, setNewContactNumber] = useState('');

    const handleAddContactNumber = () => {
        if (newContactNumber.trim() !== '') {
            const updatedNumbers = [...contactNumbers, newContactNumber.trim()];
            setContactNumbers(updatedNumbers);
            setNewContactNumber('');
            if (setValue) {
                setValue('phoneNumbers', updatedNumbers);
            }
           
            console.log(`New contact number added: ${newContactNumber.trim()}`);
            console.log(`Updated contact numbers: ${updatedNumbers.join(', ')}`);
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
