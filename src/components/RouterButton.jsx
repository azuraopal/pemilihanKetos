import { Link } from "react-router-dom"

const RouterButton = ({ children, icon: Icon, ...props }) => {
  return (
    <Link
      className="flex items-center gap-3 rounded-sm bg-slate-400 px-4 py-2 font-semibold text-gray-900 transition duration-100 hover:bg-slate-500"
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </Link>
  )
}

export default RouterButton
