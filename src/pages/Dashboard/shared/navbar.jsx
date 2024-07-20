import { useEffect, useState } from "react";
import "../components/style.css";
import { NavbarSearch } from "../components/NavbarSearch";
import { FaRegLightbulb } from "react-icons/fa";

export function Navbar() {
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
    <>
      <div className={`header ${width < 768 ? "active" : ""} ${width < 420 ? "mobile_active" : ""}`}>
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <NavbarSearch />
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                <li className="nav-item">
                  <span className="nav-link active " aria-current="page" href="#">
                    <FaRegLightbulb />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
