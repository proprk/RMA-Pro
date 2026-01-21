import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Stack, Button, Paper, Divider } from '@mui/material'
import Image from 'mui-image'
import StoreHeader from '../../components/store/StoreHeader'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RequestStatusBadge from '../../components/store/RequestStatusBadge'
import STORE_REQUEST_STATUS from '../../constants/storeRequestStatus';

const MOCK_REQUEST = {
    id: "RMA-1002",
    materialCode: "MAT-77231",
    quantity: 1,
    salesPerson: "John Doe",
    reason: "Frame alignment issue",
    createdAt: "2026-01-10",
    status: "RETURN_ACCEPTED",
    packingList: [
        { item: "Main Frame", qty: 1 },
        { item: "Invoice Copy", qty: 1 },
    ],
    images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
    ],
}

function StoreRequestDetails() {
    const { requestId } = useParams();

    const navigate = useNavigate()

    const request = MOCK_REQUEST

    const statusInfo = STORE_REQUEST_STATUS[request.status]

    return (
        <>
            <StoreHeader />
            <Box sx={{ px: { xs: 2, sm: 2, md: 4, lg: 6 }, py: 2 }} maxWidth='1440px' mx='auto'>
                <Stack direction='row' spacing={2} alignItems='center' justifyContent='space-between' width='100%'>
                    <Typography variant='h5' className='headerTextStyle'>
                        Store Request Details
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{ height: '40px', borderRadius: '2rem', px: 4, py: 2, backgroundColor: '#a4c2ef', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        onClick={() => navigate('/store/requests')}
                    >
                        <ChevronLeftIcon />Back to Requests
                    </Button>
                </Stack>
                <Paper sx={{ width: '100%', maxWidth: '100%', height: '100%', maxHeight: '100%', minHeight: '100%', borderRadius: '1rem', p: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }, overflowY: 'auto', gap: 2 }}>
                    {/* Header */}
                    <Stack direction='row' justifyContent='space-between' alignItems='center' mb={3}>
                        <Typography variant='body1' className='titleTextStyle'><strong>Request ID:</strong> {request.id}</Typography>
                        <RequestStatusBadge status={request.status} />
                    </Stack>

                    <Divider sx={{ mb: 3 }} />

                    <Stack direction='column' spacing={2} mb={3}>
                        <Typography variant='body1' className='bodyTextStyle'><strong>Material Code:</strong> {request.materialCode}</Typography>
                        <Typography variant='body1' className='bodyTextStyle'><strong>Quantity:</strong> {request.quantity}</Typography>
                        <Typography variant='body1' className='bodyTextStyle'><strong>Sales Person:</strong> {request.salesPerson}</Typography>
                        <Typography variant='body1' className='bodyTextStyle'><strong>Reason:</strong> {request.reason}</Typography>
                        <Typography variant='body1' className='bodyTextStyle'><strong>Created At:</strong> {request.createdAt}</Typography>
                    </Stack>

                    <Divider sx={{ mb: 3 }} />

                    {/* Packing List */}
                    <Typography variant='h6' mb={1} className='titleTextStyle'>
                        Packing Lists :
                    </Typography>
                    <Stack direction='column' spacing={2} mb={3}>
                        {request.packingList.map((item, index) => (
                            <Stack direction='row' spacing={2}>
                                <Typography variant='body1' className='bodyTextStyle'><strong>Item Name:</strong> {item.item}</Typography>
                                <Typography variant='body1' className='bodyTextStyle'><strong>Quantity:</strong> {item.qty}</Typography>
                            </Stack>
                        ))}
                        <Typography className='bodyTextStyle'>
                            <strong>Total Numbers Packing Items :</strong> {request.packingList.length}
                        </Typography>
                    </Stack>

                    {/* Item Images */}
                    <Divider sx={{ mb: 3 }} />

                    <Typography variant='h6' mb={1} className='titleTextStyle'>Item Images :</Typography>

                    <Stack spacing={2} flexWrap='wrap' flexDirection='row' justifyContent='center' alignItems='center' gap={2} p={2} backgroundColor='#f0f3f2' borderRadius='1rem' mb={3}>
                        {request.images.map((image, index) => (
                            <Box key={index} >
                                <Image src={image} alt='item-image' />
                            </Box>
                        ))}

                        {request.images.length === 0 && (
                            <Typography className='bodyTextStyle'>No images available</Typography>
                        )}
                    </Stack>

                    {/* Status Info */}

                    <Divider sx={{ mb: 3 }} />

                    <Typography variant='h6' mb={1} className='titleTextStyle'>Status Info:</Typography>
                    <Stack direction='column' spacing={2}>
                        <Typography className='bodyTextStyle'>
                            <strong>Current Status :</strong> {statusInfo?.label || 'Unknown Status'}
                        </Typography>
                        <Typography className='bodyTextStyle'>
                            <strong>Status Details :</strong> {statusInfo?.description || "Your request is being currently processed"}
                        </Typography>
                    </Stack>

                </Paper>
            </Box>
        </>
    )
}

export default StoreRequestDetails