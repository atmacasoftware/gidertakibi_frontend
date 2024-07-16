import userImg from "../../../assests/images/2.jpg";
import { RiDashboardFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineMenuOpen } from "react-icons/md";

export function Sidebar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isUserOpen, setisUserOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);

  const location = useLocation();
  const pathName = location.pathname;

  const toogleMenu = () => {
    isOpenMenu === true ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };

  const toogleSubMenu = (name) => {
    if (name === "users") {
      if (isUserOpen == true) {
        setisUserOpen(false);
      } else {
        setisUserOpen(true);
      }
    }

    if (name === "settings") {
      if (isSettingsOpen === true) {
        setIsSettingsOpen(false);
      } else {
        setIsSettingsOpen(true);
      }
    }
  };

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
      <div className="container sidebar-container">
        <div
          className={`sidebar ${isOpenMenu && width > 768 ? "active" : ""} ${
            width < 768 && !isOpenMenu ? "active" : ""
          }`}
        >
          <div className="menu-btn" onClick={toogleMenu}>
            <MdOutlineMenuOpen />
          </div>
          <div className="head">
            <div className="user-img">
              <img src={userImg} alt="User Image" />
            </div>
            <div className="user-details">
              <p className="name">Ahmet Atmaca</p>
            </div>
          </div>
          <div className="nav">
            <div className="menu">
              <ul>
                <li className={pathName == "/dashboard" ? "active" : ""}>
                  <Link to="/dashboard">
                    <RiDashboardFill className="main-icon" />
                    <span className="text">Anasayfa</span>
                  </Link>
                </li>
                <li className={`menu-item ${pathName == "/users" ? "active" : ""}`}>
                  <a href="#" onClick={() => toogleSubMenu("users")}>
                    <HiUsers className="main-icon" />
                    <span className="text">Kullanıcılar</span>

                    {isUserOpen ? (
                      <RiArrowUpSLine className="arrow-icon" />
                    ) : (
                      <RiArrowDownSLine className="arrow-icon" />
                    )}
                  </a>
                  <ul className={`sub-menu ${isUserOpen || pathName == "/users" ? "active" : ""}`}>
                    <li>
                      <Link to="/users" className={`${pathName == "/users" ? "active" : ""}`}>
                        <span className="text">Tüm Kullanıcılar</span>
                      </Link>
                    </li>
                    <li>
                      <a href="">
                        <span className="text">Subscribers</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#" onClick={() => toogleSubMenu("settings")}>
                    <IoSettingsSharp className="main-icon" />
                    <span className="text">Ayarlar</span>
                    {isSettingsOpen ? (
                      <RiArrowUpSLine className="arrow-icon" />
                    ) : (
                      <RiArrowDownSLine className="arrow-icon" />
                    )}
                  </a>
                  <ul className={`sub-menu ${isSettingsOpen ? "active" : ""}`}>
                    <li>
                      <a href="">
                        <span className="text">Tüm Kullanıcılar</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="text">Subscribers</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="">
                    <AiOutlineLogout className="main-icon" />
                    <span className="text">Çıkış Yap</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
