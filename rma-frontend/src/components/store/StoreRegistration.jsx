import { Box, Stack, Typography, TextField, Button, Divider } from '@mui/material'
import { Image } from 'mui-image'
import StoreSignupImage from '/src/assets/images/registration-page-image.png'
import { useState } from 'react'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const inputStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '1rem',
        backgroundColor: '#fff',
        height: 42,
        fontSize: 12,
        '& fieldset': {
            border: '0.5px solid #4a4a4aff',
        },

        '&.Mui-focused fieldset': {
            border: '1px solid #000',
        },

        padding: '0 0.5rem',

        '& input::placeholder': {
            fontWeight: 300,
            color: '#6c6d6d',
            opacity: 1,
        },
    },
}

function StoreRegistration() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        storeName: "",
        storeCode: "",
        storeAddress: "",
        storeCity: "",
        storeState: "",
        storeZip: "",
        pocName: "",
        pocPhone: "",
        pocEmail: "",
        pocPassword: "",
        pocConfirmPassword: "",

    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, SetSubmitting] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData((prev) => ({ ...prev, [name]: value }))

        setErrors((prev) => ({
            ...prev, [name]: ""
        }))
    }

    const validate = () => {
        const newErrors = {}

        const phoneRegex = /^\+1\d{10}$/
        const zipRegex = /^\d{5}$/

        if (!formData.storeName.trim()) {
            newErrors.storeName = "Store name is Required"
        }

        if (!formData.storeCode.trim()) {
            newErrors.storeCode = "Store Code is required"
        }

        if (!formData.storeAddress.trim()) {
            newErrors.storeAddress = "Address is required"
        }

        if (!formData.storeCity.trim()) {
            newErrors.storeCity = "City is required"
        }

        if (!formData.storeState.trim()) {
            newErrors.storeState = "State is required"
        }

        if (!zipRegex.test(formData.storeZip)) {
            newErrors.storeZip = "Invalid Zip Code"
        }

        if (!formData.pocName.trim()) {
            newErrors.pocName = "POC Name is required"
        }

        if (!phoneRegex.test(formData.pocPhone)) {
            newErrors.pocPhone = "US phone required (e.g. +14155552671)"
        }

        if (!formData.pocEmail.includes("@")) {
            newErrors.pocEmail = "Invalid Email"
        }

        if (formData.pocPassword !== formData.pocConfirmPassword) {
            newErrors.pocConfirmPassword = "Passwords do not match"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0

    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!validate()) return

        SetSubmitting(true);

        const payload = {
            store_name: formData.storeName,
            store_code: formData.storeCode,
            address: formData.storeAddress,
            // storeCity: formData.storeCity,
            // storeState: formData.storeState,
            // storeZip: formData.storeZip,
            point_of_contact: formData.pocName,
            name: formData.pocName,
            phone: formData.pocPhone,
            email: formData.pocEmail,
            password: formData.pocPassword,
        }

        setTimeout(() => {
            const fakeResponse = {
                token: "dev-store-token"
            }

            localStorage.setItem("store_token", fakeResponse.token)

            navigate("/login")

        }, 2000)

        console.log("Store Registered Successfully :", fakeResponse.token)

        //     try {
        //         const response = await fetch("http://srv1261103.hstgr.cloud/api/stores/register", {
        //             method: 'POST',
        //             headers: {
        //                 "Content-Type": 'application/json'
        //             },
        //             body: JSON.stringify(payload)
        //         })

        //         const data = await response.json()

        //         if (!response.ok) {
        //             throw new Error(data.message)
        //         }

        //         console.log("Store Registered Successfully :", data)

        //         setFormData({
        //             storeName: "",
        //             storeCode: "",
        //             storeAddress: "",
        //             storeCity: "",
        //             storeState: "",
        //             storeZip: "",
        //             pocName: "",
        //             pocPhone: "",
        //             pocEmail: "",
        //             pocPassword: "",
        //             pocConfirmPassword: "",
        //         })

        //     } catch (error) {
        //         console.log("Registration Error :", error.message)
        //     } finally {
        //         SetSubmitting(false);
        //     }

    }

    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                width: '100%',
                background: 'linear-gradient(to right, #dbdbe8ff, #ffffffff )'
            }}
        >
            <Box
                width={{ xs: '0%', md: '50%' }}
                display={{ xs: 'none', md: 'flex' }}
            >
                <Image
                    src={StoreSignupImage}
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
                        width: '100%',
                        height: '90%',
                        borderRadius: '2rem',
                        px: 6,
                        py: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 1,
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
                        fontWeight='normal'
                        textAlign="left"
                        fontSize={14}
                        mt={2}
                        ml={8}
                    >
                        Store Details :
                    </Typography>
                    <Stack spacing={1} sx={{ maxWidth: '500px', width: '100%', mx: 'auto' }}>
                        <TextField
                            placeholder="Store Name"
                            name="storeName"
                            value={formData.storeName}
                            error={!!errors.storeName}
                            helperText={errors.storeName}
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            placeholder="Store Code with Luxottica"
                            name="storeCode"
                            value={formData.storeCode}
                            error={!!errors.storeCode}
                            helperText={errors.StoreCode}
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            placeholder="Store Address"
                            name="storeAddress"
                            value={formData.storeAddress}
                            error={!!errors.storeAddress}
                            helperText={errors.storeAddress}
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />

                        <TextField
                            placeholder="Store City"
                            name="storeCity"
                            value={formData.storeCity}
                            error={!!errors.storeCity}
                            helperText={errors.storeCity}
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />

                        <Stack spacing={2} direction='row' sx={{ maxWidth: '500px', width: '100%', mx: 'auto' }}>
                            <TextField
                                placeholder="Sate"
                                name="storeState"
                                value={formData.storeState}
                                error={!!errors.storeState}
                                helperText={errors.storeState}
                                fullWidth
                                sx={inputStyle}
                                onChange={handleChange}
                            />
                            <TextField
                                placeholder="Zip Code"
                                name="storeZip"
                                value={formData.storeZip}
                                error={!!errors.storeZip}
                                helperText={errors.storeZip}
                                fullWidth
                                sx={inputStyle}
                                onChange={handleChange}
                            />
                        </Stack>
                    </Stack>

                    {/* Point of Contact */}
                    <Typography
                        variant="subtitle1"
                        fontWeight='normal'
                        textAlign="left"
                        fontSize={14}
                        mt={2}
                        ml={8}

                    >
                        Point of Contact :
                    </Typography>

                    <Stack spacing={1} fontSize={14} sx={{ maxWidth: '500px', width: '100%', mx: 'auto' }}>
                        <TextField
                            placeholder="Representative Name"
                            name="pocName"
                            value={formData.pocName}
                            error={!!errors.pocName}
                            helperText={errors.pocName}
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            placeholder="Phone Number"
                            name="pocPhone"
                            value={formData.pocPhone}
                            error={!!errors.pocPhone}
                            helperText={errors.pocPhone}
                            type="tel"
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            placeholder="Email Address"
                            name="pocEmail"
                            value={formData.pocEmail}
                            error={!!errors.pocEmail}
                            helperText={errors.pocEmail}
                            type="email"
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            placeholder="Create Password"
                            name="pocPassword"
                            value={formData.pocPassword}
                            error={!!errors.pocPassword}
                            helperText={errors.pocPassword}
                            type="password"
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />
                        <TextField
                            placeholder="Confirm Password"
                            type="password"
                            name="pocConfirmPassword"
                            value={formData.pocConfirmPassword}
                            error={!!errors.pocConfirmPassword}
                            helperText={errors.pocConfirmPassword}
                            fullWidth
                            sx={inputStyle}
                            onChange={handleChange}
                        />
                    </Stack>

                    {/* CTA */}
                    <Button
                        sx={{
                            mt: 3,
                            backgroundColor: '#eea2e6',
                            color: '#000',
                            borderRadius: '1rem',
                            py: 1.4,
                            fontWeight: 500,
                            textTransform: 'none',
                            maxWidth: '500px',
                            width: '100%',
                            mx: 'auto',
                            '&:hover': {
                                backgroundColor: '#8d8fd5ff',
                            },
                        }}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Please wait..." : "Sign Up"}
                    </Button>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'light', mt: 1, fontSize: 12 }}>
                        Already have an account with us? Please {' '} <Link href="/store/login" sx={{ fontWeight: 'bold', color: '#eea2e6', textDecoration: 'underline' }} >Login</Link>
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default StoreRegistration