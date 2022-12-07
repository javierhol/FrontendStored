import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom"



import React from 'react'

export const Search=() =>{
  return (
    
    <>    
     
      <Formik >
      <Form >
      <div className="border-2 border-[#BFDDD8] rounded-full py-1 w-96 flex justify-center">
        <Field type="search" placeholder="¿Que deseas buscar?" className="form-control-lg  outline-0 "/>
        <FontAwesomeIcon className="fa-search color-[#BCBCBC]" icon={faMagnifyingGlass}/>
      </div>
      </Form>
    </Formik>
    </>
  )
}