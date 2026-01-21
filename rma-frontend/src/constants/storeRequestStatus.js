export const STORE_REQUEST_STATUS = {
    CREATED: {
        label: "Request Created",
        color: "default",
        description: "Your request has been created successfully"
    },
    RETURN_ACCEPTED: {
        label: "Return Accepted",
        color: "info",
        description: "Your return request has been accepted"
    },
    RETURN_REJECTED: {
        label: "Return Rejected",
        color: "error",
        description: "Your return request has been rejected"
    },
    RETURN_SHIPPED: {
        label: "Return Shipped",
        color: "warning",
        description: "Your return request has been shipped"
    },
    RETURN_ITEMS_DELIVERED: {
        label: "Return Items Delivered",
        color: "success",
        description: "Your return request has been delivered"
    }
}

export default STORE_REQUEST_STATUS;