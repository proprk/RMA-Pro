import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CompostIcon from '@mui/icons-material/Compost';
import RecyclingIcon from '@mui/icons-material/Recycling';
import DisabledVisibleIcon from '@mui/icons-material/DisabledVisible';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import FolderDeleteOutlinedIcon from '@mui/icons-material/FolderDeleteOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

function Challenges() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10, px: { xs: 2, md: 12 }, py: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#efedec' }}>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <Typography variant='h1' sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'light', textAlign: 'center' }}>Current Challenge</Typography>
                </Box>

                <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontWeight: 'light', gap: 4 }}>

                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#edd1a3',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                p: 2
                            }}>
                                <LinearScaleIcon sx={{ color: '#1a1a1a', fontSize: '2rem', }} />
                            </Box>
                            <Typography variant='h2' sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                                The Linear Model
                            </Typography>
                        </Box>
                        <Typography variant='h5' sx={{ fontWeight: 'light', textAlign: 'center', fontSize: '1.25rem' }}>
                            When the <span style={{ fontWeight: 'normal', color: '#6c6d6d', background: 'linear-gradient(to bottom, #fff, #efedec)', padding: '0.25rem 0.75rem' }}>Display Structures (towers, display cases)</span> malfunction or don't meet store needs, <br />the current process is:
                        </Typography>

                        <Box mt={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1, md: 3 }, flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: '#eeb9a3', padding: '0.8rem 2rem', borderRadius: '5rem', fontSize: '1rem', gap: 1 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: '#f0efed5c',
                                    width: '30px',
                                    height: '30px',
                                    flexShrink: 0
                                }}>
                                    <StorefrontOutlinedIcon sx={{ fontSize: '1rem' }} />
                                </Box>

                                <Typography sx={{ color: '#1a1a1a', textAlign: 'left', fontWeight: 'normal', fontSize: '1rem', lineHeight: 1.2 }}>
                                    Store
                                </Typography>
                            </Box>
                            <ArrowRightAltIcon sx={{ fontSize: '2rem', fontWeight: 'light' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: '#eeb9a3', padding: '0.8rem 2rem', borderRadius: '5rem', fontSize: '1rem', gap: 1 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: '#f0efed5c',
                                    width: '30px',
                                    height: '30px',
                                    flexShrink: 0
                                }}>
                                    <FolderDeleteOutlinedIcon sx={{ fontSize: '1rem' }} />
                                </Box>

                                <Typography sx={{ color: '#1a1a1a', textAlign: 'left', fontWeight: 'normal', fontSize: '1rem', lineHeight: 1.2 }}>
                                    Discard
                                </Typography>
                            </Box>
                            <ArrowRightAltIcon sx={{ fontSize: '2rem', fontWeight: 'light' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: '#eeb9a3', padding: '0.8rem 2rem', borderRadius: '5rem', fontSize: '1rem', gap: 1 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: '#f0efed5c',
                                    width: '30px',
                                    height: '30px',
                                    flexShrink: 0
                                }}>
                                    <CurrencyExchangeOutlinedIcon sx={{ fontSize: '1rem' }} />
                                </Box>

                                <Typography sx={{ color: '#1a1a1a', textAlign: 'left', fontWeight: 'normal', fontSize: '1rem', lineHeight: 1.2 }}>
                                    Replace with New Unit
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Stack>



                <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontWeight: 'light' }}>

                    <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 6, mt: 4 }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#edd1a3',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                p: 2
                            }}>
                                <ScubaDivingIcon sx={{ color: '#1a1a1a', fontSize: '2rem', }} />
                            </Box>
                            <Typography variant='h2' sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                                Impact
                            </Typography>
                        </Box>

                        <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {[
                                { color: '#a4c2ef', icon: <AttachMoneyIcon sx={{ fontSize: '1.5rem' }} />, text: "Significant financial waste from discarded structures" },
                                { color: '#c9a3ee', icon: <CompostIcon sx={{ fontSize: '1.5rem' }} />, text: "Environmental damage from unnecessary disposal", ml: 6 },
                                { color: '#eeb9a3', icon: <RecyclingIcon sx={{ fontSize: '1.5rem' }} />, text: "Lost opportunity for refurbishment and reuse", ml: 4 },
                                { color: '#eda3b7', icon: <DisabledVisibleIcon sx={{ fontSize: '1.5rem' }} />, text: "No visibility into failure patterns or root causes" }
                            ].map((item, index) => (
                                <Box key={index} sx={{
                                    backgroundColor: item.color,
                                    borderRadius: '5rem',
                                    p: 2,
                                    maxWidth: '500px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    ml: { xs: 2, md: item.ml || 0 }
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        backgroundColor: '#f0efed5c',
                                        width: '48px',
                                        height: '48px',
                                        flexShrink: 0
                                    }}>
                                        {item.icon}
                                    </Box>
                                    <Typography sx={{ color: '#1a1a1a', textAlign: 'left', fontWeight: 'normal', fontSize: '1rem', lineHeight: 1.2 }}>
                                        {item.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Stack >
            </Box >
        </>
    );
}

export default Challenges;