import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

function CompleteFlow() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4, px: { xs: 2, md: 12 }, py: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#efedec' }}>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <Typography variant='h1' sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'light', textAlign: 'center' }}>Complete Circular Flow</Typography>
                </Box>

                <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontWeight: 'light' }}>

                    <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 6, mt: 4 }}>

                        <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {[
                                { color: '#a4c2ef', number: 1, title: "Store Level", text: "Issue identified → Sales contacted → Portal submission" },
                                { color: '#c9a3ee', number: 2, title: "Logistics", text: "Packaging sent → Unit returned → Vendor receives", ml: 4 },
                                { color: '#eeb9a3', number: 3, title: "Assessment", text: "Inspection → Diagnosis → Cost estimation" },
                                { color: '#eda3b7', number: 4, title: "Repair/Salvage", text: "Approve & repair OR salvage components", ml: 4 },
                                { color: '#a4c2ef', number: 5, title: "Redeploy", text: "Ship to store OR send to LNAD warehouse" },
                            ].map((item, index) => (
                                <Box key={index} sx={{
                                    backgroundColor: item.color,
                                    borderRadius: '2rem',
                                    p: { xs: 3, md: 4 },
                                    maxWidth: '800px',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    ml: { xs: 0, md: item.ml || 0 }
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 3 }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            backgroundColor: '#f0efed5c',
                                            width: '60px',
                                            height: '60px',
                                            flexShrink: 0,
                                            fontSize: '1rem',
                                            fontWeight: 'normal'
                                        }}>
                                            {item.number}
                                        </Box>

                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: 1 }}>
                                        <Typography sx={{ color: '#1a1a1a', textAlign: 'left', fontWeight: 'bold', fontSize: '1rem' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ color: '#1a1a1a', textAlign: 'left', fontWeight: 'light', fontSize: '1rem' }}>
                                            {item.text}
                                        </Typography>
                                    </Box>

                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Stack >
            </Box >
        </>
    );
}

export default CompleteFlow;