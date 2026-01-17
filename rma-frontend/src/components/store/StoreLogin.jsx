import { Typography, Box, TextField, Button, Stack, Snackbar, Alert } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inputStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '1rem',
        backgroundColor: '#fff',
        height: 42,
        fontSize: 14,
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

function StoreLogin() {

    const [formData, setFormData] = useState({ pocEmail: "", pocPassword: "" })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData((prev) => ({
            ...prev, [name]: value
        }))

        setErrors((prev) => ({
            ...prev, [name]: ""
        }))


    }

    const showSnackbar = (message, severity) => {
        setSnackbar({
            open: true,
            message,
            severity
        })
    }



    const validate = () => {
        const newErrors = {}

        if (!formData.pocEmail.includes("@")) {
            newErrors.pocEmail = "Invalid Email"
        }

        if (formData.pocPassword.length < 8) {
            newErrors.pocPassword = "Password must be at least 8 characters"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!validate()) {
            showSnackbar("Invalid Email or Password", "error")
            return
        }

        setSubmitting(true)

        setTimeout(() => {
            localStorage.setItem("store_token", "dev-store-token")
            showSnackbar('Login Succsfull', 'success')
            navigate("/store/dashboard")
            setSubmitting(false)
            setFormData({
                pocEmail: "",
                pocPassword: ""
            })

        }, 2000)

    }

    return (
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
                maxWidth: '500px',
                mx: 'auto',
            }}>

            <Typography
                variant="subtitle1"
                fontWeight='normal'
                textAlign="left"
                fontSize={14}
                mt={2}
                ml={8}>
                Login to your store account
            </Typography>
            <TextField
                type="email"
                name="pocEmail"
                placeholder="Email Address"
                value={formData.pocEmail}
                onChange={handleChange}
                error={!!errors.pocEmail}
                helperText={errors.pocEmail}
                sx={inputStyle}
            />

            <TextField
                type="password"
                name="pocPassword"
                value={formData.pocPassword}
                onChange={handleChange}
                error={!!errors.pocPassword}
                helperText={errors.pocPassword}
                placeholder="Password"
                sx={inputStyle}
            />

            <Button
                variant='contained'
                sx={{
                    mt: 1,
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
                disabled={isSubmitting}>
                {isSubmitting ? "Logging In..." : "Login"}
            </Button>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={5000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center", }}
            >
                <Alert
                    severity={snackbar.severity}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>

        </Box>
    )
}

export default StoreLogin