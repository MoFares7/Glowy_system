import React, { useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Controller } from 'react-hook-form';
import { colors } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/theme/fonts';
import gallery from '../../../assets/icons/gallery.svg';
import PrimaryButton from '../../../shared/components/Buttons/primary_button';
import { borders } from '../../../assets/theme/borders';
import MDTextField from '../../../shared/components/TextField/text_field';
import useBranchForm from '../hook/use_add_branch';
import ContactNumbersSection from '../components/contact_numbers_section';
import WeeklyTimeSelector from '../components/day_time_selector';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import Map from '../hook/Map';

interface AddBranchContentProps {
    setDrawerOpen: (isOpen: boolean) => void;
}

const AddBranchContent: React.FC<{ setDrawerOpen: (isOpen: boolean) => void }> = ({ setDrawerOpen }) => {
    const {
        selectedImage,
        control,
        handleSubmit,
        handleImageChange,
        handleButtonClick,
        handleRemoveImage,
        onSubmit,
        errors,
        onMapLocationChange,
        setValue
    } = useBranchForm();

    const [isWeeklySelectorVisible, setIsWeeklySelectorVisible] = useState<boolean>(false);
    const [availableHours, setAvailableHours] = useState<any[]>([]);

    const handleShowViewStandardHours = () => {
        setIsWeeklySelectorVisible(prevState => !prevState);
    };

    const handleAvailableHoursChange = (hours: any[]) => {
        setAvailableHours(hours);
        setValue('availableHours', hours);
    };

    return (
        <Box
            sx={{
                mt: 2,
                height: '100%',
                backgroundColor: colors.background?.paper,
                p: 3,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ backgroundColor: colors.primary?.main, px: 0.25 }} />
                    <Typography sx={{ typography: fonts.subtitle1, fontWeight: 500, mx: 1.5 }}>ADD BRANCH</Typography>
                </Box>
                <IconButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon sx={{ color: '#A0ABBB' }} />
                </IconButton>
            </Box>

            <Divider sx={{ pt: 1, color: colors.secondary?.light }} />

            <Typography sx={{ pt: 1, typography: fonts.subtitle1, fontWeight: 400 }}>
                Branch Image
                <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
            </Typography>

            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: { xs: 2, sm: 5, md: 10, xl: 12 },
                    my: 2,
                    height: '250px',
                    textAlign: 'center',
                    border: `1px solid ${colors.secondary?.light}`,
                    borderRadius: borders.borderRadius.sm,
                    overflow: 'hidden',
                }}
            >
                {selectedImage ? (
                    <>
                        <img src={selectedImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <IconButton
                            onClick={handleRemoveImage}
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                backgroundColor: colors.background?.paper,
                                '&:hover': {
                                    backgroundColor: colors.background?.paper,
                                },
                            }}
                        >
                            <CloseIcon sx={{ color: colors.error?.main }} />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <img src={gallery} width={'50px'} alt="Gallery" />
                        <Typography sx={{ typography: fonts.subtitle2, color: colors.text?.secondary, fontWeight: 500 }}>
                            Drag Image Here
                        </Typography>
                        <Typography sx={{ typography: fonts.subtitle2, fontSize: 12, opacity: 0.5, py: 0.6, color: colors.text.secondary, fontWeight: 500 }}>
                            You Can Upload A Maximum Of 1 Files, 1:2 Aspect Ratio
                        </Typography>
                        <Box py={0.5} />
                        <PrimaryButton
                            title={'Browse Image'}
                            fontType='subtitle2'
                            width={'30%'}
                            backgroundColor={colors.primary?.main}
                            hoverColor={colors.primary?.state}
                            borderRadius={borders.borderRadius.xs}
                            colorTitle={colors.background?.paper}
                            isIcon={false}
                            isTitleAndIcon={false}
                            onClick={handleButtonClick}
                        />
                    </>
                )}
                <input
                    type="file"
                    id="imageInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Branch Name Fields */}
                <Controller
                    name="branchName"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Name in English is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Name In EN
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            error={Boolean(errors.branchName)}
                            helperText={errors.branchName?.message}
                        />
                    )}
                />

                <Controller
                    name="branchNameAR"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Name in Arabic is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Name In AR
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            error={Boolean(errors.branchNameAR)}
                            helperText={errors.branchNameAR?.message}
                        />
                    )}
                />

                <Controller
                    name="branchNameTR"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Name in Turkish is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Name In TR
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            error={Boolean(errors.branchNameTR)}
                            helperText={errors.branchNameTR?.message}
                        />
                    )}
                />

                {/* Branch Address Fields */}
                <Controller
                    name="branchAddressEN"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Address in English is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Address In EN
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            error={Boolean(errors.branchAddressEN)}
                            helperText={errors.branchAddressEN?.message}
                        />
                    )}
                />

                <Controller
                    name="branchAddressAR"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Address in Arabic is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Address In AR
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            error={Boolean(errors.branchAddressAR)}
                            helperText={errors.branchAddressAR?.message}
                        />
                    )}
                />

                <Controller
                    name="branchAddressTR"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Address in Turkish is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Address In TR
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            error={Boolean(errors.branchAddressTR)}
                            helperText={errors.branchAddressTR?.message}
                        />
                    )}
                />

                {/* Branch Description Fields */}
                <Controller
                    name="branchDescriptionEN"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Description in English is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Description In EN
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            multiline={true}
                            rows={4}
                            error={Boolean(errors.branchDescriptionEN)}
                            helperText={errors.branchDescriptionEN?.message}
                        />
                    )}
                />

                <Controller
                    name="branchDescriptionAR"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Description in Arabic is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Description In AR
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            multiline={true}
                            rows={4}
                            error={Boolean(errors.branchDescriptionAR)}
                            helperText={errors.branchDescriptionAR?.message}
                        />
                    )}
                />

                <Controller
                    name="branchDescriptionTR"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Branch Description in Turkish is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Description In TR
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            multiline={true}
                            rows={4}
                            error={Boolean(errors.branchDescriptionTR)}
                            helperText={errors.branchDescriptionTR?.message}
                        />
                    )}
                />

                {/* Contact Numbers Section */}
                <ContactNumbersSection
                    control={control}
                    setValue={setValue}
                />

                {/* Standard Hours Section */}
                <Controller
                    name="availableHours"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Set Standard Hours
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type="text"
                            hintText={'CONFIGURE THE STANDARD HOURS OF OPERATION'}
                            icon={isWeeklySelectorVisible ? <ArrowDropUp /> : <ArrowDropDown />}
                            onClick={handleShowViewStandardHours}
                        />
                    )}
                />

                {isWeeklySelectorVisible && (
                    <WeeklyTimeSelector
                        onChange={handleAvailableHoursChange}
                    />
                )}
                <Typography sx={{ typography: fonts.subtitle1 }}>
                    Set Location
                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                </Typography>
                <Map onLocationChange={onMapLocationChange} />

                <Box sx={{ py: 2 }} />

                {/* Options */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 1,
                        pb: 5,
                    }}
                >
                    <PrimaryButton
                        title={'CANCEL'}
                        fontType="subtitle2"
                        width={'15%'}
                        backgroundColor={colors.info?.light}
                        hoverColor={colors.info?.light}
                        borderRadius={borders.borderRadius.xs}
                        colorTitle={colors.text?.primary}
                        isIcon={false}
                        isTitleAndIcon={false}
                    />
                    <Box p={1} />
                    <PrimaryButton
                        title={'Save'}
                        fontType="subtitle2"
                        width={'15%'}
                        backgroundColor={colors.primary?.main}
                        hoverColor={colors.primary?.state}
                        borderRadius={borders.borderRadius.xs}
                        colorTitle={colors.background?.paper}
                        isIcon={false}
                        isTitleAndIcon={false}
                        onClick={handleSubmit(onSubmit)}
                    />

                </Box>
            </form>
        </Box>
    );
};

export default AddBranchContent;
