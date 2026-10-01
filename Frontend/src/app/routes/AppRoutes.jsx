import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayouts";
import DashboardLayout from "../layouts/DashboardLayouts";
import Login from "../../features/auth/ui/Login";
import Register from "../../features/auth/ui/Register";
import PublicRoutes from "./ProtectedRoutes/PublicRoutes";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import Dashboard from "../../features/dashboard/ui/pages/Dashboard";
import { getUser } from "../../features/auth/states/authAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Chat from "../../features/chat/ui/pages/Chat";
function AppRoutes() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoutes />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Login />
                        },
                        {
                            path: "/register",
                            element: <Register />
                        }
                    ]
                }
            ]
        },
        {
            path: "/dashboard",
            element: <ProtectedRoute />,
            children: [
                {
                    element: <DashboardLayout />,
                    children: [
                         {
                            index : true,
                            element: <Dashboard />
                        },
                        {
                            path: "chat",
                            element: <Chat />
                        },
                        
                    ]
                }
            ]
        }
    ])
    return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes