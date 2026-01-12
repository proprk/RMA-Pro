import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';

function ExpectedImpact() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: { xs: 8, md: 12 }, px: { xs: 2, md: 12 }, maxWidth: '100%', }}>
                <Stack gap={{ xs: 4, md: 6 }} width={{ xs: '100%', md: '90%' }} alignItems="center" textAlign="center">

                    <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'light', color: '#000', lineHeight: '1.2' }}>Expected Impact</Typography>

                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#000', textAlign: 'center', maxWidth: '800px' }}>Measurable outcomes that reduce waste, optimize costs,  <span style={{ fontWeight: 'normal', color: '#6c6d6d', background: 'linear-gradient(to bottom, #fff, #f2e9cf)', padding: '0.25rem 0.75rem' }}>and extend the lifecycle</span> of display assets.</Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 3, width: '100%', mt: 4 }}>
                        {[
                            { color: '#eea2e6', icon: <AttachMoneyIcon sx={{ fontSize: '1.5rem' }} />, title: "40-60%", desc: "Cost Recovery vs. Replacement" },
                            { color: '#eda3b7', icon: <TroubleshootOutlinedIcon sx={{ fontSize: '1.5rem' }} />, title: "70%+", desc: "Waste Reduction Target" },
                            { color: '#c9a3ee', icon: <OutlinedFlagOutlinedIcon sx={{ fontSize: '1.5rem' }} />, title: "ESG", desc: "Sustainability Goals Alignment" },
                            { color: '#eeb9a3', icon: <DvrOutlinedIcon sx={{ fontSize: '1.5rem' }} />, title: "100%", desc: "Visibility into Asset Lifecycle" },
                            { color: '#a4c2ef', icon: <BuildCircleOutlinedIcon sx={{ fontSize: '1.5rem' }} />, title: "5-7 Days", desc: "Average Repair Turnaround" },
                            { color: '#eda3b7', icon: <SelfImprovementOutlinedIcon sx={{ fontSize: '1.5rem' }} />, title: "Ongoing", desc: "Design Improvement Insights" }
                        ].map((item, index) => (
                            <Box key={index} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '220px',
                                alignItems: 'start',
                                background: `linear-gradient(to bottom right, ${item.color}, #f0efed)`,
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
                                    mb: 2,
                                    p: 1.5
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography variant='h3' sx={{ fontSize: '2rem', fontWeight: 'medium', mb: 1, textAlign: 'left' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: '1rem', fontWeight: 'light', textAlign: 'left', lineHeight: 1.4 }}>
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

export default ExpectedImpact;