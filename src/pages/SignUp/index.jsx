import React, { useState, useEffect, useMemo } from "react";
import "./signup.css";
import logo from "../../assests/images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { signUp } from "./api";
import Spinner from "../../shared/Spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LanguageSelector } from "../../shared/LanguageSelector";
import Input from "../Panel/shared/Input";
import Button from "../Panel/shared/Button";

export default function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();
  const { t } = useTranslation();

  const sw = withReactContent(Swal);

  useEffect(() => {
    setErrors(function (lastErrors) {
      lastErrors.firstName = undefined;
      return {
        ...lastErrors,
        firstName: undefined,
      };
    });
  }, [firstName]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      lastErrors.lastName = undefined;
      return {
        ...lastErrors,
        lastName: undefined,
      };
    });
  }, [lastName]);

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

  const passwordRepeatError = useMemo(() => {
    if (password && password !== passwordRepeat) {
      return t("passwordMismatch");
    }
    return "";
  }, [password, passwordRepeat]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setGeneralError();
    setApiProgress(true);

    try {
      const response = await signUp({ firstName, lastName, email, password });
      setSuccessMessage(response.data.message);
      sw.fire({
        icon: "success",
        title: "Tebrikler",
        text: "Başarıyla kayıt olundu ! 5 saniye içerisinde giriş ekranına yönlendirileceksiniz",
      });
      setTimeout(function () {
        window.location.replace("login");
      }, 5000);
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
    <div id="signup">
      <LanguageSelector />
      {apiProgress && <Spinner />}
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="card-body">
              <div className="text-center">
                <img src={logo} alt="Logo" className="logo" />
              </div>
              <h4 className="title text-center mt-4">{t("signUp")}</h4>
              <form className="form-box px-3" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-xl- col-sm-12">
                    <div className="form-input">
                      <Input
                        type="text"
                        name="first_name"
                        placeholder={t("firstNameLabel")}
                        tabIndex="10"
                        isRequired={true}
                        onChange={(event) => setFirstName(event.target.value)}
                      />

                      {errors.firstName && (
                        <span className="error text-danger">
                          Adınız boş olamaz!
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="form-input">
                      <Input
                        type="text"
                        name="last_name"
                        placeholder={t("lastNameLabel")}
                        tabIndex="10"
                        isRequired={true}
                        onChange={(event) => setLastName(event.target.value)}
                      />

                      {errors.lastName && (
                        <span className="error text-danger">
                          Soyadınız boş olamaz!
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-input">
                  <Input
                    type="email"
                    name="email"
                    placeholder={t("emailLabel")}
                    tabIndex="10"
                    isRequired={true}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {errors.email && (
                    <span className="error text-danger">{errors.email}</span>
                  )}
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-xl- col-sm-12">
                    <div className="form-input">
                      <Input
                        type="password"
                        name="password"
                        placeholder={t("passwordLabel")}
                        tabIndex="10"
                        isRequired={true}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl- col-sm-12">
                    <div className="form-input">
                      <Input
                        type="password"
                        name="passwordRepeat"
                        placeholder={t("passwordRepeatLabel")}
                        tabIndex="10"
                        isRequired={true}
                        onChange={(event) =>
                          setPasswordRepeat(event.target.value)
                        }
                      />
      
                      {passwordRepeatError && (
                        <span className="error text-danger">
                          Şifreler eşleşmemektedir!
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                <Button type="submit" btn_display="block" capitalize="capitalize" position="text-center" width="w-100" style="btn-custom-two">{t("signUp")}</Button>
                  
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
                  <span>{t("alreadyAccount")} </span>
                  <Link to="/login" className="register-link text-capitalize">
                    {t("login")}
                  </Link>
                </div>
              </form>
            </div>
            <div className="img-right d-none d-md-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
