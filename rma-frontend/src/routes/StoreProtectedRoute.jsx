import { Navigate } from "react-router-dom"

function StoreProtectedRoute({ children }) {

    const token = localStorage.getItem("store_token")

    if (!token) {
        return <Navigate to="/store/login" />
    }

    return children
}

export default StoreProtectedRoute