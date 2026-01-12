import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import PieChartIcon from '@mui/icons-material/PieChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CompostIcon from '@mui/icons-material/Compost';
import RecyclingIcon from '@mui/icons-material/Recycling';

function Solution() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: { xs: 8, md: 12 }, px: { xs: 2, md: 12 }, maxWidth: '100%' }}>
                <Stack gap={{ xs: 4, md: 6 }} width={{ xs: '100%', md: '90%' }} alignItems="center" textAlign="center">

                    <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'light', color: '#000', lineHeight: '1.2' }}>Our Circular Solution</Typography>

                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#000', textAlign: 'center', maxWidth: '800px' }}>A closed-loop system that recovers, repairs, and redeploys <span style={{ fontWeight: 'normal', color: '#6c6d6d', background: 'linear-gradient(to bottom, #fff, #f2e9cf)', padding: '0.25rem 0.75rem' }}>Display Structures</span> reducing waste and maximizing value</Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3, width: '100%', mt: 4 }}>
                        {[
                            { color: '#eeb9a3', icon: <CompostIcon sx={{ fontSize: '1.5rem' }} />, title: "Sustainability", desc: "Reduce environmental impact" },
                            { color: '#a4c2ef', icon: <AttachMoneyIcon sx={{ fontSize: '1.5rem' }} />, title: "Cost Savings", desc: "Recover asset value" },
                            { color: '#c9a3ee', icon: <PieChartIcon sx={{ fontSize: '1.5rem' }} />, title: "Data Insights", desc: "Track failure patterns" },
                            { color: '#eda3b7', icon: <RecyclingIcon sx={{ fontSize: '1.5rem' }} />, title: "Asset Recovery", desc: "Repair and redeploy" }
                        ].map((item, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '240px',
                                alignItems: 'start',
                                backgroundColor: item.color,
                                borderRadius: '2.5rem',
                                p: 3,
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'translateY(-5px)' }
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: '#f0efed5c',
                                    width: '56px',
                                    height: '56px',
                                    mb: 3,
                                    p: 1.5
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography variant='h5' sx={{ fontWeight: 'medium', mb: 1, textAlign: 'left' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: '0.95rem', fontWeight: 'light', textAlign: 'left', lineHeight: 1.4 }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Stack>
            </Box >
        </>
    )
}

export default Solution