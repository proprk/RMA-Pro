import { Box, Stack, Typography, Divider } from '@mui/material'
import { Image } from 'mui-image'

function Footer() {
    return (
        <>
            <Box sx={{ maxWidth: '1280px', mx: 'auto', mt: 10, padding: 4, display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 6 } }}>
                <Divider />
                <Stack
                    direction='column'
                    alignItems='center'
                    justifyContent='space-between'
                    textAlign={{ xs: 'center', md: 'left' }}
                    fontWeight='light'
                    gap={4}
                >
                    <Image src='src/assets/images/Reloop-logo.png' alt='logo' width='200px' height='auto' />
                    <Typography
                        variant='body2'
                        sx={{
                            fontSize: '1rem',
                            textAlign: 'center',
                            maxWidth: '900px',
                            lineHeight: 1.6,
                            fontWeight: 'light',
                            color: 'text.secondary'
                        }}
                    >
                        A centralized platform for managing the return, inspection, repair, and reuse of retail display structures—supporting operational efficiency and circular economy initiatives.
                    </Typography>
                </Stack>
                <Typography variant='caption' fontWeight='light' textAlign='center' sx={{ color: 'text.disabled', mt: 2 }}>
                    © 2026 Reloop. All rights reserved.
                </Typography>
            </Box>
        </>
    )
}

export default Footer