import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";



import React from 'react'

export const Search=() =>{
  return (
    
    <>    
     
      <Formik>
      <Form className="xl:w-2/4 2xl:w-1/4 2xl:mr-16">
      <div className="border-2 border-[#BFDDD8] rounded-full py-1 flex justify-center sm:w-44 sm:my-2 sm:mt-3 md:w-64 md:mx-5 lg:w- xl:w-96">
        <Field type="search" placeholder="¿Que deseas buscar?" className="form-control-lg  outline-0 sm:w-32 sm:text-xs md:w-52 lg:w-72 xl:w-full xl:mx-5"/>
        <FontAwesomeIcon className="fa-search color-[#BCBCBC] xl:mr-5" icon={faMagnifyingGlass}/>
      </div>
      </Form>
    </Formik>
    </>
  )
}