import { Box, Button } from '@mui/material'
import React from 'react'
import Image from 'mui-image'
import ReloopLogo from '../../assets/images/Reloop-logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function StoreHeader() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("store_token")
        navigate("/store/login");
    }
    return (
        <Box sx={{ maxWidth: '1440px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px', px: { xs: 2, sm: 2, md: 4, lg: 6 }, py: 2 }}>
            <Image src={ReloopLogo} width={200} height={40} />
            <Button
                color='#000'
                fontSize="12px"
                sx={{ '&:hover': { backgroundColor: '#000', color: '#fff' }, px: 2 }}
                variant='outlined'
                size='small'
                onClick={handleLogout}
            >
                Logout <LogoutIcon fontSize='12px' sx={{ ml: '10px' }} />
            </Button>
        </Box>

    )
}

export default StoreHeader;