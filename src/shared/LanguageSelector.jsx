import * as React from "react";
import { useTranslation } from "react-i18next";
import tr from "../assests/images/tr.png";
import en from "../assests/images/en.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiWorld } from "react-icons/bi";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const onSelectLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };

  const [changeCountry, setchangeCountry] = React.useState(null);
  const openCounty = Boolean(changeCountry);
  const countryClick = (event) => {
    setchangeCountry(event.currentTarget);
  };
  const countryClose = () => {
    setchangeCountry(null);
  };

  return (
    <>
      <span
        id="languageSelectBtn"
        className="btn btn-light"
        onClick={countryClick}
      >
        <BiWorld />
      </span>
      <Menu
        anchorEl={changeCountry}
        id="account-menu"
        open={openCounty}
        onClose={countryClose}
        onClick={countryClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={countryClose}>
          <img
            role="button"
            src={tr}
            alt="Turkey"
            width={20}
            height={20}
            onClick={() => onSelectLanguage("tr")}
          ></img>
        </MenuItem>
        <MenuItem onClick={countryClose}>
          <img
            role="button"
            src={en}
            alt="English"
            width={20}
            height={20}
            onClick={() => onSelectLanguage("en")}
          ></img>
        </MenuItem>
      </Menu>
    </>
  );
}
