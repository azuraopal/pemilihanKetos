import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard"
import DataKandidat from "@/pages/DataKandidat";
import DaftarSiswa from "@/pages/DaftarSiswa";
import TambahDataSiswa from "@/pages/TambahDataSiswa";

import Layout from "@/layouts/index"

const App = () => {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Layout><Dashboard /></Layout>} />

        {/* Auth pages */}
        <Route path="/login" element={<Dashboard />} />
        <Route path="/logout" element={<Dashboard />} />

        {/* Dashboard Page */}
        <Route path="/data-kandidat" element={<Layout><DataKandidat /></Layout>} />
        <Route path="/daftar-siswa" element={<Layout><DaftarSiswa /></Layout>} />
        <Route path="/tambah-data-siswa" element={<Layout><TambahDataSiswa /></Layout>} />
      </Routes>
    </>
  )
}

export default App
