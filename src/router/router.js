import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import { Panel } from "../pages/Panel";

export default createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/login",
        index: true,
        Component: Login,
      },
      {
        path: "/signup",
        index: true,
        Component: SignUp,
      },
      {
        path: "/dashboard",
        index: true,
        element: (
          <PrivateRoute>
            <Panel></Panel>
          </PrivateRoute>
        ),
      },
      {
        path: "/users",
        index: true,
        element: (
          <PrivateRoute>
            <Panel></Panel>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-account",
        index: true,
        element: (
          <PrivateRoute>
            <Panel></Panel>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
