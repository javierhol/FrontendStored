import React from 'react'
import '../index.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser,faPhone } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
export const AuthUser = () => {
    let errores={}
  return (
   <>
   <div className="form_Login ">
    <div className="login">
        <h1 className='text-red-500'>Iniciar sesión</h1>

        <div className="descripcion">
            <p className="title">
                Ingrese sus datos para comenzar
            </p>
        </div>

        <Formik
        initialValues={{ email: "", password: "" }}
         
        validationSchema={
            Yup.object({
                email: Yup.string().email("El email no es valido").required("El correo no es valido"),
                password: Yup.string().required("La contraseña no es valido")

            })
        }
        onSubmit={(values)=>{
            alert("Hola")
        }}
        >
            <Form>

                <Field  type="email" name="email" placeholder="Correo electronico"/>
                <ErrorMessage component="p" className='text-red-600' name='email' />                                                                                                                                                                  
                
                <Field type="password" name="password" placeholder="Contraseña"/>
                <ErrorMessage component="p" className='text-red-600' name='password'/>  
                <button  type='submit'>Iniciar sesión</button>

            </Form>
        </Formik>

    </div>


   </div>
   </>
  )
}
