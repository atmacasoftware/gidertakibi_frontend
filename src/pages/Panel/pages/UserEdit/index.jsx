import { useState, useEffect } from "react";
import Input from "../../shared/Input";
import { PageHeader } from "../../shared/PageHeader";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Button";
import { updateUser } from "./api";
import ProfileImage from "../../components/ProfileImage";
import { useAuthDispatch } from "../../../../shared/state/contex";
import { FaCamera } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserEdit(authState) {
  const [firstName, setFirstName] = useState(authState.authState.first_name);
  const [lastName, setLastName] = useState(authState.authState.last_name);
  const [email, setEmail] = useState(authState.authState.email);
  const [mobile, setMobile] = useState(authState.authState.mobile);
  const [tempImage, setTempImage] = useState();
  const [newImage, setNewImage] = useState();
  const dispatch = useAuthDispatch();
  const [apiProgress, setApiProgress] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();
  const { t } = useTranslation();

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
    setErrors({});
  };

  const notify = () => toast("Wow so easy !");

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

  const onSelectImage = (event) => {
    setErrors(function (lastErros) {
      return {
        ...lastErros,
        image: undefined,
      };
    });
    if (event.target.files.length < 1) return;
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      const data = fileReader.result;
      setNewImage(data);
      setTempImage(data);
    };

    fileReader.readAsDataURL(file);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);
    setErrors({});
    setGeneralError();
    try {
      const { data } = await updateUser(authState.authState.id, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        mobile: mobile,
        image: newImage,
      });
      dispatch({
        type: "user-update-success",
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
          image: data.image,
          mobile: data.mobile,
        },
      });
      toast.success("Başarıyla kaydedildi !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (axiosError) {
      if (axiosError.response?.data) {
        if (axiosError.response.data.status === 400) {
          setErrors(axiosError.response.data.errorList);
        } else {
          setGeneralError(axiosError.response.data.message);
        }
      } else {
        setGeneralError(t("genericError"));
      }
      toast.error("Bir hata meydana geldi ! Lütfen tekrar deneyiniz...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <PageHeader title="Hesabım" breadList={[["myaccount", "Hesabım"]]} />
      <div className="content myaccount">
        <form className="row" onSubmit={onSubmit}>
          <div className="col-lg-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="user__profile__content">
                  <div className="image-upload">
                    <ProfileImage
                      width={140}
                      heigth={140}
                      image={authState.authState.image}
                      tempImage={tempImage}
                      firstname={firstName}
                      lastname={lastName}
                    />
                    <div className="round">
                      <Input
                        type="file"
                        name="profile_img"
                        inputValue=""
                        placeholder="Profil Fotoğrafı"
                        tabIndex="10"
                        isRequired={false}
                        onChange={onSelectImage}
                      />
                      <FaCamera style={{ color: "#fff" }} />
                    </div>
                  </div>
                </div>
                <div className="user__info__content mt-4">
                  <h4 className="d-inline">
                    {firstName} {lastName}
                  </h4>{" "}
                  / <span>{authState.authState.email}</span>{" "}
                  {authState.authState.mobile && (
                    <span>/ {authState.authState.mobile}</span>
                  )}
                  <p className="mt-1">
                    <b>Üyelik Tarihi : </b> {authState.authState.created_at}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="card py-3">
              <div className="card-body">
                <div className="form-input">
                  <Input
                    type="email"
                    name="email"
                    inputValue={email}
                    disabled={true}
                    placeholder="E-posta adresiniz..."
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
                        type="text"
                        name="first_name"
                        id="first_name"
                        inputValue={firstName}
                        placeholder="Adınız..."
                        tabIndex="10"
                        isRequired={true}
                        onChange={onChangeFirstName}
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
                        inputValue={lastName}
                        placeholder="Soyadınız..."
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
                  <div className="form-input">
                    <Input
                      type="number"
                      name="mobile"
                      inputValue={mobile}
                      placeholder="Telefon numaranız..."
                      tabIndex="10"
                      isRequired={false}
                      onChange={(event) => setMobile(event.target.value)}
                    />
                    {errors.email && (
                      <span className="error text-danger">{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <Button
                    type="submit"
                    apiProgress={apiProgress}
                    btn_display="block"
                    capitalize="capitalize"
                    position="text-center"
                    width="w-100"
                    style="btn-custom-two"
                  >
                    {t("save")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
