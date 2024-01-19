import { Link } from "react-router-dom"
import { PenLine, Trash2, UserPlus } from "lucide-react";

import {
  Table,
  TableHead,
  TableHeading,
  TableBody,
  TableRow,
  TableItem
} from "@/components/Table";

const DaftarSiswa = () => {
  // Data sample buat mimik kaya API return data (ganti ini make request ke RestAPI).
  const dataSiswa = [
    {
      id: 1,
      nama: "Amar Ambatukam",
      kelas: "11 PPLG 2",
      nis: "1234567890",
      nisn: "1234567890",
      sudah_voting: true,
    },
    {
      id: 2,
      nama: "Amar Ambatukam",
      kelas: "11 PPLG 2",
      nis: "1234567890",
      nisn: "1234567890",
      sudah_voting: false,
    },
    {
      id: 3,
      nama: "Amar Ambatukam",
      kelas: "11 PPLG 2",
      nis: "1234567890",
      nisn: "1234567890",
      sudah_voting: true,
    },
  ]

  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold uppercase text-gray-900">
          <span className="block text-base font-semibold text-gray-900/70">Sistem Informasi EV-Ketos</span>
          Daftar Siswa
        </h1>

        <Link to="/tambah-siswa" className="flex items-center gap-3 rounded bg-gray-400 px-3 py-2 text-sm font-semibold text-gray-900 transition duration-100 hover:bg-gray-500">
          <UserPlus size={16}/>
          Tambah Siswa
        </Link>
      </div>

      <Table className="mt-8">
        <TableHead>
          <TableHeading>No.</TableHeading>
          <TableHeading>Nama</TableHeading>
          <TableHeading>Kelas</TableHeading>
          <TableHeading>NIS</TableHeading>
          <TableHeading>NISN</TableHeading>
          <TableHeading>Status</TableHeading>
          <TableHeading>Action</TableHeading>
        </TableHead>
        <TableBody>
          {dataSiswa.map((siswa, index) => (
            <TableRow key={siswa.id}>
              <TableItem>{index + 1}</TableItem>
              <TableItem>{siswa.nama}</TableItem>
              <TableItem>{siswa.kelas}</TableItem>
              <TableItem>{siswa.nis}</TableItem>
              <TableItem>{siswa.nisn}</TableItem>
              <TableItem>
                {siswa.sudah_voting ? (
                  <p className="w-fit rounded bg-green-400 px-2 py-1 text-xs font-bold">Sudah Voting</p>
                ) : (
                  <p className="w-fit rounded bg-red-400 px-2 py-1 text-xs font-bold">Belum Voting</p>
                )}
              </TableItem>
              <TableItem className="flex gap-2">
                <PenLine className="rounded bg-blue-400 p-2" size={32} />
                <Trash2 className="rounded bg-red-400 p-2" size={32} />
              </TableItem>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default DaftarSiswa
