import React from "react";
import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import "./login.css";
import logo from "../../assests/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthDispatch } from "../../shared/state/contex";
import { LanguageSelector } from "../../shared/LanguageSelector";
import { LoginUser } from "./api";

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    setErrors(function (lastErrors) {
      lastErrors.email = undefined;
      return {
        ...lastErrors,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      lastErrors.password = undefined;
      return {
        ...lastErrors,
        password: undefined,
      };
    });
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setGeneralError();
    setApiProgress();
    try {
      const response = await LoginUser({ email, password });
      dispatch({ type: "login-success", data: response.data });
      navigate("/dashboard");
    } catch (axiosError) {
      if (axiosError.response?.data) {
        if (axiosError.response.data.code === "400") {
          setErrors(axiosError.response.data.errorList);
        } else {
          setGeneralError(axiosError.response.data.message);
        }
      } else {
        setGeneralError(t("genericError"));
      }
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <div id="login">
      <LanguageSelector />
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex"></div>
            <div className="card-body">
              <div className="text-center">
                <img src={logo} alt="Logo" className="logo" />
              </div>
              <h4 className="title text-center mt-4 text-capitalize">
                {t("login")}
              </h4>
              <form className="form-box px-3" onSubmit={onSubmit}>
                <div className="form-input">
                  <span>
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("emailLabel")}
                    tabIndex="10"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-input">
                  <span>
                    <RiLockPasswordLine />
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder={t("passwordLabel")}
                    tabIndex="10"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <div className="form-check custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      name="remember"
                    />
                    <label htmlFor="rememberMe" className="form-check-label">
                      {t("rememberMe")}
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-block text-capitalize text-center w-100 btn-custom-one"
                  >
                    {t("login")}
                  </button>
                </div>

                <div className="text-end">
                  <a href="" className="forget-link">
                    {t("forgotPassword")}
                  </a>
                </div>

                <div className="text-center mb-3">{t("ori")}</div>

                <div className="row mb-3">
                  <div className="col-6">
                    <a
                      href=""
                      className="w-100 btn btn-block btn-social btn-facebook"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href=""
                      className="text-center w-100 btn btn-block btn-social btn-google"
                    >
                      Google
                    </a>
                  </div>
                </div>
                <div className="text-center mb-2">
                  <span>{t("dontAccount")} </span>
                  <Link to="/signup" className="register-link">
                    {t("signUp")}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
