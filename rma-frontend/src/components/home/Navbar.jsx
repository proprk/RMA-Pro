import { Box, Link } from '@mui/material';
import { Image } from 'mui-image'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ReloopLogo from '/src/assets/images/Reloop-logo.png'

function Navbar() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', maxWidth: '1280px', mx: 'auto', fontWeight: 'light', mt: 2, px: 2, backgroundColor: "transparent" }}>
                <Box sx={{ width: '200px', height: 'auto', objectFit: 'cover' }}>
                    <Image src={ReloopLogo} alt="logo" />
                </Box>
                <Link href="/store/signup" component={Link} sx={{ fontWeight: 'light', width: '150px', height: '30px', borderRadius: '2rem', backgroundColor: '#eda3b7', color: '#000', textTransform: 'none', textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>Get Started <NorthEastIcon sx={{ ml: 1, fontSize: 14 }} /> </Link>
            </Box>
        </>
    )
}

export default Navbar