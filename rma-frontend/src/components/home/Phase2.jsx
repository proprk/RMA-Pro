import { Box, Stack, Typography, Divider } from '@mui/material'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

function Phase2() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: { xs: 8, md: 12 }, px: { xs: 2, md: 12 }, maxWidth: '100%', backgroundColor: '#e3e6e6' }}>
            <Stack gap={{ xs: 4, md: 6 }} width={{ xs: '100%', md: '90%' }} alignItems="center" textAlign="center">

                <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'light', color: '#000', lineHeight: '1.2' }}><span style={{ fontWeight: 'normal', color: '#6c6d6d', background: 'linear-gradient(to bottom, #fff, #e3e6e6)', padding: '0.25rem 0.75rem' }}>Phase 2:</span> Initial Response</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '900px', height: 'auto', alignItems: 'start', justifyContent: 'center', background: 'linear-gradient(to bottom right, #a4c2ef, #c9d6ebff)', borderRadius: '2.5rem', p: { xs: 4, md: 6 }, gap: 3 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 3, justifyContent: 'start', alignItems: 'center' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            backgroundColor: '#f0efed5c',
                            width: '56px',
                            height: '56px',
                            p: 1.5
                        }}>
                            <CheckCircleOutlinedIcon sx={{ color: '#1a1a1a', fontSize: '1.5rem', }} />
                        </Box>
                        <Typography variant='h5' sx={{ fontWeight: 'medium', textAlign: 'left', fontSize: '1.5rem' }}>
                            Visual Confirmation
                        </Typography>
                    </Stack>

                    <Divider sx={{ width: '100%', borderColor: 'rgba(0,0,0,0.1)' }} />

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 'light', textAlign: 'left' }}>
                        <strong style={{ color: '#000' }}>Step 3:</strong> Store manager or designated employee confirms the issue
                    </Typography>

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 'light', textAlign: 'left' }}>
                        <strong style={{ color: '#000' }}>Step 4:</strong> Quick assessment to determine if it is a simple fix or requires professional repair
                    </Typography>

                    <Typography sx={{ width: '100%', fontSize: '1.1rem', fontWeight: 'light', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '5rem', p: 1.5, mt: 3 }}>
                        <strong>Outcome:</strong> Decision to initiate the return process
                    </Typography>
                </Box>
            </Stack>
        </Box >
    )
}

export default Phase2