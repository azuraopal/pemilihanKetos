import { Table2, Users, CheckCircle, XCircle } from "lucide-react"
import Card from "@/components/Card"

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 uppercase">
        <span className="text-base text-gray-900/70 font-semibold block">Selamat Datang di</span>
        Sistem Informasi EV-Ketos
      </h1>

      <div className="grid grid-cols-4 gap-4 mt-8">
        <Card icon={Table2} count="1000" text="Jumlah Pemilih" color="blue" />
        <Card icon={CheckCircle} count="900" text="Sudah Memilih" color="green" />
        <Card icon={XCircle} count="100" text="Belum Memilih" color="red" />
        <Card icon={Users} count="3" text="Kandidat" color="orange" />
      </div>
    </>
  )
}

export default Home;
