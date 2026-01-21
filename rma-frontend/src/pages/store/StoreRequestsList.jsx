import {
    Box,
    Typography,
    Paper,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Divider,
    Stack
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import RequestStatusBadge from '../../components/store/RequestStatusBadge'

import StoreHeader from '../../components/store/StoreHeader'

const tableCell = {
    '& .MuiTableCell-root': {
        fontSize: '11px',
        padding: '6px 16px'
    }
}

const MOCK_DATA = [
    {
        id: 'RMA-1001',
        materialCode: 'MAT-19991',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
    {
        id: 'RMA-1002',
        materialCode: 'MAT-19992',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
    {
        id: 'RMA-1003',
        materialCode: 'MAT-19993',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
    {
        id: 'RMA-1004',
        materialCode: 'MAT-19994',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
    {
        id: 'RMA-1005',
        materialCode: 'MAT-19995',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
    {
        id: 'RMA-1006',
        materialCode: 'MAT-19996',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
    {
        id: 'RMA-1007',
        materialCode: 'MAT-19997',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
    {
        id: 'RMA-1008',
        materialCode: 'MAT-19998',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
    {
        id: 'RMA-1009',
        materialCode: 'MAT-19999',
        reason: 'Damaged on tranist',
        quantity: 2,
        createdAt: '2026-01-18',
        status: 'CREATED',
    },
]

function StoreRequestsList() {

    const navigate = useNavigate();

    return (
        <>
            <StoreHeader />
            <Stack spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', p: 2, width: '100%', maxWidth: '1440px', maxHeight: 'calc(100vh - 84px)', minHeight: 'calc(100vh - 100px)', mt: 8, mx: 'auto' }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1440px' }}>
                    <Typography>Return Requests</Typography>
                    <Button onClick={() => navigate('/store/requests/new')}
                        className='blueButton'>
                        Create New Request +
                    </Button>
                </Box>

                <Paper sx={{ p: 2, borderRadius: '1rem', boxShadow: 'none', border: '1px solid #E0E0E0', backgroundColor: 'white', width: '100%', overflow: 'hidden', height: 'calc(100vh - 100px)', overflowY: 'auto', overflowX: 'hidden', maxHeight: 'calc(100vh - 100px)', minHeight: 'calc(100vh - 100px)', maxWidth: '1440px', minWidth: () => window.innerWidth - 200 }}>

                    <Divider />

                    <Table size='small' sx={{
                        ...tableCell
                    }}>
                        <TableHead sx={{ backgroundColor: '#F5F5F5', fontSize: '10px' }}>
                            <TableRow >
                                <TableCell>RMA ID</TableCell>
                                <TableCell>Material Code</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Request Date</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ fontSize: '10px', gap: 1 }}>
                            {MOCK_DATA.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.materialCode}</TableCell>
                                    <TableCell>{row.reason}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell>{row.createdAt}</TableCell>
                                    <TableCell>
                                        <RequestStatusBadge status={row.status} />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                textTransform: 'none',
                                                fontSize: '11px',
                                                fontWeight: 'normal',
                                                borderRadius: '2rem',
                                                padding: '2px 12px',
                                                boxShadow: 'none',
                                                backgroundColor: '#a4c2ef',
                                                color: '#000',
                                                '&:hover': { backgroundColor: '#82aae7ff', color: '#000' },
                                                '&:active': { backgroundColor: '#a4c2ef', color: '#000' }
                                            }}
                                            onClick={() => navigate(`/store/requests/${row.id}`)}>
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {
                                MOCK_DATA.length === 0 && (
                                    <TableRow sx={{ height: '100px', width: '100%' }}>
                                        <TableCell sx={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                            No Data Found
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </Stack >
        </>
    )
}

export default StoreRequestsList