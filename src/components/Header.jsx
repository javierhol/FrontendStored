import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom"
import { Search } from "./Search";


export const Header=() =>{
    return (

        <>
        
      <header className="flex bg-white w-full h-14 border-2 border-gray-100 border-b-gray-100">
    <h1 className="text-[#1876F2] font-medium  sm:m-2 sm:text-xl hover:text-decoration md:ml-5 lg:mr-3 lg:ml-5 lg:m-2 lg:text-2xl xl:text-2xl xl:mt-3 xl:ml-10 2xl:text-3xl 2xl:mt-1 2xl:my-5 2xl:ml-14">Stored</h1>
    <nav className="flex w-full lg:justify-around">
      <ul className="flex sm:text-xs sm:py-4 lg:w-60 lg:text-base xl:w-80 xl:justify-around 2xl:w-1/4 2xl:mb-3 2xl:justify-between ">
         <Link to="/" className="nav-item px-2  inline-block relative hover:underline hover:underline-offset-4 decoration-[#1876F2] origin-bottom-right">
            <span className="nav-linktransition ">Servicios</span>
          </Link>
          <Link to="/" className="nav-item px-2 inline-block relative hover:underline hover:underline-offset-4 decoration-[#1876F2] origin-bottom-right">
            <span className="nav-link">Ayuda</span>
            </Link>
            <Link to="/" className="nav-item px-2 inline-block relative hover:underline hover:underline-offset-4 decoration-[#1876F2] hover:bg.blue-800 origin-bottom-right">
              <span className="nav-link ">Contactanos</span>
            </Link>
      </ul>
       <Search/>
        <div>
           <li className="nav-item sm:m-2 list-none lg:m-1 lg:w-60 xl:w-72 2xl:w-96">
            <Link to="/" className="nav-item py-2 ">
              <span className="nav-link hover:text-[#1876F2]  focus:text-gray-700 sm:text-xs lg:mr-3 lg:text-base xl:text-base 2xl:mr-0">Iniciar sesión</span>
            </Link>
                <Link to="signup" className="inline-block px-3 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out sm:text-xs sm:ml-2 sm:mt-1 lg:ml-1 lg:text-base lg:py-0 lg:mt-2 xl:text-base xl:ml-5 2xl:ml-16">
                  Crear cuenta</Link>
          </li>
        </div>
    </nav>
  </header>
        </>
    )
  }


export default Header
  
  