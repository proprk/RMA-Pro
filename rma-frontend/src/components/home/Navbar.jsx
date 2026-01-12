import { Box, Button } from '@mui/material';
import { Image } from 'mui-image'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ReloopLogo from '/src/assets/images/Reloop-logo.png'

function Navbar() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', maxWidth: '1280px', mx: 'auto', fontWeight: 'light', mt: 2, px: 2 }}>
                <Box sx={{ width: '200px', height: 'auto', objectFit: 'cover' }}>
                    <Image src={ReloopLogo} alt="logo" />
                </Box>
                <Button sx={{ fontWeight: 'light', width: '150px', height: '30px', borderRadius: '2rem', backgroundColor: '#eda3b7', color: '#000', textTransform: 'none' }}>Get Started <NorthEastIcon sx={{ ml: 1, fontSize: 14 }} /> </Button>
            </Box>
        </>
    )
}

export default Navbar