import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"

function DashboardLayout(){
    return(
        <div className="flex h-screen  grid grid-cols-[1.5fr_8.5fr]">
            <div className="p-2">
                sidebar
            </div>
            <div className=" p-2">
                <div className="h-15 bg-amber-500">
                    <Navbar/>
                </div>
                <div className="h-screen bg-amber-100">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout