import userImg from "../../../assests/images/2.jpg";
import { RiDashboardFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineMenuOpen } from "react-icons/md";

export function Sidebar({authState, dispatch}) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const [isUserOpen, setisUserOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);

  const location = useLocation();
  const pathName = location.pathname;

  const toogleMenu = () => {
    isOpenMenu === true ? setIsOpenMenu(false) : setIsOpenMenu(true);
  };

  const toogleMenuMobile = () => {
    isOpenMenuMobile === true
      ? setIsOpenMenuMobile(false)
      : setIsOpenMenuMobile(true);
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

  const onClickLogout = () => {
    dispatch({type: 'logout-success'});
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
          className={`sidebar mobile ${
            isOpenMenu && width > 768 ? "active" : ""
          } ${width < 768 && !isOpenMenu ? "active" : ""}
            ${isOpenMenu && width < 420 ? "mobile" : ""}
           ${width < 420 && isOpenMenuMobile ? "mobile_active" : ""}
          `}
        >
          <div
            className="menu-btn"
            onClick={width < 420 ? toogleMenuMobile : toogleMenu}
          >
            <MdOutlineMenuOpen />
          </div>
          <div>
            <Link to="/my-account" className="head">
              <div className="user-img">
              <img src={userImg} alt="User Image" />
            </div>
            <div className="user-details">
              <p className="name">
                {authState.first_name} {authState.last_name}
              </p>
            </div>
            </Link>
          </div>
          <div className="nav">
            <div className="menu">
              <ul>
                <li className={pathName == "/dashboard" ? "active" : ""}>
                  <Link to="/dashboard" className="menu-link">
                    <RiDashboardFill className="main-icon" />
                    <span className="text">Anasayfa</span>
                  </Link>
                </li>
                <li
                  className={`menu-item ${
                    pathName == "/users" ? "active" : ""
                  }`}
                >
                  <a className="menu-link" href="#" onClick={() => toogleSubMenu("users")}>
                    <HiUsers className="main-icon" />
                    <span className="text">Kullanıcılar</span>

                    {isUserOpen ? (
                      <RiArrowUpSLine className="arrow-icon" />
                    ) : (
                      <RiArrowDownSLine className="arrow-icon" />
                    )}
                  </a>
                  <ul
                    className={`sub-menu ${
                      isUserOpen || pathName == "/users" ? "active" : ""
                    }`}
                  >
                    <li>
                      <Link
                        to="/users"
                        className={`${pathName == "/users" ? "active" : ""}`}
                      >
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
                  <a className="menu-link" href="#" onClick={() => toogleSubMenu("settings")}>
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
                  <span className="menu-link" onClick={onClickLogout}>
                    <AiOutlineLogout className="main-icon" />
                    <span className="text">Çıkış Yap</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
