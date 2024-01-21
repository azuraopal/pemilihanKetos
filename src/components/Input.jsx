function Input({ ...props }) {
  return (
    <input
      className="block w-full rounded-md border-0 px-3 py-1.5 text-sm text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
      {...props}
    />
  )
}

export default Input
