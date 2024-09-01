import { Box } from '@mui/material'
import React from 'react'
import loader from '../../../assets/lottie/loader.json';
import Lottie from 'lottie-react'

const LoaderCard = () => {
    return (
        <Box>
            <Lottie animationData={loader} autoplay loop style={{ alignItems: 'center', width: 200, height: 200 }} />
        </Box>
    )
}

export default LoaderCard
