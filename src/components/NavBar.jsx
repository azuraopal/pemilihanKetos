import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from "@/components/Dropdown"
import { LogOut } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="flex min-w-full items-center justify-between bg-slate-800 px-4 py-1">
        <h2 className="text-xl font-bold text-white">EV - Ketos</h2>
        <Dropdown>
          <DropdownButton>Admin</DropdownButton>
          <DropdownContent>
            <DropdownItem icon={LogOut} to="/logout">
              Logout
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    </>
  )
}

export default NavBar
