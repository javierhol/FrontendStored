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
} from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link } from "react-router-dom";
import { usePostAuth } from "../hooks/context/UserContextData"
import "../assets/css/spiner.css"
import {  Navigate } from "react-router-dom";
export const AuthUser = () => {
    const token = localStorage.getItem( 'secure_token' )
    const [typeInput, setTypeInput] = useState( true );
    const [spiner, setSpiner] = useState( true );
    const { getPostLogin } = usePostAuth()
    if (token) {
        return <Navigate to="/dasboard" />
    }
    return (
        <>
            <ToastContainer />
            <div className="form_Login w-72 mx-auto sm:w-96    my-9 drop-shadow-2xl ">
                <div className="login bg-gray-100 w-full rounded-md">
                    <h1 className="text-black  block p-2  text-2xl text-center font-sans font-medium">
                        Iniciar sesión
                    </h1>

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
                            password: ""
                        }}
                        validationSchema={Yup.object( {
                            email: Yup.string()
                                .email( "El email no es valido" )
                                .required( "El campo no puede estar vacio" ),
                            password: Yup.string()
                                .required( "El campo no puede estar vacio" )
                                .min( 6, "Debe tener mas de 6 caracteres" ),
                            
                        } )}
                        
                        onSubmit={async ( values ) => {
                            let response = await getPostLogin( values );
                          
                            if ( response.status === 200 ) {
                                toast.success( "Cargando...", {
                                    position: toast.POSITION.TOP_RIGHT,
                                    theme: "dark",
                                } )
                                let getData = response.data
                                localStorage.setItem( "secure_token", getData.token )
                                localStorage.setItem( "auth_cuenta", getData.auth )
                                localStorage.setItem( "response_auth", getData.message )
                                localStorage.setItem( "perfil_rol", getData.rol )
                                 setSpiner( !spiner );
                               window.location.href = "/dasboard";
                            }
                            if ( response.response.status === 400 ) {
                                toast.error( "Este usuario no existe", {
                                    position: toast.POSITION.TOP_RIGHT,
                                    theme: "dark",
                                } )
                                await setSpiner( !spiner )
                            } else if ( response.response.status === 401 ) {
                                toast.warning( "La contraseña es incorrecta", {
                                    position: toast.POSITION.TOP_RIGHT,
                                    theme: "dark",
                                } )
                                await setSpiner( !spiner )
                            }

                        }}
                    >
                        <Form>
                            <div
                                className="Fiel-email bg-white flex items-center mx-2 my-1
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
                                className="Fiel-email bg-white flex items-center mx-2 mt-6
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
                                        setTypeInput( !typeInput );
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
                                    {spiner === true ? <span onClick={() => setSpiner( !spiner )}>Iniciar sesión</span> :
                                        <div className="centh">
                                            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                                        </div>

                                    }
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
                                        onSuccess={( credentialResponse ) => {
                                            console.log( credentialResponse );
                                            let decode = jwt_decode( credentialResponse.credential );
                                        }}
                                        onError={() => { }}
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
                </div>
            </div>
        </>
    );
};
