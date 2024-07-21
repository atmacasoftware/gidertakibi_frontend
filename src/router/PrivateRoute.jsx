import { Navigate, useLocation } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../shared/state/contex";

const PrivateRoute = ({ children }) => {
  const authState = useAuthState();
  const dispatch = useAuthDispatch();

  const location = useLocation();

  if (authState?.email) {
        if (location.pathname === "/login") {
            return <Navigate to="/dashboard" replace />;
        }
        return children;
    }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;