import "./App.css";
import { Outlet } from "react-router-dom";
import { LanguageSelector } from "./shared/LanguageSelector";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
