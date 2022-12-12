import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import imagen1 from "../assets/img/Frame2.svg";
import imagen2 from "../assets/img/Frame15.svg";
import imagen3 from "../assets/img/Frame8794.svg";
import imagen4 from "../assets/img/card1.jpg";
import imagen5 from "../assets/img/card2.jpg"; 
import imagen6 from "../assets/img/card03.jpg";
import imagen7 from "../assets/img/estadisticaStored.svg"
import Header from "./Header";
import { Footer } from "./Footer";

export const HomePage=() =>{
  return (
    <>
    <div className="bg-[#F5F5F5]">
    <Header/>
    <div className=" flex  bg-gradient-to-b from-[#1876F2] sm:h-56 md:h-72 sm:pb-20 lg:h-96 xl:h-4/6  to-[#F5F5F5] pb-50 justify-evenly">
    <div className="sm-w-1/4 sm:py-12 sm:pr-6 sm:pl-2 md:w-4/5 md:mr-2 xl:w-full xl:ml-5">
      <p className=" sm:ml-8 text-5xl text-white font-medium sm:text-lg md:text-xl lg:text-5xl lg:mr-16 lg:py-5 xl:text-5xl xl:mt-8">¡Comienza a crear tu propio inventario para llevar un mejor manejo de tu negocio!</p>
      <button type="button" className="sm:py-1 sm:text-sm sm:ml-8 md:text-base xl:my-12 xl:py-3 xl:text-xl inline-block px-8 py-5 my-10 mx-2 bg-white text-black font-medium text-base rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">Comenzar ya</button>
    </div>
    <div >
    <img className="py-1 sm:ml-6 xl:w-screen xl:ml-10 " src={imagen1}/>
    </div>
    </div>
    <div className="flex px-10">
      <img className="w-1/3 mr-40 sm:mr-20 lg:mr-44 lg:ml-10" type="imagen" src={imagen2}/>
      <div className=" w-1/2 sm:w-3/4 mb-20 px-5 rounded-lg ">
        <img className="sm:mt-28 lg:mt-60" src={imagen3}/>
      </div>
    </div>
    <div className="sm:px-20 mt-10 lg:flex lg-m-0 lg:px-5 lg:mt-0">
      <div className="container flex flex-col items-center sm:mt-20  ">
        <div className="sm:h-32 relative h-40 w-64">
          <div className="absolute h-full w-full ">
            <img className="sm:h-28 sm:mt-10 sm:w-44 sm:ml-5  lg:ml-5 xl:w-52 xl:h-32 flex items-center pl-3 " src={imagen4}/>
          </div>
        </div>
        <div className="container paragraph sm:pt-2 lg:w-52 lg:h-54 lg:pt-5 xl:w-60 xl:h-56 bg-[#1876F2] rounded-tl-3xl rounded-br-3xl p-10 w-64 pt-10">
          <p className="text-white mt-8 lg:text-sm lg:pb-3">Llevaras un registro de tus productos de entrada y salidas mediante reportes que estaran pendiente de tu inventario</p>
        </div>
      </div>
      <div className="container flex flex-col items-center sm:mt-20 lg:mt-12 ">
        <div className="relative h-40 w-64">
          <div className="absolute h-full w-full ">
            <img className="sm:h-28 sm:mt-20 sm:w-44 sm:ml-5 lg:ml-5 xl:w-52 xl:h-32 flex items-center h-48 pl-3" src={imagen5}/>
          </div>
        </div>
        <div className="container paragraph lg:w-52 lg:h-54 sm:pt-10 bg-gradient-to-r from-[#1B78F2] to-[#5A9DF6] rounded-tl-3xl rounded-br-3xl p-10 w-64 xl:w-60 xl:h-56">
          <p className="text-white text-base lg:text-sm lg:mt-2 xl:mt-5">Tu información esta segura, nos importa de que tus datos no se pierdan y no hallan fallos al momento de utilizar nuesto servicio</p>
        </div>
      </div>
      <div className="container flex flex-col  items-center sm:mt-20 lg:mt-12 ">
        <div className="relative h-40 w-64">
          <div className="absolute h-full w-full ">
            <img className="flex items-center h-48 pl-8 sm:h-28 sm:mt-20 sm:w-44 sm:ml-5  xl:w-52 xl:h-32 lg:ml-5  pl-5" src={imagen6}/>
          </div>
        </div>
        <div className="container paragraph lg:w-52 lg:h-54  bg-gradient-to-r from-[#6AA7F7] to-[#AACDFB] rounded-tl-3xl rounded-br-3xl p-10 w-64 pt-5 xl:w-60 xl:h-56 ">
          <p className="text-white text-base pt-6 lg:text-sm xl:mt-5">Podras crear usuarios que ayude llevar un mejor control de  tu inventario a travez de roles que faciliten el uso de stored </p>
        </div>
      </div>
    </div>
    <div className="flex justify-between mt-32">
      <div className="w-2/5  m-20 sm:m-5">
        <p className="text-3xl pl-10 sm:text-base sm:mt-10 md:text-lg md:mt-16 lg:text-2xl xl:text-3xl xl:mr-32">
          <span className="text-[#3376F9]">Stored un servicio de alta calidad.</span>< span className="sm:mr-12">Nuestra plataforma impulsa la innovación con herramientas que aumentan la seguridad de tu negocio</span>
        </p>
        <p className="text-sm py-20 px-10 w-64 lg:text-base lg:pr-5 lg:pl-10 xl:pr-3"> Aumento del 100%
          en la productividad de tu trabajo
          después de 1 año</p>
      </div>
      <div className="w-1/2 sm:mr-8 lg:mr-14 xl:m-5 ">
        <img src={imagen7}/>
      </div> 
    </div>

    <div className="w-2/4 mx-80 sm:ml-16 sm:my-5 sm:w-3/4 md:ml-28 md:mt-20 lg:ml-32">
      <hr className="bg-[#4FFF8B] h-2 w-24 mx-60 rounded sm:mx-80 xl:mx-96"/>
      <h2 className="text-center text-[#404659] font-bold sm:text-base sm:mx-20 lg:text-2xl lg:mx-40 xl:text-4xl">Un lugar para que cualquier persona pueda utilizarlo sin dificultad</h2>
      <div className=" flex p-10 lg:ml-28 xl:ml-52">
        <div className="mr-5">
          <button type="button" className="sm:w-56 sm:px-2 inline-block px-2 py-2.5 flex bg-white text-sm leading-tight rounded hover:text-white hover:bg-black focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out drop-shadow-md "><p className="mt-1 sm:text-sm sm;ml-3">Crear una cuenta en stored</p><FontAwesomeIcon className="my-1 mx-2  sm:mt-2 sm:mx-3" icon={faChevronRight} /> </button>
        </div>
        <div>
          <button type="button" className=" sm:w-56 sm:px-2 inline-block px-2 py-2.5  flex bg-white text-sm leading-tight rounded hover:text-white hover:bg-black focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out drop-shadow-md"><p className="mt-1 sm:ml-3">Iniciar sesión en stored</p><FontAwesomeIcon className="my-1 mx-2 sm:mt-2 sm:mx-3" icon={faChevronRight} /> </button>
        </div>
      </div>
    </div>

    <div className="bg-[#0A3155] w-3/5 mx-64 rounded-lg h-56 mb-20 sm:w-80 sm:mx-44 md:mx-52 lg:w-1/2 lg:ml-72">
      <div className="flex justify-between text-white">
        <h4 className="text-3xl font-medium mx-10 mt-10 sm:text-lg lg:text-2xl xl:text-3xl">Suscribete</h4>
      </div>
      <p className="text-white my-5 mx-10 sm:text-sm lg:text-base lg:text-xl">Mantente actualizado con las nuevas novedades que tiene stored para ti</p>
      <div>
        <div className="mb-3">
          <div className="input-group relative flex flex-wrap items-stretch m-10 sm:m-2">
            <Formik>
              <Form>
                <Field className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#1747EC] rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-1 sm:px-1 sm:py-0 sm:w-48 sm:ml-5 lg:w-64 lg:ml-8 xl:py-2 xl:w-96"type="email" name="email" placeholder="Email"/>
              </Form>
            </Formik>
            <button className="btn inline-block px-6 py-2 text-[#0A3155] font-medium text-xs leading-tight  bg-white rounded hover:bg-[#1876F2] hover:text-white hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out sm:px-2 sm:py-0 xl:py-2 xl:px-5 xl:text-sm" type="button" id="button-addon3">Suscribete</button>
          </div>    
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}


