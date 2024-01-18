import { Link } from "react-router-dom"

const RouterButton = ({ children, icon: Icon, ...props }) => {
  return (
    <Link
      className="flex items-center gap-3 text-gray-900 font-semibold bg-slate-400 hover:bg-slate-500 transition duration-100 rounded-sm py-2 px-4"
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </Link>
  )
}

export default RouterButton
