import { Link, Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div className="h-screen w-screen bg-white grid grid-cols-[15%_85%] p-[2%]">
        <div>
            <h1 className="text-[#52DBB2] text-[30px]">SalmanWap</h1>
            <nav className="flex flex-col gap-4">
                <Link to={"/"}>Home</Link>
                <Link to={"/team"}>Team</Link>
                <Link to={"/calls"}>Calls</Link>
            </nav>
        </div>
        <div>
            <nav className=""></nav>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout