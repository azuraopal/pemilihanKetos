import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from '@/components/Dropdown'

function NavBar() {
  const navigate = useNavigate()

  function handleLogout() {
    // Logic buat Logout
    return navigate('/login')
  }

  return (
    <>
      <div className="flex min-w-full items-center justify-between bg-slate-800 px-4 py-1">
        <h2 className="text-xl font-bold text-white">EV - Ketos</h2>
        <Dropdown>
          <DropdownButton>Admin</DropdownButton>
          <DropdownContent>
            <DropdownItem onClick={handleLogout} icon={LogOut}>
              Logout
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    </>
  )
}

export default NavBar
