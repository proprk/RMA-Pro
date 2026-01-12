import { Box, Stack, Typography, TextField, Button, Divider } from '@mui/material'
import { Image } from 'mui-image'

const inputStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '2rem',
        backgroundColor: '#fff',
        height: 52,
        fontSize: 14,
        '& fieldset': {
            border: 'none',
        },

        '&:hover fieldset': {
            border: 'none',
        },

        '&.Mui-focused fieldset': {
            border: '0.5px solid #000',
        },

        padding: '0 1rem',

        '& input::placeholder': {
            fontWeight: 300,
            color: '#6c6d6d',
            opacity: 1,
        },
    },
}

function StoreRegistration() {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                width: '100%',
                background: 'linear-gradient(to right, #9396e1ff, #ededf5ff )'
            }}
        >
            <Box
                width={{ xs: '0%', md: '50%' }}
                display={{ xs: 'none', md: 'flex' }}
            >
                <Image
                    src="src/assets/images/resistration-page-image.png"
                    alt="Store Registration"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <Box
                width={{ xs: '100%', md: '50%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    sx={{
                        backgroundColor: '#f3f3f3ff',
                        width: '80%',
                        height: '90%',
                        borderRadius: '2rem',
                        px: 6,
                        py: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 3,
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={500}
                        textAlign="center"
                    >
                        Store Registration
                    </Typography>

                    <Divider />

                    {/* Store Details */}
                    <Typography
                        variant="subtitle1"
                        fontWeight='light'
                        textAlign="left"
                        fontSize={14}
                        mt={2}
                        mb={-2}
                        ml={4}
                    >
                        Store Details :
                    </Typography>
                    <Stack spacing={2}>
                        <TextField
                            placeholder="Store Name"
                            fullWidth
                            sx={inputStyle}
                        />
                        <TextField
                            placeholder="Store Code with Luxottica"
                            fullWidth
                            sx={inputStyle}
                        />
                        <TextField
                            placeholder="Store Location"
                            fullWidth
                            sx={inputStyle}
                        />
                    </Stack>

                    {/* Point of Contact */}
                    <Typography
                        variant="subtitle1"
                        fontWeight='light'
                        textAlign="left"
                        fontSize={14}
                        mt={2}
                        mb={-2}
                        ml={4}
                    >
                        Point of Contact :
                    </Typography>

                    <Stack spacing={2} fontSize={14}>
                        <TextField
                            placeholder="Representative Name"
                            fullWidth
                            sx={inputStyle}
                        />
                        <TextField
                            placeholder="Phone Number"
                            type="tel"
                            fullWidth
                            sx={inputStyle}
                        />
                        <TextField
                            placeholder="Email Address"
                            type="email"
                            fullWidth
                            sx={inputStyle}
                        />
                    </Stack>

                    {/* Password */}
                    <TextField
                        placeholder="Create Password"
                        type="password"
                        fullWidth
                        sx={inputStyle}
                    />

                    {/* CTA */}
                    <Button
                        sx={{
                            mt: 2,
                            backgroundColor: '#abadf4',
                            color: '#000',
                            borderRadius: '4rem',
                            py: 1.4,
                            fontWeight: 500,
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#8d8fd5ff',
                            },
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>


        </Box>
    )
}

export default StoreRegistration
