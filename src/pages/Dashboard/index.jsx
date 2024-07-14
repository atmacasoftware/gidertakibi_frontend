import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { useEffect, useState } from "react";
import "./components/style.css";
import { Link } from "react-router-dom";
import { PageHeader } from "./components/PageHeader";

export function Dashboard() {
  const [width, setwidth] = useState(window.innerWidth);
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
      <Sidebar />
      <Navbar />
      <div className={`main-content ${width < 768 ? "active" : ""}`}>
        <div className="container-fluid">
          <PageHeader title="Anasayfa"/>
        </div>
      </div>
    </div>
  );
}