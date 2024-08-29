import React from 'react';
import { Box, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import MDTextField from '../../../components/TextField/text_field';
import PrimaryButton from '../../../components/Buttons/primary_button';
import { colors } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/theme/fonts';
import { borders } from '../../../assets/theme/borders';
import useContactNumbers from '../hook/use_contact_numbers_section';

interface ContactNumbersSectionProps {
    control: any;
}

const ContactNumbersSection: React.FC<ContactNumbersSectionProps> = ({ control }) => {
    const {
        contactNumbers,
        newContactNumber,
        setNewContactNumber,
        handleAddContactNumber,
    } = useContactNumbers();

    return (
        <Box>
            <Typography sx={{ typography: fonts.subtitle1, fontWeight: 400 }} >
                Contact Numbers
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Controller
                    name="contactNumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <MDTextField
                            {...field}
                            value={newContactNumber}
                            hintText={'ADD MANY CONTACT NUMBER'}
                            type={'number'}
                            onChange={(e) => setNewContactNumber(e.target.value)}
                            isFulWidth={true}
                        />
                    )}
                />
                <Box px={0.5} />
                <PrimaryButton
                    title={'ADD'}
                    fontType={fonts.subtitle2}
                    borderColor={colors.secondary?.light}
                    borderRadius={borders.borderRadius.xs}
                    backgroundColor={colors.background?.paper}
                    colorTitle={'#B2B2B2'}
                    hoverColor={'#B2B2B2'}
                    isTitleAndIcon={false}
                    isIcon={false}
                    onClick={handleAddContactNumber}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                }}
            >
                {contactNumbers.map((number, index) => (
                    <Box
                        key={index}
                        sx={{
                            mt: 0,
                            backgroundColor: colors.text?.primary,
                            borderRadius: borders.borderRadius.xl,
                            p: 1,
                        }}
                    >
                        <Typography sx={{ typography: fonts.subtitle2, color: colors.background?.paper }} >
                            {number}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box >
    );
};

export default ContactNumbersSection;
