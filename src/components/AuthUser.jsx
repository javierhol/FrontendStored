import React, { useState } from "react";
import "../index.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faCircleQuestion,
  faEye,
  faEyeSlash,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link } from "react-router-dom";
import { usePostAuth } from "../hooks/context/UserContextData";
import "../assets/css/spiner.css";
import { Navigate } from "react-router-dom";
export const AuthUser = () => {
  const token = localStorage.getItem("secure_token");
  const [typeInput, setTypeInput] = useState(true);
  const [spiner, setSpiner] = useState(true);
  const { getPostLogin, getPostLoginAuthGoogle } = usePostAuth();
  if (token) {
    return <Navigate to="/dasboard" />;
  }

  const setDataGoogl = async (data) => {
    const { email, name, picture } = data;
    const dataGoogle = {
      email,
      name,
      picture,
    };

    const response = await getPostLoginAuthGoogle(dataGoogle);

    let getData = response.data;
    localStorage.setItem("secure_token", getData.token);
    localStorage.setItem("auth_cuenta", getData.auth);
    localStorage.setItem("response_auth", getData.message);
    localStorage.setItem("perfil_rol", getData.rol);
    setSpiner(!spiner);
    window.location.href = "/dasboard";
  };
  return (
    <>
      <ToastContainer />
      <div className="form_Login w-72 mx-auto sm:w-96    my-9 drop-shadow-2xl ">
        <div className="login bg-white w-full rounded-md">
          <div className="flex item-center justify-center">

            <div className=" absolute p-2 left-0 text-3xl text-gray-600 ">
              <Link to="/home">
                <FontAwesomeIcon icon={faAngleLeft}/>
              </Link>
            </div>
            <div className="">
              <h1 className="text-black text-gray-600  block p-2  text-2xl text-center font-sans font-medium">
            Iniciar sesión
          </h1>
            </div>
          </div>

          <div className="descripcion">
            <p
              className="title text-gray-600 text-base font-sans
                        mt-6 mb-2
                        mx-3"
            >
              Ingrese sus datos para comenzar
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("El email no es valido")
                .required("El campo no puede estar vacio"),
              password: Yup.string().required("El campo no puede estar vacio"),
            })}
            onSubmit={async (values) => {
              let response = await getPostLogin(values);
              console.log(response);
              if (response.status === 200) {
                toast.success("Cargando...", {
                  position: toast.POSITION.TOP_RIGHT,
                  theme: "dark",
                });
                let getData = response.data;
                localStorage.setItem("secure_token", getData.token);
                localStorage.setItem("auth_cuenta", getData.auth);
                localStorage.setItem("response_auth", getData.message);
                localStorage.setItem("perfil_rol", getData.rol);
                setSpiner(!spiner);
                window.location.href = "/dasboard";
              }
              if (response.response.status === 400) {
                toast.error("Este usuario no existe", {
                  position: toast.POSITION.TOP_RIGHT,
                  theme: "dark",
                });
                await setSpiner(!spiner);
              } else if (response.response.status === 401) {
                toast.warning("La contraseña es incorrecta", {
                  position: toast.POSITION.TOP_RIGHT,
                  theme: "dark",
                });
                await setSpiner(!spiner);
              }
            }}
          >
            <Form>
              <div
                className="Fiel-email border bg-white flex items-center mx-2 my-1
                           border-solid border-1 border-slate-300 rounded transition-200
                             "
              >
                <div className="icons   py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} className="mx-1 text-xl" />
                </div>
                <div className="email w-full">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="w-full block
                                         outline-none "
                  />
                </div>
              </div>
              <div className="error">
                <ErrorMessage
                  component="p"
                  className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                  name="email"
                  // validate={validateEmail}
                />
              </div>

              <div
                className="Fiel-password border bg-white flex items-center mx-2 mt-6
                           border-solid border-1 border-slate-300 rounded"
              >
                <div className="icons    py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faKey} className="mx-1 text-xl" />
                </div>

                <div className=" w-full">
                  <Field
                    type={typeInput === true ? "password" : "text"}
                    name="password"
                    placeholder="Contraseña"
                    className="w-full block 
                                    outline-none bg-white"
                  />
                </div>
                <div
                  className="passEye 
                                 py-2 px-2 text-gray-400
                                 cursor-pointer
                                "
                  name="eye"
                  onClick={() => {
                    setTypeInput(!typeInput);
                  }}
                >
                  {typeInput === true ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="animate__animated animate__fadeInRight"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="animate__animated animate__fadeInRight"
                    />
                  )}
                </div>
              </div>

              <div className="error">
                <ErrorMessage
                  component="p"
                  className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp"
                  name="password"
                />
              </div>

              <div className="flex justify-between m-3">
                <Link to="ayuda">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className="text-[#074766] text-xl"
                    />{" "}
                    Ayuda
                  </p>
                </Link>
                <Link
                  to="/recovery+password/identify"
                  className="text-[#0099FF] hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <div className="button w-full relative">
                <button
                  type="submit"
                  className="bg-[#0099FF] text-white rounded-full relative
                                p-1 py-1.5 w-5/6 mx-auto my-3 hover:opacity-[0.85] transition
                                h-9 flex justify-center"
                >
                  {spiner === true ? (
                    <span onClick={() => setSpiner(!spiner)}>
                      Iniciar sesión
                    </span>
                  ) : (
                    <div className="centh">
                      <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  )}
                </button>
              </div>

              <div className="permisos  mx-2 mt-2">
                <Field type="checkbox" name="toggle" className="text-xl" />
                <Link
                  to="/privacy"
                  className="mx-2  text-slate-900 hover:underline overflow-hidden
                                "
                >
                  Acepto términos y condiciones
                </Link>
              </div>

              <div
                className="ajuste-cuenta   flex justify-start mt-4 mx-2 mb-2
                            "
              >
                <p>¿No tienes cuenta?</p>
                <Link to="/signup">
                  <p className="text-[#0099FF] mb-3 ml-3">Crear cuenta</p>
                </Link>
              </div>
              <div className="countCuenda cursor-pointer">
                <div
                  className="authGoogle 
                                p-2 m-2 flex items-center justify-center rounded"
                >
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                      let decode = jwt_decode(credentialResponse.credential);
                      setDataGoogl(decode);
                    }}
                    onError={() => {}}
                    useOneTap
                    locale
                    type="standard"
                    shape="pill"
                    theme="filled_black"
                    logo_alignment="left"
                  />
                </div>
              </div>
              <div className="m-2 p-1"></div>
            </Form>
          </Formik>
          
          <video  src="https://res.cloudinary.com/dkqp3wkbi/video/upload/v1670421680/animacion_media_fawwzt.mp4" autoPlay  playsInline></video>
        </div>
      </div>
    </>
  );
};
