import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Checkbox,
    FormControlLabel,
    Divider,
    Paper,
} from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import StoreDashboardHeader from "../../components/store/StoreHeader"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Image from "mui-image";

const inputStyle = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "1rem",
        backgroundColor: "#fff",
        height: 32,
        fontSize: 12,
    },
}

function CreateReturnRequest() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        materialCode: "",
        salesPerson: "",
        reason: "",
        height: "",
        width: "",
        weight: "",
        quantity: "",
        packagingList: [
            { id: crypto.randomUUID(), item: "", qty: "" }
        ],
        images: [],
        hasDigitalDevice: false,
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }))
    }

    const handlePackingChange = (id, field, value) => {
        const updatedList = formData.packagingList.map((row) => row.id === id ? { ...row, [field]: value } : row)

        setFormData((prev) => ({
            ...prev, packagingList: updatedList
        }))
    }

    const addPackingItem = () => {
        setFormData((prev) => ({
            ...prev,
            packagingList: [...prev.packagingList, { id: crypto.randomUUID(), item: "", qty: "" }],
        }))
    }

    const removePackingItem = (id) => {
        setFormData((prev) => ({
            ...prev,
            packagingList: prev.packagingList.filter((row) => row.id !== id),
        }))
    }

    const handleImageChange = (e) => {

        const newFiles = Array.from(e.target.files)

        setFormData((prev) => ({
            ...prev, images: [...prev.images, ...newFiles]
        }))

    }

    const handleRemoveImage = (index) => {

        setFormData((prev) => ({
            ...prev, images: prev.images.filter((_, i) => i !== index)
        }))
    }

    // materialCode: "",
    //     salesPerson: "",
    //     reason: "",
    //     height: "",
    //     width: "",
    //     weight: "",
    //     quantity: "",
    //     packagingList: [
    //         { id: crypto.randomUUID(), item: "", qty: "" }
    //     ],
    //     images: [],
    //     hasDigitalDevice: false,


    const validate = () => {
        const newErrors = {}

        if (!formData.materialCode.trim()) {
            newErrors.materialCode = "Material Code is required"
        }

        if (!formData.salesPerson.trim()) {
            newErrors.reason = "Sales Person name is Required"
        }

        if (!formData.reason.trim()) {
            newErrors.reason = "Return reason is required"
        }

        if (!formData.height) {
            newErrors.height = "Height is required"
        }

        if (!formData.width) {
            newErrors.width = "Width is required"
        }

        if (!formData.weight) {
            newErrors.weight = "Weight is required"
        }

        if (!formData.quantity) {
            newErrors.quantity = "Quantity is required"
        }

        if (formData.packagingList.length === 0) {
            newErrors.packagingList = "At least one packing item is required"
        } else {
            const packingErrors = formData.packagingList.map((item) => {
                const rowErrors = {}

                if (!item.item.trim()) {
                    rowErrors.item = "Item name required"
                }

                if (!item.qty || Number(item.qty) <= 0) {
                    rowErrors.qty = "Qty must be > 0"
                }

                return rowErrors
            })

            const hasPackingErrors = packingErrors.some(
                (row) => Object.keys(row).length > 0
            )

            if (hasPackingErrors) {
                newErrors.packagingList = packingErrors
            }
        }

        if (formData.images.length === 0) {
            newErrors.images = "Atleast one image is required"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validate()) return

        navigate('/store/requests')

        console.log("Return Request Data:", formData)
    }

    return (
        <>
            <StoreDashboardHeader />

            <Box sx={{ px: { xs: 2, sm: 2, md: 4, lg: 6 }, py: 2 }} maxWidth='1440px' mx='auto'>
                <Typography mb={3} textAlign='left' className="headerText" fontWeight={600}>
                    Create Return Request :
                </Typography>

                <Paper
                    elevation={0}
                    sx={{
                        maxWidth: '1440px',
                        mx: "auto",
                        p: 4,
                        borderRadius: "1.5rem",
                        backgroundColor: "#fff",
                    }}
                >
                    {/* Section 1: Product Info */}
                    <Typography mb={1} className="titleText">
                        Product Information :
                    </Typography>

                    <Stack spacing={1}>
                        <TextField
                            name="materialCode"
                            placeholder="Material Code"
                            value={formData.materialCode}
                            onChange={handleChange}
                            fullWidth
                            error={!!errors.materialCode}
                            helperText={errors.materialCode}
                            sx={inputStyle}
                        />

                        <TextField
                            name="salesPerson"
                            placeholder="Sales Person Name"
                            value={formData.salesPerson}
                            onChange={handleChange}
                            fullWidth
                            error={!!errors.salesPerson}
                            helperText={errors.salesPerson}
                            sx={inputStyle}
                        />

                        <TextField
                            name="reason"
                            placeholder="Reason for Return"
                            value={formData.reason}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            error={!!errors.reason}
                            helperText={errors.reason}
                            rows={3}
                            className="bodyText"
                        />
                    </Stack>

                    <Divider sx={{ my: 4 }} />

                    {/* Section 2: Physical Details */}
                    <Typography mb={1} className="titleText">
                        Physical Details :
                    </Typography>

                    <Stack spacing={1} direction="row">
                        <TextField
                            name="height"
                            type="number"
                            placeholder="Height"
                            value={formData.height}
                            onChange={handleChange}
                            fullWidth
                            error={!!errors.height}
                            helperText={errors.height}
                            sx={inputStyle}
                        />
                        <TextField
                            name="width"
                            type="number"
                            placeholder="Width"
                            value={formData.width}
                            onChange={handleChange}
                            fullWidth
                            error={!!errors.width}
                            helperText={errors.width}
                            sx={inputStyle}
                        />
                        <TextField
                            name="weight"
                            type="number"
                            placeholder="Weight"
                            value={formData.weight}
                            onChange={handleChange}
                            fullWidth
                            error={!!errors.weight}
                            helperText={errors.weight}
                            sx={inputStyle}
                        />
                    </Stack>

                    <TextField
                        name="quantity"
                        type="number"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        fullWidth
                        error={!!errors.quantity}
                        helperText={errors.quantity}
                        sx={{ ...inputStyle, mt: 2 }}
                        className="bodyText"
                    />

                    <Divider sx={{ my: 4 }} />

                    <Typography mb={1} className="titleText">
                        Packing Details :
                    </Typography>

                    <Stack spacing={1}>
                        {formData.packagingList.map((row, index) => (
                            <Stack
                                spacing={2}
                                key={row.id}
                                direction="row"
                                alignItems='center'
                            >
                                <TextField
                                    placeholder="Item description"
                                    value={row.item}
                                    onChange={(e) =>
                                        handlePackingChange(row.id, "item", e.target.value)
                                    }
                                    error={!!errors.packagingList?.[index]?.item}
                                    helperText={errors.packagingList?.[index]?.item}
                                    fullWidth
                                    sx={inputStyle}
                                    className="bodyText"
                                />

                                <TextField
                                    placeholder="Qty"
                                    type="number"
                                    value={row.qty}
                                    onChange={(e) =>
                                        handlePackingChange(row.id, "qty", e.target.value)
                                    }
                                    error={!!errors.packagingList?.[index]?.qty}
                                    helperText={errors.packagingList?.[index]?.qty}
                                    sx={{ ...inputStyle, width: 100 }}
                                    className="bodyText"
                                />
                                <Button
                                    onClick={() => removePackingItem(row.id)}
                                    color="error"
                                >
                                    Remove
                                </Button>
                            </Stack>

                        ))}

                        <Button onClick={addPackingItem}>
                            + Add item
                        </Button>
                    </Stack>

                    <Divider sx={{ my: 4 }} />

                    <Stack spacing={2} alignItems="center" variant="outlined" sx={{ p: 2, backgroundColor: "#f3f3f3ff", borderRadius: "1rem" }}>
                        <Typography mb={1} className="titleText">
                            Additional Details :
                        </Typography>

                        <Button fullWidth component="label" sx={{ backgroundColor: "#a4c2ef", color: "#000", borderRadius: "1rem", px: 4 }}>
                            Upload Images
                            <input type="file" multiple hidden accept="image/*" onChange={handleImageChange} />
                        </Button>
                        {errors.images && (
                            <Typography color="error" fontSize={12} mt={1}>
                                {errors.images}
                            </Typography>
                        )}

                        <Stack spacing={2} direction="row" alignItems="center" justifyContent="center" flexWrap="wrap">
                            {formData.images.map((image, index) => (
                                <Box key={index} display='flex' direction="row" alignItems="start" >
                                    <Image
                                        src={URL.createObjectURL(image)}
                                        width={100}
                                        height={100}
                                        objectFit="cover"
                                    />
                                    <HighlightOffIcon width={20} height={20} color="error" onClick={() => handleRemoveImage(index)} cursor="pointer" />
                                </Box>
                            ))}
                        </Stack>
                    </Stack>

                    <FormControlLabel
                        className="bodyText" sx={{ mt: 2 }}
                        control={
                            <Checkbox
                                name="hasDigitalDevice"
                                checked={formData.hasDigitalDevice}
                                onChange={handleChange}
                            />
                        }
                        label="Contains digital screen or electrical device"
                    />

                    <Divider sx={{ my: 4 }} />

                    {/* Section 3: Actions */}
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button
                            variant="outlined"
                            onClick={() => navigate("/store/requests")}
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#eea2e6",
                                color: "#000",
                                borderRadius: "1rem",
                                px: 4,
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#8d8fd5ff",
                                },
                            }}
                            onClick={handleSubmit}
                        >
                            Submit Request
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </>
    )
}

export default CreateReturnRequest
