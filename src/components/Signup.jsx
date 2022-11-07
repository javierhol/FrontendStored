import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { Link} from "react-router-dom"

export const Signup = () => {

    let errores={}

    return(

        <>

        <div className="form-signup w-2/4">
            <div className="container-signup bg-gray-100 w-full mx-10 my-10 pb-1 rounded-lg">
            <h1 className='text-xl font-semibold my-16 pt-5 text-center'>REGISTRARME</h1>
            <div className="description">
            <p className="mx-10 my-1">Inventario para minimercados a tiempo real, crea tu cuenta y obten nuestros</p>
            <p className="text-center">servicios totalmente gratis</p>
            </div>
            <div className="container-google bg-gray-200 text-center m-10 px-3 py-4 boder borde-solid rounded">Continuar con Google</div>
            <div className="flex items-center m-10 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">O puedes unirte con</p>
            </div>
            <Formik 
            
            initialValues={{ email: "", password: "",toggle: false,
            checked: [], }}
         
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
                    <div className="container-email m-10 ">
                        <div className="signup-email w-full">
                            <Field  type="email" className="bg-white px-3 py-4 boder border-solid rounded w-full" name="email" placeholder="Correo electronico"/>
                        </div>
                    </div>
                    <div className="error">
                        <ErrorMessage component="p" className='text-red-600 m-10' name='email' />                                                                                                                                                                  
                    </div>
                    <div className="container-password m-10">
                        <div className="signup-password w-full">
                            <Field type="password" className="bg-gray-200 px-3 py-4 boder border-solid rounded w-full" name="password" placeholder="Contraseña"/>
                        </div>
                    </div>
                    <div className="error">
                        <ErrorMessage component="p" className='text-red-600 m-10' name='password'/>  
                    </div>
                    
                <div className="permissions-signup m-10 flex">
                <Field type="checkbox" className="mx-2" name="toggle" />
                <Link to="/privacy">
                    <p className="text-blue-800">
                        Acepto terminos y condiciones de servicios
                    </p>
                </Link>
                </div>
                <div className="flex mx-10">
                    <p className="mr-2">¿Ya tienes una cuenta?</p>
                    <Link to="/auth">
                        <p className="text-blue-800">Iniciar sesión</p>
                    </Link>
                </div>
                <div className="button-signup mx-60 my-12 py-2 bg-blue-400 w-1/4 text-center text-white border border-solid rounded-full">
                    <button type="submit">
                        CREAR CUENTA
                    </button>
                </div>
                </Form>
            </Formik>
            </div>
        </div>
        </>


    )

}