import { Box, Typography, Paper, Divider, Button } from '@mui/material'
import RuleIcon from '@mui/icons-material/Rule';
import StoreHeader from '../../components/store/StoreHeader'
import { useNavigate } from 'react-router-dom';

function StoreDashboard() {

    const navigate = useNavigate()

    const handleCreateRequest = () => {
        navigate("/store/requests/new")
    }

    return (
        <>
            <StoreHeader />

            <Box sx={{ maxHeight: 'calc(100vh - 84px)', overflow: 'auto', px: { xs: 2, sm: 2, md: 4, lg: 6 }, py: 2 }} maxWidth='1440px' mx='auto' mt={8}>

                <Box sx={{ maxWidth: '800px' }}>
                    <Typography variant="h6">
                        Store Dashboard
                    </Typography>
                    <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', p: 2, backgroundColor: '#f0f3f2', borderRadius: 4, gap: 2 }}>
                        <Box display='flex' flexDirection='row' alignItems='center' gap={2} >
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000", color: '#fff', borderRadius: '2rem', width: '40px', height: '40px' }}>
                                <RuleIcon fontSize="extraSmall" />
                            </Box>
                            <Typography variant='h6' className='headerTextStyle'>
                                Requests
                            </Typography>

                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography className='bodyTextStyle'>
                                No Requests Created Yet
                            </Typography>
                            <Typography variant='body2' color='textSecondary' mt={2} className='bodyTextStyle'>
                                Create a new request to get started
                            </Typography>
                            <Button
                                variant="contained"
                                className='lightOrangeButton'
                                // sx={{ mt: 2, px: 2, py: 1, fontSize: '0.8rem', backgroundColor: '#a4c2ef', color: '#000', borderRadius: '2rem' }}
                                onClick={handleCreateRequest}
                            >
                                Create Request
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </>

    )
}

export default StoreDashboard