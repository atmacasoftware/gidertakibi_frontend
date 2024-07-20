import { Navbar } from "./shared/navbar";
import { Sidebar } from "./shared/sidebar";
import { useEffect, useState } from "react";
import "./components/style.css";
import { PageHeader } from "./shared/PageHeader";

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
      <div className={`main-content ${width < 768 ? "active" : ""} ${width < 420 ? "mobile_active" : ""}`}>
        <div className="container-fluid">
          <PageHeader title="Anasayfa"/>
        </div>
      </div>
    </div>
  );
}
