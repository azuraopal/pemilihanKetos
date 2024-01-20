import { useState } from "react";
import { Link } from "react-router-dom"
import { PenLine, Trash2, UserPlus, X } from "lucide-react"

import InputText from "@/components/InputText"
import {
  Table,
  TableHead,
  TableHeading,
  TableBody,
  TableRow,
  TableItem
} from "@/components/Table"
import {
  Modal,
  ModalHeading,
  ModalContent,
  ModalFooter
} from "@/components/Modal"

const DaftarSiswa = () => {
  const [modalState, setModalState] = useState({
    edit: false,
    delete: false,
  });
  const [selectedSiswa, setSelectedSiswa] = useState(null);

  const handleCloseModal = () => {
    setModalState({ edit: false, delete: false });
    setSelectedSiswa(null);
  };

  const openModal = (siswa, modalType) => {
    setSelectedSiswa(siswa);
    setModalState({ edit: modalType === 'edit', delete: modalType === 'delete' });
  };

  // Data sample buat mimik kaya API return data (ganti ini make request ke RestAPI).
  const dataSiswa = [
    {
      id: 1,
      nama_siswa: "Amar Ambatukam",
      kelas: "11 PPLG 2",
      nis: "1234567890",
      nisn: "1234567890",
      sudah_voting: true,
    },
    {
      id: 2,
      nama_siswa: "Amar Ambatukam",
      kelas: "11 PPLG 2",
      nis: "1234567890",
      nisn: "1234567890",
      sudah_voting: false,
    },
    {
      id: 3,
      nama_siswa: "Amar Ambatukam",
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

        <Link to="/tambah-siswa" className="inline-flex items-center gap-3 rounded bg-gray-400 px-3 py-2 text-sm font-semibold text-gray-900 transition duration-100 hover:bg-opacity-85">
          <UserPlus size={16}/>
          Tambah Siswa
        </Link>
      </div>

      <Table className="mt-8">
        <TableHead>
          {["No.", "Nama", "Kelas", "NIS", "NISN", "Status", "Action"].map((heading) => (
            <TableHeading key={heading}>{heading}</TableHeading>
          ))}
        </TableHead>
        <TableBody>
          {dataSiswa.map((siswa, index) => (
            <TableRow key={siswa.id}>
              <TableItem>{index + 1}</TableItem>
              <TableItem>{siswa.nama_siswa}</TableItem>
              <TableItem>{siswa.kelas}</TableItem>
              <TableItem>{siswa.nis}</TableItem>
              <TableItem>{siswa.nisn}</TableItem>
              <TableItem>
                <p
                  className={`w-fit rounded ${
                    siswa.sudah_voting ? "bg-green-500" : "bg-red-500"
                  } px-2 py-1 text-xs font-semibold`}
                >
                  {siswa.sudah_voting ? "Sudah Voting" : "Belum Voting"}
                </p>
              </TableItem>
              <TableItem className="flex gap-2">
                <PenLine
                  onClick={() => openModal(siswa, 'edit')}
                  className="cursor-pointer rounded bg-blue-500 p-2 transition duration-100 hover:bg-opacity-85"
                  size={32}
                />
                <Trash2
                  onClick={() => openModal(siswa, 'delete')}
                  className="cursor-pointer rounded bg-red-500 p-2 transition duration-100 hover:bg-opacity-85"
                  size={32}
                />
              </TableItem>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* This is fucked up implementation of modal, i can't find any other way to do this without calling the module twice  */}
      <Modal isOpen={modalState.edit || modalState.delete}>
        <ModalHeading className="flex items-center justify-between">
          <h2 className="text-lg font-bold">
            {modalState.edit ? "Edit Data Siswa" : "Hapus Data Siswa"}
          </h2>
          <X onClick={() => handleCloseModal()} className="cursor-pointer" />
        </ModalHeading>

        <ModalContent>
          {modalState.edit ? (
            // Edit Modal Content
            <form action="POST" className="space-y-2">
              {[
                { label: "Nama Siswa", field: "nama_siswa" },
                { label: "Kelas", field: "kelas" },
                { label: "NIS", field: "nis" },
                { label: "NISN", field: "nisn" },
              ].map(({ label, field }) => (
                <div key={field}>
                  <label htmlFor={field} className="mb-1 block text-sm font-medium leading-6 text-gray-900">{label}</label>
                  <InputText
                    type="text"
                    name={field}
                    id={field}
                    value={selectedSiswa ? selectedSiswa[field] : ""}
                    onChange={(e) =>
                      setSelectedSiswa({
                        ...selectedSiswa,
                        [field]: e.target.value,
                      })
                    }
                    placeholder={label}
                    required
                  />
                </div>
              ))}
            </form>
          ) : (
            // Delete Modal Content
            <div>
              <p className="mb-4">Apakah anda yakin ingin menghapus data berikut ini?</p>
              <ul className="bg-gray-200 px-3 py-1.5 border-l-4 border-gray-400">
                {[
                  { label: "ID", field: "id" },
                  { label: "Nama", field: "nama_siswa" },
                  { label: "Kelas", field: "kelas" },
                  { label: "NIS", field: "nis" },
                  { label: "NISN", field: "nisn" },
                ].map(({ label, field }) => (
                  <li key={field}>{`${label}: ${selectedSiswa ? selectedSiswa[field] : ""}`}</li>
                ))}
              </ul>
            </div>
          )}
        </ModalContent>

        <ModalFooter className="item-center flex justify-end gap-2">
          <button onClick={() => handleCloseModal()} className="inline-flex w-fit items-center rounded px-3 py-1.5 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-600 transition duration-100 hover:bg-gray-200">
            Batalkan
          </button>
          {modalState.edit ? (
            <button className="inline-flex w-fit items-center rounded bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition duration-100 hover:bg-opacity-85">
              Simpan
            </button>
          ) : (
            <button className="inline-flex w-fit items-center rounded bg-red-600 px-3 py-1.5 text-sm font-semibold text-white transition duration-100 hover:bg-opacity-85">
              Hapus Data
            </button>
          )}
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DaftarSiswa
