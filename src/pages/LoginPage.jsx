import { useNavigate } from 'react-router-dom'
import Input from '@/components/Input'

function LoginPage() {
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    // Logic buat Login
    return navigate('/')
  }

  return (
    <div className="relative flex h-screen min-w-full items-center justify-center bg-gradient-to-r from-blue-500 from-50% to-white to-50%">
      <div className="absolute left-4">
        <h1 className="text-2xl font-bold text-white">Welcome to EV-Ketos</h1>
        <p className="max-w-md text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, tempora?</p>
      </div>
      <div className="flex w-fit flex-col items-center gap-6 rounded-2xl bg-white p-5 shadow-xl ">
        <div className="flex w-fit flex-col items-center gap-4">
          <h2 className="text-xl uppercase">Sign In</h2>
          <div className="h-[2px] w-1/2 bg-blue-500"></div>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input type="text" name="username" id="username" placeholder="Username" required />
          <Input type="password" name="password" id="password" placeholder="Password" required />
          <button type="submit" className="!mt-6 inline-flex w-full justify-center rounded bg-blue-600 px-3 py-1.5 text-center font-semibold text-white transition duration-100 hover:bg-opacity-85">
            Get Started
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
