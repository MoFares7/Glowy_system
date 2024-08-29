import React, { useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { Controller, UseFormHandleSubmit, UseFormControl } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/theme/fonts';
import gallery from '../../../assets/icons/gallery.svg';
import PrimaryButton from '../../../components/Buttons/primary_button';
import { borders } from '../../../assets/theme/borders';
import MDTextField from '../../../components/TextField/text_field';
import useBranchForm from '../hook/use_add_branch';
import ContactNumbersSection from '../components/contact_numbers_section';
import WeeklyTimeSelector from '../components/day_time_selector';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import Map from '../hook/Map';

interface FormData {
    branchName: string;
    branchNameAR: string;
    branchNameTR: string;
    branchAddressEN: string;
    branchAddressAR: string;
    branchAddressTR: string;
    branchDescriptionEN: string;
    branchDescriptionAR: string;
    branchDescriptionTR: string;
    selectedDays: string[];
}

interface AddBranchContentProps {
    setDrawerOpen: (isOpen: boolean) => void;
}

const AddBranchContent: React.FC<AddBranchContentProps> = ({ setDrawerOpen }) => {
    const {
        selectedImage,
        control,
        handleSubmit,
        handleImageChange,
        handleButtonClick,
        handleRemoveImage,
        onSubmit,
    } = useBranchForm();

    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [isWeeklySelectorVisible, setIsWeeklySelectorVisible] = useState<boolean>(false);

    const handleShowViewStandardHours = () => {
        setIsWeeklySelectorVisible(prevState => !prevState);
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
                <Controller
                    name="branchName"
                    control={control as UseFormControl<FormData>}
                    defaultValue=""
                    rules={{ required: 'Branch Name in English is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Branch Name In En
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type={'text'}
                        />
                    )}
                />

                <Controller
                    name="branchNameAR"
                    control={control as UseFormControl<FormData>}
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
                            type={'text'}
                        />
                    )}
                />

                <Controller
                    name="branchNameTR"
                    control={control as UseFormControl<FormData>}
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
                            type={'text'}
                        />
                    )}
                />

                <Controller
                    name="branchAddressEN"
                    control={control as UseFormControl<FormData>}
                    defaultValue=""
                    rules={{ required: 'Branch Address in English is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Name Address In EN
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type={'text'}
                        />
                    )}
                />

                <Controller
                    name="branchAddressAR"
                    control={control as UseFormControl<FormData>}
                    defaultValue=""
                    rules={{ required: 'Branch Address in Arabic is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Name Address In AR
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type={'text'}
                        />
                    )}
                />

                <Controller
                    name="branchAddressTR"
                    control={control as UseFormControl<FormData>}
                    defaultValue=""
                    rules={{ required: 'Branch Address in Turkish is required' }}
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            label={
                                <>
                                    Name Address In TR
                                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                                </>
                            }
                            isFulWidth={true}
                            type={'text'}
                        />
                    )}
                />

                <Controller
                    name="branchDescriptionEN"
                    control={control as UseFormControl<FormData>}
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
                            type={'text'}
                            multiline={true}
                            rows={4}
                        />
                    )}
                />

                <Controller
                    name="branchDescriptionAR"
                    control={control as UseFormControl<FormData>}
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
                            type={'text'}
                            multiline={true}
                            rows={4}
                        />
                    )}
                />

                <Controller
                    name="branchDescriptionTR"
                    control={control as UseFormControl<FormData>}
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
                            type={'text'}
                            multiline={true}
                            rows={4}
                        />
                    )}
                />

                {/* Contact Numbers Section */}
                <ContactNumbersSection control={control as UseFormControl<FormData>} />

                {/* Standard hours Section */}
                <Controller
                    name="selectedDays"
                    control={control as UseFormControl<FormData>}
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
                            type={'text'}
                            hintText={'CONFIGURE THE STANDARD HOURS OF OPERATION'}
                            icon={isWeeklySelectorVisible ? <ArrowDropUp /> : <ArrowDropDown />}
                            onClick={handleShowViewStandardHours}
                        />
                    )}
                />

                {isWeeklySelectorVisible && (
                    <WeeklyTimeSelector
                        selectedDays={selectedDays}
                        onSelectedDaysChange={setSelectedDays}
                    />
                )}

                <Typography sx={{ typography: fonts.subtitle1 }}><>
                    Set Loaction
                    <span style={{ color: colors.error?.main, margin: '8px' }}>*</span>
                </></Typography>
                <Map />

                <Box sx={{ py: 2 }} />

                {/* Options */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 1,
                    pb: 5,
                }}>
                    <PrimaryButton
                        title={'CANCEL'}
                        fontType='subtitle2'
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
                        fontType='subtitle2'
                        width={'15%'}
                        backgroundColor={colors.primary?.main}
                        hoverColor={colors.primary?.state}
                        borderRadius={borders.borderRadius.xs}
                        colorTitle={colors.background?.paper}
                        isIcon={false}
                        isTitleAndIcon={false}
                        onClick={onSubmit}
                    />
                </Box>
            </form>
        </Box>
    );
};

export default AddBranchContent;
