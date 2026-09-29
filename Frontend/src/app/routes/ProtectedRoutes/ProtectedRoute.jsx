import { Outlet , Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../../shared/components/Loading";
function ProtectedRoute()
{
     const { user , isLoading } = useSelector((state) => state.auth);

    if(isLoading){
        return <div><Loading/></div>
    }

    if(!user){
        return <Navigate to="/" replace />
    }
    return <Outlet/>
}

export default ProtectedRoute