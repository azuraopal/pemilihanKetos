import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 py-16 px-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
  
export default Layout;
