import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import { Navbar } from "./shared/navbar";
import { Sidebar } from "./shared/sidebar";
import { useLocation } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../../shared/state/contex";
import Users from "./pages/User/users";
import UserEdit from "./pages/UserEdit";

export function Panel() {
  const [width, setwidth] = useState(window.innerWidth);
  const authState = useAuthState();
  const dispatch = useAuthDispatch();
  const location = useLocation();
  const pathName = location.pathname;

  console.log(pathName);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWitdh = window.innerWidth;
      setwidth(newWitdh);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="dashboard-panel">
      <Sidebar authState={authState} dispatch={dispatch} />
      <Navbar />
      <div
        className={`main-content ${width < 768 ? "active" : ""} ${
          width < 420 ? "mobile_active" : ""
        }`}
      >
        <div className="container-fluid">
          {(pathName == "/dashboard" && (
            <Dashboard authState={authState} dispatch={dispatch} />
          )) ||
            (pathName == "/users" && (
              <Users authState={authState} dispatch={dispatch} />
            )) ||
            (pathName == "/my-account" && (
              <UserEdit authState={authState} dispatch={dispatch} />
            ))}
        </div>
      </div>
    </div>
  );
}
