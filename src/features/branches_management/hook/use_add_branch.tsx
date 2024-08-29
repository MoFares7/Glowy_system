import { useState, ChangeEvent } from 'react';
import { useForm, UseFormReturn, FieldValues, SubmitHandler } from 'react-hook-form';

type FormData = {
    [key: string]: any; 
};

const useBranchForm = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
        clearErrors,
    } = useForm<FormData>({ mode: 'onChange' });

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            clearErrors('image');
        }
    };

    const handleButtonClick = (): void => {
        const imageInput = document.getElementById('imageInput') as HTMLInputElement;
        if (imageInput) {
            imageInput.click();
        }
    };

    const handleRemoveImage = (): void => {
        setSelectedImage(null);
        setError('image', {
            type: 'manual',
            message: 'Image is required',
        });
    };

    const onSubmit: SubmitHandler<FormData> = (data): void => {
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
