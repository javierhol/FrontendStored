import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { Link} from "react-router-dom"

export const Signup = () => {

    let errores={}

    return(

        <>        
        <div className="form-signup w-4/5 sm:w-96 mx-auto sm:mx-auto mt-5 ">
            <div className="container-signup  border shadow-2xl pb-1 rounded-lg ">
                <h1 className="text-xl font-semibold mt-2 mb-5 pt-5 text-center ">Registrarme</h1>
                <div className="description">
                    <p className="mx-10 text-center sm:mx-auto">Crea una cuenta para mejorar la experiencia y </p>
                    <p className="text-center mb-5">calidad de tu negocio</p>
                </div>
                <div className="container-google bg-[#E9EDF2] py-2 boder border-solid rounded flex justify-center mx-5 sm:mx-5">
                    <div className="bg-white ml-2 p-5 h-10 sm:w-10 sm:h-10 rounded-full"></div>
                    <Link to="/auth" className="text-[#656161] text-sm font-semib mx-10 my-2">
                        <span>Continuar con google</span>
                    </Link>
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
                onSubmit={(values)=>{
                alert("Hola")
            }}
            >

            <Form>
                <div className="mb-1 mx-5 sm:mx-5">
                    <Field type="text" className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid boder-gray-300 rounded transition ease-in-out focus:text-gray-500 
                    focus:bg-white focus:border-gray-300 focus:outline-none" name="email" placeholder="Correo electronico"/>
                </div>
                <div className="error">
                    <ErrorMessage component="span" className='text-red-600 ml-5 text-sm mb-1' name='email' />                                                                                                                                                                  
                </div>
                <div className="mb-1 mx-5 sm:mx-5">
                    <Field className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border boder-solid rounded transition ease-in-out mt-5 focus:text-gray-700
                focus:border-gray-300 focus:outline-none" name="password" placeholder="Contraseña" type="password"/>
                </div>
                <div className="error">
                    <ErrorMessage component="div" className='text-red-600 ml-5 mb-1 text-sm' name='password'/>  
                </div>
                <div className="flex justify-center  items-center mb-5 mx-5 sm:ml-5">
                    <div className=" flex  items-center form-group form-check text-xs">
                        <Field type="checkbox" className="form-check appaerance-none  border border-gray-300 rounded-sm checked:blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain
                         cursor-pointer" name="toggle"/>
                        <Link to="/privace " className="form-group text-[#07227B] mt-2 ml-1 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out sm:flex">
                            <span className="mt-1">Acepto términos y condiciones de privacidad de datos</span>
                        </Link>
                    </div>
                </div>
                    <p className="text-sm font-semibold  mx-5 sm:ml-5">¿Ya tienes una cuenta?
                    <Link to="/auth">
                        <span href="#!" className="text-[#2771E0] hover:text-blue-700 transition duration-200 ease-in-out ml-1 sm:ml-1">Iniciar sesión</span>
                    </Link>
                    </p>
                    <div className="text-center mt-5">
                        <button type="button" className="bg-[#009AFA] inline-block px-6 py-2.5 w-40 rounded-full text-white  text-sm  rounded shadow-md hover:bg-[#009AFA] hover:shadow-lg focus:shadow-lg
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