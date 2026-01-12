import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Hero() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: { xs: 8, md: 12 }, px: { xs: 2, md: 12 }, maxWidth: '100%' }}>
                <Stack gap={{ xs: 4, md: 6 }} width={{ xs: '100%', md: '85%' }} alignItems="center" textAlign="center">
                    <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 'light', color: '#000', lineHeight: '1.1' }}>Circular Economy Solution for <span style={{ fontWeight: 'light', color: '#6c6d6d', background: 'linear-gradient(to bottom, #fff, #f2e9cf)', padding: '0.25rem 0.75rem' }}>Display Structures</span></Typography>

                    <Box mt={1}>
                        <Typography variant="body1" sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' }, color: '#6c6d6d', textAlign: 'center', fontWeight: 'light' }}>Display Structures Supply Chain Management - EssilorLuxottica</Typography>
                    </Box>

                    <Box mt={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1, md: 2 }, flexWrap: 'wrap' }}>
                        {[
                            { text: "Sunglass Hut", color: "#edd1a3" },
                            { text: "LensCrafters", color: "#a4c2ef" },
                            { text: "Oakley", color: "#c9a3ee" },
                            { text: "Team Vision", color: "#eeb9a3" },
                            { text: "Target Optical", color: "#eea2e6" },
                            { text: "Pearle Vision", color: "#eda3b7" }
                        ].map((brand, idx) => (
                            <Typography key={idx} className='button-text' sx={{ textAlign: 'center', background: brand.color, px: 3, py: 1, borderRadius: '5rem', fontSize: '0.875rem', fontWeight: 'medium' }}>{brand.text}</Typography>
                        ))}
                    </Box>

                    <Box mt={{ xs: 6, md: 8 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                        <Typography variant="body1" className='secondary-text' sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, textAlign: 'justify', display: 'flex', alignItems: 'start', gap: '1.5rem', maxWidth: '900px', lineHeight: 1.6 }}><FormatQuoteIcon sx={{ fontSize: '3rem', transform: 'rotate(180deg)', color: '#a4c2ef', flexShrink: 0, mt: -1 }} /> A centralized solution designed to manage the complete lifecycle of retail display structures. The platform streamlines return requests, inspection workflows, repair approvals, and inventory tracking—helping brands reduce waste, control costs, and maximize asset reuse while supporting circular economy initiatives.</Typography>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Hero;