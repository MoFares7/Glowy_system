import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useBranchForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
        clearErrors,
    } = useForm({ mode: 'onChange' });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            clearErrors('image');
        }
    };

    const handleButtonClick = () => {
        document.getElementById('imageInput').click();
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setError('image', {
            type: 'manual',
            message: 'Image is required',
        });
    };

    const onSubmit = (data) => {
        if (!selectedImage) {
            setError('image', {
                type: 'manual',
                message: 'Image is required',
            });
            return;
        }

        console.log(data);
    
        reset();
    };

    return {
        selectedImage,
        control,
        handleSubmit,
        errors,
        reset,
        handleImageChange,
        handleButtonClick,
        handleRemoveImage,
        onSubmit,
    };
};

export default useBranchForm;
