import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Artikel from './pages/BeritaDetail'
import ScanTrash from './pages/ScanTrash'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import SellTrash from './pages/SellTrash'

const App = () => {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita" element={<Artikel />} />
          <Route path="/scanTrash" element={<ScanTrash />} />
          <Route path="/sellTrash" element={<SellTrash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
    </div>
  )
}

export default App
