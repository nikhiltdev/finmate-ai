import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import AsideNav from "../../components/AsideNav"

function DashboardLayout(){
    return(
       <div className="flex h-screen  grid grid-cols-[1.5fr_8.5fr]">
            <div className="p-2">
                <AsideNav/>
            </div>
            <div className=" p-2">
                <div className="h-screen">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout