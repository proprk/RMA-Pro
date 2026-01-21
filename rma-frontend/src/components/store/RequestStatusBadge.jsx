import { Chip } from "@mui/material"
import STORE_REQUEST_STATUS from "../../constants/storeRequestStatus"

const RequestStatusBadge = ({ status }) => {

    const statusInfo = STORE_REQUEST_STATUS[status]

    if (!statusInfo) return;

    return (
        <Chip label={statusInfo.label} color={statusInfo.color} size="small" variant="outlined" sx={{ textTransform: 'capitalize', fontWeight: 'normal', fontSize: '11px', borderRadius: '1rem', padding: '4px 8px' }} />
    )
}

export default RequestStatusBadge;