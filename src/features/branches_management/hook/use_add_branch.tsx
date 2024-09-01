import { useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateBranchMutation } from '../apis/branch_api';

type FormData = {
    branchName: string;
    branchNameAR: string;
    branchNameTR: string;
    branchAddressEN: string;
    branchAddressAR: string;
    branchAddressTR: string;
    branchDescriptionEN: string;
    branchDescriptionAR: string;
    branchDescriptionTR: string;
    availableHours: any[];
    latitude: number;
    longitude: number;
    image: File | null;
    phoneNumbers: any[];
    showInApp: number;
};

const useBranchForm = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [latitude, setLatitude] = useState<number>(29.378586);
    const [longitude, setLongitude] = useState<number>(47.990341);
    const [loading, setLoading] = useState<boolean>(false);
    const [createBranch] = useCreateBranchMutation();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
        clearErrors,
        setValue
    } = useForm<FormData>({ mode: 'onChange' });

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
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

    const onMapLocationChange = (lat: number, lng: number) => {
        setLatitude(lat);
        setLongitude(lng);
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if (!selectedImage) {
            setError('image', { type: 'manual', message: 'Image is required' });
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append('name_en', data.branchName);
            formData.append('name_ar', data.branchNameAR);
            formData.append('name_tr', data.branchNameTR);
            formData.append('description_en', data.branchDescriptionEN);
            formData.append('description_ar', data.branchDescriptionAR);
            formData.append('description_tr', data.branchDescriptionTR);
            formData.append('address_en', data.branchAddressEN);
            formData.append('address_ar', data.branchAddressAR);
            formData.append('address_tr', data.branchAddressTR);
            formData.append('latitude', latitude.toString());
            formData.append('longitude', longitude.toString());
            formData.append('showInApp', '1');
            formData.append('images', selectedImage);

            data.availableHours.forEach((hour, index) => {
                formData.append(`availableHours[${index}]`, JSON.stringify(hour));
            });

            data.phoneNumbers.forEach((number, index) => {
                const formattedNumber = number;
                formData.append(`phoneNumbers[${index}]`, formattedNumber);
                console.log(typeof formattedNumber)
            });

            console.log('FormData contents:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            const response = await createBranch(formData).unwrap();
            console.log('Branch created successfully:', response);

            reset();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Failed to create branch:', error);
        }
    };

    return {
        selectedImage,
        control,
        handleSubmit,
        errors,
        handleImageChange,
        handleButtonClick,
        handleRemoveImage,
        onSubmit,
        setValue,
        loading,
        onMapLocationChange,
    };
};

export default useBranchForm;
