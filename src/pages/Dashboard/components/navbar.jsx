import { useEffect, useState } from "react";
import "./style.css";

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
      <div className={`header ${width < 768 ? "active" : ""}`}>
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
            
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
