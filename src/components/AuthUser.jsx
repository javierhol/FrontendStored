import React from 'react'
import '../index.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faLock,faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { Link} from "react-router-dom"
export const AuthUser = () => {
    let errores={}
  return (
   <>
   <div className="form_Login w-1/5 ">
    <div className="login bg-gray-100 w-full ">
        <h1 className='text-blanck text-2xl text-center font-sans font-medium'>Iniciar sesión</h1>

        <div className="descripcion">
            <p className="title text-gray-600 text-base font-sans">
                Ingrese sus datos para comenzar
            </p>
        </div>

        <Formik
        initialValues={{ email: "", password: "",toggle: false,
        checked: [], }}
         
        validationSchema={
            Yup.object({
                email: Yup.string().email("El email no es valido").required("El campo no puede estar vacio"),
                password: Yup.string().required("La contraseña no es valido")
            })
        }
        onSubmit={(values)=>{
            alert("Hola")
        }}
        >

            <Form>


               <div className="Fiel-email">
                <div className="icons">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </div>

                <div className="email">
                <Field  type="email" name="email" placeholder="Correo electronico"/>
                </div>

                </div>
                <div className="error">
                <ErrorMessage component="p" className='text-red-600' name='email' />                                                                                                                                                                  
                </div>
                
                <div className="Field-password">
                    <div className="icons">
                        <FontAwesomeIcon icon={faLock}/>
                    </div>

                <div className="password">
                <Field type="password" name="password" placeholder="Contraseña"/>
              
                </div>
                </div>

                <div className="error">
                <ErrorMessage component="p" className='text-red-600' name='password'/>  
                </div>

                <div className="ayuda">
                    <p>  <FontAwesomeIcon icon={faCircleQuestion}/> Ayuda</p>
                    <Link to="/signup">
                        ¿Olvidaste tu contraseña?
                    </Link>
                      </div>

                <div className="button">
                <button  type='submit'>Iniciar sesión</button>
                </div>

                <div className="permisos">
                <Field type="checkbox" name="toggle" />
                <Link to="/privacy">
                Acepto terminos y condiciones
                </Link>
                </div>

                <div className="ajuste-cuenta">
                    <p>¿No tienes cuenta?</p>
                    <Link to="/signup">
                        <p>Crear cuenta</p>
                    </Link>
                </div>
            </Form>
        </Formik>
    </div>
   </div>
   </>
  )
}
