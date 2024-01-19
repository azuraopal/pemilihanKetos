import { Table2, Users, CheckCircle, XCircle } from "lucide-react"
import StatsCard from "@/components/StatsCard"

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold uppercase text-gray-900">
        <span className="block text-base font-semibold text-gray-900/70">Selamat Datang di</span>
        Sistem Informasi EV-Ketos
      </h1>

      <div className="mt-8 grid grid-cols-4 gap-4">
        <StatsCard icon={Table2} count="1000" color="blue">Jumlah Pemilih</StatsCard>
        <StatsCard icon={CheckCircle} count="900" color="green">Sudah Memilih</StatsCard>
        <StatsCard icon={XCircle} count="100" color="red">Belum Memilih</StatsCard>
        <StatsCard icon={Users} count="3" color="orange">Kandidat</StatsCard>
      </div>
    </>
  )
}

export default Home;
