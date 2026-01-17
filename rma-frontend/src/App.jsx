import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StoreRegistration from './components/store/StoreRegistration'
import StoreLogin from './components/store/StoreLogin'
import StoreProtectedRoute from './routes/StoreProtectedRoute'
import StoreDashboard from './pages/store/StoreDashboard'
import CreateReturnRequest from './pages/store/CreateStoreRequest'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/signup" element={<StoreRegistration />} />
        <Route path="/store/login" element={<StoreLogin />} />
        <Route path="/store/dashboard" element={
          <StoreProtectedRoute>
            <StoreDashboard />
          </StoreProtectedRoute>
        } />
        <Route path="/store/requests/new" element={
          <StoreProtectedRoute>
            <CreateReturnRequest />
          </StoreProtectedRoute>
        } />
      </Routes>


    </BrowserRouter>
  )
}

export default App