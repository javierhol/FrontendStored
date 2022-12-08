import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";



import React from 'react'

export const Search=() =>{
  return (
    
    <>    
     
      <Formik>
      <Form className="xl:w-2/5 2xl:w-1/4 2xl:mr-16">
      <div className="border-2 border-gray-300 rounded-full py-1 flex justify-center sm:w-40 sm:my-2 sm:mt-3 md:w-60 md:mx-5 xl:w-96 xl:p-1 xl:mt-2 2xl:p-2">
        <Field type="search" placeholder="¿Que deseas buscar?" className="form-control-lg  outline-0 sm:w-32 sm:text-xs md:w-52  lg:mx-2 lg:w-72 xl:w-96 xl:text-sm xl:mx-2"/>
        <FontAwesomeIcon className="fa-search text-gray-300  lg:mr-2 xl:mr-2 xl:my-1" icon={faMagnifyingGlass}/>
      </div>
      </Form>
    </Formik>
    </>
  )
}