import "./App.css";
import { Outlet } from "react-router-dom";
import { LanguageSelector } from "./shared/LanguageSelector";
import { AuthenticationContext } from "./shared/state/contex";

function App() {
  return (
    <AuthenticationContext>
      <Outlet />
    </AuthenticationContext>
  );
}

export default App;
