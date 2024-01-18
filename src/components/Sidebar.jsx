import RouterButton from "@/components/RouterButton"
import LogoOSIS from "@/assets/Logo_OSIS.png"

import { Gauge, Users, SquarePen, Contact } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="w-[280px]">
      <div className="flex flex-col items-center gap-16 min-h-full bg-slate-800 py-3 px-4">
        <div className="w-48 h-auto rounded-md p-4 bg-slate-200">
          <img className="h-full w-full" src={LogoOSIS} alt="Logo OSIS" />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <RouterButton to="/" icon={Gauge}>Dashboard</RouterButton>
          <RouterButton to="/data-kandidat" icon={Users}>Data Kandidat</RouterButton>
          <RouterButton to="/daftar-siswa" icon={Contact}>Daftar Siswa</RouterButton>
          <RouterButton to="/tambah-data-siswa" icon={SquarePen}>Tambah Data Siswa</RouterButton>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
