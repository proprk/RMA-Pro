import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import Image from 'mui-image'
import ReloopLogo from '../../assets/images/Reloop-logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom';
import { STORE_NAVIGATION } from '../../constants/storeNavigation';

function StoreHeader() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("store_token")
        navigate("/store/login");
    }
    return (
        <Stack width="100%" display="flex" justifyContent="center" alignItems='center' height='84px' zIndex={1000} position='sticky' top={0} sx={{ backgroundColor: '#f0f3f2' }}>
            <Box sx={{ width: '100%', maxWidth: '1440px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, sm: 2, md: 4, lg: 6 }, py: 2 }}>
                <Image src={ReloopLogo} width={200} height={40} />

                <Stack direction='row' spacing={4} alignItems='center'>
                    {STORE_NAVIGATION.map((nav) => (
                        <NavLink
                            key={nav.path}
                            to={nav.path}
                            end
                            style={({ isActive }) => ({
                                color: '#000',
                                fontWeight: isActive ? 600 : 500,
                                paddingBottom: '8px',
                                cursor: 'pointer',
                                borderBottom: isActive ? '1px solid #000' : 'none',
                            })}
                            className="navTextStyle"
                        >
                            {nav.label}
                        </NavLink>

                    ))}
                </Stack>

                <Button
                    color='#000'
                    fontSize="11px"
                    sx={{ '&:hover': { backgroundColor: '#000', color: '#fff' }, px: 2 }}
                    variant='outlined'
                    size='small'
                    onClick={handleLogout}
                >
                    Logout <LogoutIcon fontSize='11px' sx={{ ml: '10px' }} />
                </Button>
            </Box>
        </Stack >
    )
}

export default StoreHeader;