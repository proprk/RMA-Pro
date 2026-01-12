import { Box, Stack, Typography, Divider } from '@mui/material'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function DecisionPoint() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', py: { xs: 8, md: 12 }, px: { xs: 2, md: 12 }, maxWidth: '100%', backgroundColor: '#e3e6e6' }}>
            <Stack gap={2} width={{ xs: '100%', md: '90%' }} alignItems="center" textAlign="center">

                <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'light', color: '#000', lineHeight: '1.2', mb: 4 }}><span style={{ fontWeight: 'normal', color: '#6c6d6d', background: 'linear-gradient(to bottom, #fff, #e3e6e6)', padding: '0.25rem 0.75rem' }}>Decision Point: </span> Repair vs. Salvage</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '900px', height: 'auto', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #a4c2ef, #c4cfdfff)', borderRadius: '2.5rem', p: { xs: 2, md: 3 }, gap: 1 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='h5' sx={{ fontWeight: 'medium', textAlign: 'center', fontSize: '1.5rem' }}>
                            Assessment Complete
                        </Typography>
                    </Stack>

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 'light', textAlign: 'center' }}>
                        Vendor provides detailed report with repair cost and timeline
                    </Typography>
                </Box>

                <ArrowDownwardOutlinedIcon sx={{ color: '#1a1a1a', fontSize: '1.5rem', }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '900px', height: 'auto', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #eda3b7, #dcc1c8ff)', borderRadius: '2.5rem', p: { xs: 2, md: 3 }, gap: 1 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            backgroundColor: '#f0efed5c',
                            width: '80px',
                            height: '80px',
                            p: 1
                        }}>
                            <CheckOutlinedIcon sx={{ color: '#1a1a1a', fontSize: '2rem', }} />
                        </Box>
                        <Typography variant='h5' sx={{ fontWeight: 'medium', textAlign: 'center', fontSize: '1.5rem' }}>
                            Option A: Fixable
                        </Typography>
                    </Stack>

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 'light', textAlign: 'center' }}>
                        <strong>Step 11 :</strong> If repairable, vendor provides cost estimate
                    </Typography>

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 'light', textAlign: 'center' }}>
                        <strong>Step 12 :</strong> Upon approval, vendor repairs unit to original specifications
                        Vendor notifies sales team when ready for redeployment
                    </Typography>
                </Box>

                <ArrowDownwardOutlinedIcon sx={{ color: '#1a1a1a', fontSize: '1.5rem', }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '900px', height: 'auto', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #edd1a3, #e7e0d6ff)', borderRadius: '2.5rem', p: { xs: 2, md: 3 }, gap: 1 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            backgroundColor: '#f0efed5c',
                            width: '80px',
                            height: '80px',
                            p: 1
                        }}>
                            <ClearOutlinedIcon sx={{ color: '#1a1a1a', fontSize: '2rem', }} />
                        </Box>
                        <Typography variant='h5' sx={{ fontWeight: 'medium', textAlign: 'center', fontSize: '1.5rem' }}>
                            Option B: Not Fixable
                        </Typography>
                    </Stack>

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 'light', textAlign: 'center' }}>
                        <strong>Step 12 :</strong> If repair is not cost-effective:
                    </Typography>

                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 'light', textAlign: 'center' }}>
                        <ul>
                            <li>- Salvage all reusable components (graphics, hardware, materials)</li>
                            <li>- Document parts for inventory</li>
                            <li>- Responsibly dispose of non-salvageable materials</li>
                        </ul>
                    </Typography>
                </Box>

            </Stack>
        </Box >
    )
}

export default DecisionPoint;