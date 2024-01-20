import {
  Table,
  TableBody,
  TableHead,
  TableHeading,
  TableItem,
  TableRow,
} from '@/components/Table'

function DataKandidat() {
  // Data sample buat mimik kaya API return data (ganti ini make request ke RestAPI).
  const dataKandidat = [
    {
      id: 1,
      foto: 'https://placehold.co/400',
      nama: 'Amar Ambatukam',
      kelas: '11 PPLG 2',
      visi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores explicabo doloremque amet, fugit perferendis? Dignissimos sequi laudantium praesentium dolorem!',
      misi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores explicabo doloremque amet, fugit perferendis? Dignissimos sequi laudantium praesentium dolorem!',
      suara: 900,
    },
    {
      id: 2,
      foto: 'https://placehold.co/400',
      nama: 'Amar Ambatukam',
      kelas: '11 PPLG 2',
      visi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores explicabo doloremque amet, fugit perferendis? Dignissimos sequi laudantium praesentium dolorem!',
      misi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores explicabo doloremque amet, fugit perferendis? Dignissimos sequi laudantium praesentium dolorem!',
      suara: 900,
    },
    {
      id: 3,
      foto: 'https://placehold.co/400',
      nama: 'Amar Ambatukam',
      kelas: '11 PPLG 2',
      visi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores explicabo doloremque amet, fugit perferendis? Dignissimos sequi laudantium praesentium dolorem!',
      misi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores explicabo doloremque amet, fugit perferendis? Dignissimos sequi laudantium praesentium dolorem!',
      suara: 900,
    },
  ]

  return (
    <>
      <h1 className="text-4xl font-bold uppercase text-gray-900">
        <span className="block text-base font-semibold text-gray-900/70">Sistem Informasi EV-Ketos</span>
        Data Kandidat
      </h1>

      <Table className="mt-8">
        <TableHead>
          <TableHeading>No.</TableHeading>
          <TableHeading>Foto</TableHeading>
          <TableHeading>Nama</TableHeading>
          <TableHeading>Kelas</TableHeading>
          <TableHeading>Visi & Misi</TableHeading>
          <TableHeading>Perolehan Suara</TableHeading>
        </TableHead>
        <TableBody>
          {dataKandidat.map((kandidat, index) => (
            <TableRow key={kandidat.id}>
              <TableItem className="align-top">{index + 1}</TableItem>
              <TableItem className="align-top"><img src={kandidat.foto} alt="" /></TableItem>
              <TableItem className="align-top">{kandidat.nama}</TableItem>
              <TableItem className="whitespace-nowrap align-top">{kandidat.kelas}</TableItem>
              <TableItem className="space-y-3 align-top">
                <div className="space-y-1">
                  <h3>Visi:</h3>
                  <p className="text-pretty">{kandidat.visi}</p>
                </div>
                <div className="space-y-1">
                  <h3>Misi:</h3>
                  <p className="text-pretty">{kandidat.misi}</p>
                </div>
              </TableItem>
              <TableItem className="align-top">900</TableItem>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default DataKandidat
