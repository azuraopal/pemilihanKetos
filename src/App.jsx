import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard"
import DataKandidat from "@/pages/DataKandidat";
import DaftarSiswa from "@/pages/DaftarSiswa";
import TambahDataSiswa from "@/pages/TambahDataSiswa";

import Layout from "@/layouts/index"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/data-kandidat" element={<DataKandidat />} />
          <Route path="/daftar-siswa" element={<DaftarSiswa />} />
          <Route path="/tambah-data-siswa" element={<TambahDataSiswa />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
