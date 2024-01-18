import { Dropdown, DropdownButton } from "@/components/Dropdown"

const NavBar = () => {
  return (
    <>
      <div className="min-w-full flex justify-between py-3 px-4 bg-slate-800">
        <h2 className="text-2xl text-slate-200 font-bold">EV - Ketos</h2>
        <Dropdown>
          <DropdownButton>Admin</DropdownButton>
        </Dropdown>
      </div>
    </>
  )
}

export default NavBar
