function Table({ children, className, ...props }) {
  return (
    <>
      <table className={`min-w-full table-auto border-collapse ${className}`} {...props}>
        {children}
      </table>
    </>
  )
}

function TableHead({ children }) {
  return (
    <thead className="bg-gray-100">
      <tr>
        {children}
      </tr>
    </thead>
  )
}

function TableHeading({ children }) {
  return (
    <th className="border-b border-slate-800 p-2 text-left">
      {children}
    </th>
  )
}

function TableBody({ children }) {
  return (
    <tbody className="divide-y divide-slate-800/50">
      {children}
    </tbody>
  )
}

function TableRow({ children }) {
  return (
    <tr>
      {children}
    </tr>
  )
}

function TableItem({ children, className }) {
  return (
    <td className={`px-3 py-2 ${className}`}>
      {children}
    </td>
  )
}

export { Table, TableHead, TableHeading, TableBody, TableRow, TableItem }
