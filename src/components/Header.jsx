import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom"
import { Search } from "./Search";


export const Header=() =>{
    return (

        <>
        
        <header className="flex bg-white px-5">
    <h1 className="text-[#1876F2] font-medium text-3xl p-4">Stored</h1>
    <nav>
      <ul className="flex">
        <li className="nav-item py-5 px-6">
          <a className="nav-link hover:text-gray-700 focus:text-gray-700 p-0" href="#">Servicios</a>
        </li>
        <li className="nav-item px-2 py-5">
          <a className="nav-link hover:text-gray-700 focus:text-gray-700 p-0" href="#">Ayuda</a>
        </li>
        <li className="nav-item px-2 py-5">
          <a className="nav-link hover:text-gray-700 focus:text-gray-700 p-0" href="#">Contactanos</a>
        </li>
       <Search/>
        <div className="flex py-4">
          <li className="nav-item px-6 ">
            <a className="nav-link  hover:text-gray-700 focus:text-gray-700 px-5" href="/login">Iniciar sesión</a>
            <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Crear cuenta</button>
          </li>
        </div>
      </ul>
    </nav>
  </header>

        </>
    )
  }


export default Header
  
  