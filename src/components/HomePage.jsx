import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import imagen1 from "../assets/img/Frame2.svg";
import imagen2 from "../assets/img/Frame15.svg";
import imagen3 from "../assets/img/Frame8792.svg";
import imagen4 from "../assets/img/card1.jpg";
import imagen5 from "../assets/img/card2.jpg";
import imagen6 from "../assets/img/card03.jpg";
import imagen7 from "../assets/img/estadisticaStored.svg"
import imagen8 from "../assets/img/Frame8791.svg"
import Header from "./Header";
import { Footer } from "./Footer";

export const HomePage=() =>{
  return (
    <>
    <div className="bg-[#F5F5F5]">
    <Header/>
    {/* <div className=" flex bg-gradient-to-b from-[#1876F2]  to-[#F5F5F5] pb-50 justify-between">
    <div className="w-3/5 py-20 px-10">
      <p className="text-5xl text-white font-medium">¡Comienza a crear tu propio invetario para llevar un mejor manejo de tu negocio!</p>
      <button type="button" className="inline-block px-10 py-5 my-20 mx-2 bg-white text-black font-medium text-base leading-tight rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Comenzar ya</button>
    </div>
    <div className="w-full">
    <img className="py-1" src={imagen1}/>
    </div>
    </div>
    <div className="flex px-10">
      <img className="w-1/3 mr-40" type="imagen" src={imagen2}/>
      <div className=" w-1/2 h-80 mt-40 mb-44 px-5 rounded-lg ">
        <img src={imagen3}/>
      </div>
    </div>
    <div className="flex ">
      <div className="container min-h-screen flex flex-col items-center ">
        <div className="relative h-40 w-64">
          <div className="absolute h-full w-full ">
            <img className="flex items-center h-48 pl-8" src={imagen4}/>
          </div>
        </div>
        <div className="container paragraph bg-[#1876F2] rounded-tl-3xl rounded-br-3xl p-10 w-60 pt-10">
          <p className="text-white text-base">Llevaras un registro de tus productos de entrada y salidas mediante reportes que estaran pendiente de tu inventario </p>
        </div>
      </div>
      <div className="container min-h-screen flex flex-col pb-60 items-center ">
        <div className="relative h-40 w-64">
          <div className="absolute h-full w-full ">
            <img className="flex items-center h-48 pl-8" src={imagen5}/>
          </div>
        </div>
        <div className="container paragraph bg-gradient-to-r from-[#1B78F2] to-[#5A9DF6] rounded-tl-3xl rounded-br-3xl p-10 w-60 pt-10">
          <p className="text-white text-base">Tu información esta segura, nos importa de que tus datos no se pierdan y no hallan fallos al momento de utilizar nuesto servicio</p>
        </div>
      </div>
      <div className="container min-h-screen flex flex-col  items-center ">
        <div className="relative h-40 w-64">
          <div className="absolute h-full w-full ">
            <img className="flex items-center h-48 pl-8" src={imagen6}/>
          </div>
        </div>
        <div className="container paragraph bg-gradient-to-r from-[#6AA7F7] to-[#AACDFB] rounded-tl-3xl rounded-br-3xl p-10 w-60 pt-10">
          <p className="text-white text-base pt-6">Podras crear usuarios que ayude llevar un mejor control de  tu inventario a travez de roles que faciliten el uso de stored </p>
        </div>
      </div>
    </div>
    <div className="flex justify-between m-0">
      <div className="w-2/5  m-20">
        <p className="text-3xl pl-10">
          <span className="text-[#3376F9]">Stored un servicio de alta calidad.</span><span>Nuestra plataforma impulsa la innovación con herramientas que aumentan la seguridad de tu negocio</span>
        </p>
        <p className="text-sm py-20 px-10 w-64"> Aumento del 100%
          en la productividad de tu trabajo
          después de 1 año</p>
      </div>
      <div className="w-1/2">
        <img src={imagen7}/>
      </div> 
    </div>
    <div className="w-2/4 mx-80">
      <hr className="bg-[#4FFF8B] h-2 w-24 mx-60  rounded "/>
      <h2 className="text-4xl text-center text-[#404659] font-bold">Un lugar para que cualquier persona pueda utilizarlo sin dificultad</h2>
      <div className=" flex p-10">
        <div className="mr-5">
          <button type="button" className="inline-block px-2 py-2.5 flex bg-white text-sm leading-tight rounded hover:text-white hover:bg-black focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out drop-shadow-md "><p className="mt-1">Crear una cuenta en stored</p><FontAwesomeIcon className="my-1 mx-2" icon={faChevronRight} /> </button>
        </div>
        <div>
          <button type="button" className="inline-block px-2 py-2.5  flex bg-white text-sm leading-tight rounded hover:text-white hover:bg-black focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out drop-shadow-md "><p className="mt-1">Iniciar sesión en stored</p><FontAwesomeIcon className="my-1 mx-2" icon={faChevronRight} /> </button>
        </div>
      </div>
    </div>
    <div className="bg-[#0A3155] w-3/5 mx-64 rounded-lg h-56 mb-20">
      <div className="flex justify-between text-white">
        <h4 className="text-3xl font-medium mx-10 mt-10">Suscribete</h4>
        <span className="material-symbols-sharp h-30 w-30">
          outgoing_mail
        </span>
      </div>
      <p className="text-white my-5 mx-10">Mantente actualizado con las nuevas novedades que tiene stored para ti</p>
      <div>
        <div className="mb-3">
          <div className="input-group relative flex flex-wrap items-stretch  m-10">
            <Formik>
              <Form>
                <Field  className="form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#1747EC] rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-1"type="email" name="email" placeholder="Email"/>
              </Form>
            </Formik>
            <button className="btn inline-block px-6 py-2 text-[#0A3155] font-medium text-xs leading-tight  bg-white rounded hover:bg-[#1876F2] hover:text-white hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Suscribete</button>
          </div>    
        </div>
      </div>
    </div>
    <Footer/>  */}
    </div>
    </>
  )
}


