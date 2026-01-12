import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import InsightsIcon from '@mui/icons-material/Insights';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';

function ProgramEnhancements() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: { xs: 8, md: 12 }, px: { xs: 2, md: 12 }, maxWidth: '100%' }}>
                <Stack gap={{ xs: 4, md: 6 }} width={{ xs: '100%', md: '90%' }} alignItems="center" textAlign="center">

                    <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'light', color: '#000', lineHeight: '1.2' }}>Program Enhancements</Typography>

                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#000', textAlign: 'center', maxWidth: '800px' }}>Enhancing control, efficiency, <span style={{ fontWeight: 'normal', color: '#6c6d6d', background: 'linear-gradient(to bottom, #fff, #f2e9cf)', padding: '0.25rem 0.75rem' }}>Analyze</span> and reuse across the display structure lifecycle.</Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 3, width: '100%', mt: 4 }}>
                        {[
                            { color: '#eea2e6', icon: <WaterfallChartIcon sx={{ fontSize: '1.5rem' }} />, title: "Digital Tracking", desc: "QR codes on all units for instant portal access and asset tracking" },
                            { color: '#eda3b7', icon: <InsightsIcon sx={{ fontSize: '1.5rem' }} />, title: "Analytics Dashboard", desc: "Track failure rates, repair costs, and ROI by brand and structure type" },
                            { color: '#c9a3ee', icon: <TaskAltIcon sx={{ fontSize: '1.5rem' }} />, title: "SLA Commitments", desc: "48-hour assessment, 5-day repair turnaround for urgent needs" },
                            { color: '#eeb9a3', icon: <ModelTrainingIcon sx={{ fontSize: '1.5rem' }} />, title: "Store Training", desc: "Quick reference guides and video tutorials for return process" },
                            { color: '#a4c2ef', icon: <HandshakeIcon sx={{ fontSize: '1.5rem' }} />, title: "Vendor Partnership", desc: "Certified repair partners with brand-specific training" },
                            { color: '#eea2e6', icon: <TroubleshootOutlinedIcon sx={{ fontSize: '1.5rem' }} />, title: "Root Cause Analysis", desc: "Quarterly reports to improve future POP designs" }
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
                                    mb: 2,
                                    p: 1.5
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography variant='h5' sx={{ fontSize: '1.25rem', fontWeight: 'medium', mb: 1, textAlign: 'left', lineHeight: 1.2 }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: '0.9rem', fontWeight: 'light', textAlign: 'left', lineHeight: 1.4 }}>
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

export default ProgramEnhancements;