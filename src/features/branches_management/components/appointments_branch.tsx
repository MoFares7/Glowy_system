import { Box } from '@mui/material';
import React from 'react';
import ExpandedBox from '../ui/expanded_box';
import AppointmentCard from '../ui/appointment_card';
import { colors } from '../../../assets/theme/colors';
import useAppointment from '../hook/use_appointment';
import image from '../../../assets/images/download.jpg';

const AppointmentsBranch = () => {
    const { expanded, toggleExpand } = useAppointment();

    // Data for appointments
    const appointmentData = [
        {
            title: "Manicure And Pedicure",
            subTitle: "10:00 AM - 11:00 AM",
            sourceImage: image,
            colorSider: colors.primary?.main,
            destinationImage: image,
            destinationTitle: "DR. Samer Saad"
        },
        {
            title: "Pedicure AND Test",
            subTitle: "4:00 AM - 6:00 AM",
            sourceImage: image,
            colorSider: colors.info?.light,
            destinationImage: image,
            destinationTitle: "DR. Ahmad Saad"
        },
        {
            title: "Kareem And WEWE",
            subTitle: "12:00 AM - 1:00 AM",
            sourceImage: image,
            colorSider: colors.error?.main,
            destinationImage: image,
            destinationTitle: "DR. HX"
        }
    ];

    return (
        <Box sx={{ p: 4 }}>
            {/* November 16, 2023 ExpandedBox */}
            <ExpandedBox
                isPrimary={true}
                title={"November 16, 2023"}
                subTitle={`Thursday`}
                colorTitle={colors.text?.primary}
                initialBackgroundColor={colors.info?.light}
                expandedBackgroundColor={colors.background?.paper}
                borderColor={colors.info?.light}
                onClick={() => toggleExpand('november16')}
                isExpanded={expanded['november16']}
            />
            {expanded['november16'] && (
                <Box sx={{ my: 3 }}>
                    {appointmentData.map((appointment, index) => (
                        <AppointmentCard
                            key={index}
                            title={appointment.title}
                            subTitle={appointment.subTitle}
                            sourceImage={appointment.sourceImage}
                            colorSider={appointment.colorSider}
                            destinationImage={appointment.destinationImage}
                            destinationTitle={appointment.destinationTitle}
                        />
                    ))}
                </Box>
            )}

            <Box sx={{ pb: 2 }} />
            {/* November 17, 2023 ExpandedBox */}
            <ExpandedBox
                isPrimary={true}
                title={"November 17, 2023"}
                subTitle={`Friday`}
                colorTitle={colors.text?.primary}
                initialBackgroundColor={colors.info?.light}
                expandedBackgroundColor={colors.background?.paper}
                borderColor={colors.info?.light}
                onClick={() => toggleExpand('november17')}
                isExpanded={expanded['november17']}
            />
            {expanded['november17'] && (
                <Box sx={{ my: 3 }}>
                    {appointmentData.map((appointment, index) => (
                        <AppointmentCard
                            key={index}
                            title={appointment.title}
                            subTitle={appointment.subTitle}
                            sourceImage={appointment.sourceImage}
                            colorSider={appointment.colorSider}
                            destinationImage={appointment.destinationImage}
                            destinationTitle={appointment.destinationTitle}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default AppointmentsBranch;
