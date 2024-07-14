import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import { Dashboard } from "../pages/Dashboard"
import { Users } from "../pages/Dashboard/pages/users"

export default createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/login",
                index: true,
                Component: Login
            },
            {
                path: "/signup",
                index: true,
                Component: SignUp
            },
            {
                path: "/dashboard",
                index: true,
                Component: Dashboard
            },
            {
                path: "/kullanicilar",
                index: true,
                Component: Users
            },
        ]
    }
])