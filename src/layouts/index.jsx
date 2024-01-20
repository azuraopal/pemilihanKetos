import Sidebar from '@/components/Sidebar'
import NavBar from '@/components/NavBar'

function Layout({ children }) {
  return (
    <>
      <div className="flex h-screen flex-col">
        <NavBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto px-8 py-16">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
