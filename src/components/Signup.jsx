import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { faEnvelope, faLock, faCircleQuestion,faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {usePostAuth} from "../hooks/context/UserContextData";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup"
import 'animate.css';
import { Link , Navigate} from "react-router-dom"

export const Signup = () => {


    const token = localStorage.getItem('secure_token')
    const [typeInput, setTypeInput] = useState(true)
    const [spiner, setSpiner] = useState(true)
    const { getPostRegister } = usePostAuth()
    if (token) {
        return <Navigate to="/login" />
    }

    return(
        <>
        
        <div className="form-signup w-4/5 sm:w-96 mx-auto sm:mx-auto mt-5 bg-gray-100">
            <div className="container-signup  border shadow-2xl pb-1 rounded-lg ">
                <h1 class="text-xl font-semibold mt-2 mb-5 pt-5 text-center ">Registrarme</h1>
                <div className="description">
                    <p class="mx-10 text-center sm:mx-auto">Crea una cuenta para mejorar la experiencia y </p>
                    <p class="text-center mb-5">calidad de tu negocio</p>
                </div>
                <div className="countCuenda cursor-pointer">
                                <div className="authGoogle 
                                p-2 m-2 flex items-center justify-center rounded">
                                    <div className="p ml-1">
                                    <GoogleLogin
                                        onSuccess={( credentialResponse ) => {
                                            console.log( credentialResponse );
                                            let decode = jwt_decode( credentialResponse.credential );
                                        }}
                                        onError={() => { }}
                                        useOneTap
                                        locale
                                        type="classic"
                                        shape="pill"
                                        theme="filled_black"
                                        logo_alignment="left"
                                    />
                                    </div>
                                </div>  
                            </div>
                <div className="flex items-center mx-5 my-5 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 sm:mx-5">
                <p className="text-center mx-4 mb-0">O</p>
            </div>
            <Formik
                initialValues={{ email: "", password: "",toggle: false,checked: [], }}
         
                validationSchema={
                Yup.object({
                    email: Yup.string().email("El email no es valido").required("El campo no puede estar vacio"),
                    password: Yup.string().required("La contraseña no es valida")
                })
            }
                onSubmit={ async (values)=>{
                   let response = await getPostRegister(values)

                     if (response.status === 200) {
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
                       window.location.href = "/login";
                    }
                    if (response.status === 400) {

                        toast.error( response.data.message, {
                            position: toast.POSITION.TOP_RIGHT,
                            theme: "dark",
                        } )

                    }
                }
            }
            >

            <Form>
            <div className="Fiel-email bg-white  flex items-center mx-2 my-1
                           border-solid border-1 border-slate-300 rounded
                             ">
                                <div className=" icons py-2 px-2 text-gray-400">
                                    <FontAwesomeIcon icon={faEnvelope}

                                        className="mx-1 text-xl" />
                                </div>
                                <div className="email w-full">
                                    <Field type="email" name="email"
                                        placeholder="Correo electronico"
                                        className="w-full block
                                       outline-none "  />
                                </div>
                            </div>
                            <div className="error">
                                <ErrorMessage component="p" className='mx-2 block text-red-600
                                animate__animated animate__fadeInUp ' name='email' />
                            </div>

                            <div className="Fiel-email bg-white flex items-center mx-2 mt-6
                           border-solid border-1 border-slate-300 rounded">
                                <div className="icons    py-2 px-2 text-gray-400">
                                    <FontAwesomeIcon icon={faLock}

                                        className="mx-1 text-xl" />
                                </div>

                                <div className=" w-full">
                                    <Field type={typeInput === true?"password":"text"}  name="password" placeholder="Contraseña"
                                   
                                   
                                    className="w-full block
                                    outline-none bg-white" 
                                    
                                    />

                                </div>
                                <div className="passEye 
                                 py-2 px-2 text-gray-400
                                 cursor-pointer
                                "
                                name="eye"
                                onClick={()=>{
                                    setTypeInput(!typeInput)
                                }}>
                                    {typeInput === true ?<FontAwesomeIcon icon={faEyeSlash}
                                    className="animate__animated animate__fadeInRight"/>:<FontAwesomeIcon icon={faEye}
                                    className="animate__animated animate__fadeInRight"/>}
                                    
                                </div>
                            </div>

                            <div className="error">
                                <ErrorMessage component="p" className='mx-2 block text-red-600
                                animate__animated animate__fadeInUp' name='password' />
                            </div>

                            <div className="flex justify-between m-3">
                                <Link to="ayuda">
                                    <p>  <FontAwesomeIcon icon={faCircleQuestion}

                                        className="text-[#074766] text-xl" /> Ayuda</p>
                                </Link>
                                <Link to="/recoveryPassword"
                                    className='text-[#0099FF] hover:underline'>
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <div className="permisos  mx-2 mt-2 my-5">
                                <Field type="checkbox" name="toggle"
                                    className="text-xl" />
                                <Link to="/privacy"
                                    className='mx-2  text-slate-900 hover:underline overflow-hidden
                                '>
                                    Acepto términos y condiciones

                                </Link>
                            </div>
                    <p className="text-sm font-semibold  mx-5 sm:ml-5 text-center my-5">¿Ya tienes una cuenta?
                    <Link to="/auth">
                        <span href="#!" className="text-[#2771E0] hover:text-blue-700 transition duration-200 ease-in-out ml-1 sm:ml-1">Iniciar sesión</span>
                    </Link>
                    </p>
                    <div className="text-center mt-5">
                        <button type="submit" className="bg-[#009AFA] inline-block px-6 py-2.5 w-40 rounded-full text-white  text-sm  rounded shadow-md hover:bg-[#009AFA] hover:shadow-lg focus:shadow-lg
                        focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">
                                    Crear cuenta
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>

        </>


    )

}