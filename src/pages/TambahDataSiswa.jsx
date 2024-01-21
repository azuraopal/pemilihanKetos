import { Link } from 'react-router-dom'
import Input from '@/components/Input'

function TambahDataSiswa() {
  return (
    <>
      <h1 className="text-4xl font-bold uppercase text-gray-900">
        <span className="block text-base font-semibold text-gray-900/70">Sistem Informasi EV-Ketos</span>
        Tambah Data Siswa
      </h1>

      <form onSubmit="" className="mt-8 flex flex-col gap-2">
        {[
          { label: 'Nama Siswa', field: 'nama_siswa' },
          { label: 'Kelas', field: 'kelas' },
          { label: 'NIS', field: 'nis' },
          { label: 'NISN', field: 'nisn' },
        ].map(({ label, field }) => (
          <div key={field}>
            <label htmlFor={field} className="mb-1 block font-medium leading-6 text-gray-900">{label}</label>
            <Input
              type="text"
              name={field}
              id={field}
              placeholder={label}
              required
            />
          </div>
        ))}
        <div className="flex items-center gap-2 self-end">
          <Link to="/daftar-siswa" className="inline-flex w-fit items-center rounded px-3 py-1.5 text-sm font-semibold text-gray-600 ring-1 ring-inset ring-gray-600 transition duration-100 hover:bg-gray-200">
            Batalkan
          </Link>
          <button type="submit" className="inline-flex w-fit items-center rounded bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition duration-100 hover:bg-opacity-85">
            Simpan
          </button>
        </div>
      </form>
    </>
  )
}

export default TambahDataSiswa
