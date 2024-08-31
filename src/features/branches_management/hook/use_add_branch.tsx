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
    images: string[];
    phoneNumbers: string[]; 
    showInApp: number;
};

const useBranchForm = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [latitude, setLatitude] = useState<number>(29.378586);
    const [longitude, setLongitude] = useState<number>(47.990341);
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
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            clearErrors('images');
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
        setError('images', {
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
            setError('images', { type: 'manual', message: 'Image is required' });
            return;
        }

        try {
            // Convert phoneNumbers array into the correct format
            const phoneNumberFields: { [key: string]: string } = {};
            data.phoneNumbers.forEach((number, index) => {
                phoneNumberFields[`phoneNumbers[${index}]`] = number;
            });

            // Convert availableHours array into the correct format
            const availableHoursFields: { [key: string]: any } = {};
            data.availableHours.forEach((hours, index) => {
                availableHoursFields[`availableHours[${index}]`] = hours;
            });

            const apiData = {
                name_en: data.branchName,
                name_ar: data.branchNameAR,
                name_tr: data.branchNameTR,
                description_en: data.branchDescriptionEN,
                description_ar: data.branchDescriptionAR,
                description_tr: data.branchDescriptionTR,
                address_en: data.branchAddressEN,
                address_ar: data.branchAddressAR,
                address_tr: data.branchAddressTR,
                latitude: data.latitude,
                longitude: data.longitude,
                showInApp: data.showInApp,
                images: [selectedImage],
                ...availableHoursFields, 
                ...phoneNumberFields, 
            };

            console.log('Submitting data:', JSON.stringify(apiData, null, 2));
            const response = await createBranch(apiData).unwrap();
            console.log('Branch created successfully:', response);

            reset();
        } catch (error) {
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
        onMapLocationChange,
        setValue,
    };
};

export default useBranchForm;
