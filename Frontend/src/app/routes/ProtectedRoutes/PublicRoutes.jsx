import { useSelector } from "react-redux";
import { Outlet , Navigate } from "react-router-dom";
import Loading from "../../../shared/components/Loading";

function PublicRoutes(){
  const { user , isLoading } = useSelector((state) => state.auth);

  if(isLoading){
    return <div><Loading/></div>
  }
  if(user){
    return <Navigate to="/dashboard" replace />
  }
  return <Outlet />
}

export default PublicRoutes;