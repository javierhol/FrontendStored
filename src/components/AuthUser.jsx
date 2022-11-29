import React, {useState} from 'react'
import '../index.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faCircleQuestion,faEye,faPhone, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { BiMusic } from "react-icons/bi";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import * as Yup from "yup";
import 'animate.css';
import { Link } from "react-router-dom"
export const AuthUser = () => {

    const [typeInput, setTypeInput] = useState(true)
    const [postUserAuth, setPostUserAuth] = useState(
        {
            postData: {
                email:"",
                password:"",
            }
        }
    )

  const notify = () => toast("Wow so easy!");
 
    return (
        
        <>
        
 
            <div className="form_Login w-72 mx-auto sm:w-96    my-9 drop-shadow-2xl ">
                <div className="login bg-gray-100 w-full rounded-md">
                    <h1 className='text-black  block p-2  text-2xl text-center font-sans font-medium'>Iniciar sesión</h1>

                    <div className="descripcion">
                        <p className="title text-gray-600 text-base font-sans
                        mt-6 mb-2
                        mx-3">
                            Ingrese sus datos para comenzar
                        </p>
                    </div>
                    <Formik
                        initialValues={{
                            email: "", password: "", toggle: false,
                            checked: [],
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string().email("El email no es valido").required("El campo no puede estar vacio"),
                                password: Yup.string().required("El campo no puede estar vacio").min(6,"Debe tener mas de 6 caracteres")
                                ,
                            })
                        }
                        onSubmit={(values) => {
                          alert(JSON.stringify(values))
                        }}
                    >
                        <Form>

                            <div className="Fiel-email bg-white flex items-center mx-2 my-1
                           border-solid border-1 border-slate-300 rounded
                             ">
                                <div className="icons   py-2 px-2 text-gray-400">
                                    <FontAwesomeIcon icon={faEnvelope} 
                                    
                                    className="mx-1 text-xl"/>
                                </div>
                                <div className="email w-full">
                                    <Field type="email" name="email"
                                        placeholder="Correo electronico"
                                        className="w-full block
                                         outline-none " />
                                </div>
                            </div>
                            <div className="error">
                                <ErrorMessage component="p" className='mx-2 block text-red-600
                                animate__animated animate__fadeInUp ' name='email' />
                            </div>

                            <div className="Fiel-email bg-white flex items-center mx-2 mt-6
                           border-solid border-1 border-slate-300 rounded">
                                <div className="icons    py-2 px-2 text-gray-400">
                                    <FontAwesomeIcon icon={faKey}
                                    
                                    className="mx-1 text-xl"/>
                                </div>

                                <div className=" w-full">
                                    <Field type={typeInput == true?"password":"text"} name="password" placeholder="Contraseña"
                                   
                                   
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
                                    {typeInput == true ?<FontAwesomeIcon icon={faEyeSlash}
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
                                
                                className="text-[#074766] text-xl"/> Ayuda</p>
                               </Link>
                                <Link to="/recoveryPassword"
                                className='text-[#0099FF] hover:underline'>
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>

                            <div className="button w-full">
                                <button type='submit'
                                className='bg-[#0099FF] text-white rounded-full
                                p-1 py-1.5 w-5/6 block mx-auto my-3 hover:opacity-[0.85] transition'
                                >Iniciar sesión</button>
                            </div>

                            <div className="permisos  mx-2 mt-2">
                                <Field type="checkbox" name="toggle"
                                className="text-xl" />
                                <Link to="/privacy"
                                className='mx-2  text-slate-900 hover:underline overflow-hidden
                                '>
                                    Acepto términos y condiciones

                                </Link>
                            </div>

                            <div className="ajuste-cuenta   flex justify-start mt-4 mx-2 mb-2
                            ">
                                <p>¿No tienes cuenta?</p>
                                <Link to="/signup">
                                    <p className='text-[#0099FF] mb-3 ml-3'>Crear cuenta</p>
                                </Link>
                            </div>
                            <div className="countCuenda cursor-pointer"
                            
                            >
                                <div className="authGoogle 
                                p-2 m-2 flex items-center justify-center rounded">
                                          
   <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    let decode = jwt_decode(credentialResponse.credential)
    console.log(decode);
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
  }}
  onError={() => {
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
  }}
  useOneTap
 locale
 type="standard"
 shape='pill'
 theme='filled_black'
 logo_alignment= "left"
/>
                                </div>
                            </div>
                            <div className="m-2 p-1"></div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
