import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homeHeroBg from '../../assets/images/home-hero-bg.png';

function Hero() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100vh', gap: '2rem', px: { xs: 2, md: 12 }, maxWidth: '100%', backgroundImage: `url(${homeHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Stack gap={1} width={{ xs: '100%', md: '50%' }}>
                    <Typography variant="h1" sx={{ fontSize: '3rem', color: '#000', textAlign: 'left' }}>Circular Economy Solution for <span style={{ fontWeight: 'bold', color: '#000' }}>Display Structures</span></Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.5rem', color: '#000', textAlign: 'left' }}>End-to-End Lifecycle Management</Typography>
                    <Button variant="contained" sx={{ fontSize: '1.5rem', color: '#000', backgroundColor: '#a4c2ef', borderRadius: '5rem', padding: '1rem 4rem', width: 'fit-content', mt: 2 }}>Get Started &nbsp; <ArrowForwardIcon /></Button>
                </Stack>
            </Box>
        </>
    )
}

export default Hero;