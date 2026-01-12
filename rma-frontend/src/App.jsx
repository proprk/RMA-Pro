import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StoreRegistration from './components/store/StoreRegistration'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/register" element={<StoreRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App