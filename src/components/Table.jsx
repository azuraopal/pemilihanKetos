const Table = ({ children, className, ...props }) => {
  return (
    <>
      <table className={`min-w-full table-auto border-collapse ${className}`} {...props}>
        {children}
      </table>
    </>
  )
}

const TableHead = ({ children }) => {
  return (
    <thead className="bg-gray-100">
      {children}
    </thead>
  )
}

const TableHeading = ({ children }) => {
  return (
    <th className="border-b border-slate-800 p-2 text-left">
      {children}
    </th>
  )
}

const TableBody = ({ children }) => {
  return (
    <tbody className="divide-y divide-slate-800/50">
      {children}
    </tbody>
  )
}

const TableRow = ({ children }) => {
  return (
    <tr>
      {children}
    </tr>
  )
}

const TableItem = ({ children, className }) => {
  return (
    <td className={`px-3 py-2 ${className}`}>
      {children}
    </td>
  )
}

export { Table, TableHead, TableHeading, TableBody, TableRow, TableItem }