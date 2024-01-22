import DaftarSiswa from '@/pages/DaftarSiswa'
import Dashboard from '@/pages/Dashboard'
import DataKandidat from '@/pages/DataKandidat'
import LoginPage from "@/pages/LoginPage"
import TambahDataSiswa from '@/pages/TambahDataSiswa'
import { Route, Routes } from 'react-router-dom'

import Layout from '@/layouts/index'

function App() {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Layout><Dashboard /></Layout>} />

        {/* Auth pages */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Page */}
        <Route path="/data-kandidat" element={<Layout><DataKandidat /></Layout>} />
        <Route path="/daftar-siswa" element={<Layout><DaftarSiswa /></Layout>} />
        <Route path="/tambah-siswa" element={<Layout><TambahDataSiswa /></Layout>} />
      </Routes>
    </>
  )
}

export default App
