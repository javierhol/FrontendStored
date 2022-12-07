import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom"
import { Search } from "./Search";


export const Header=() =>{
    return (

        <>

        
        <header className="flex bg-blue-300">
    <h1 className="text-[#1876F2] font-medium text-3xl  sm:py-3 sm:text-2xl ">Stored</h1>
    <nav className="flex  w-full">
      <ul className="flex">
         <Link to="/" className="nav-item px-2 py-5">
            <span className="nav-link hover:text-gray-700  focus:text-gray-700">Servicios</span>
          </Link>
          <Link to="/" className="nav-item px-2 py-5">
            <span className="nav-link hover:text-red-700  focus:text-red-700">Ayuda</span>
            </Link>
            <Link to="/" className="nav-item px-2 py-5">
              <span className="nav-link hover:text-gray-700  focus:text-gray-700">Contactanos</span>
            </Link>
      </ul>
       <Search/>
        <div className="flex py-4">
          <li className="nav-item px-6 list-none ">
            <a className="nav-link  hover:text-gray-700 focus:text-gray-700 " href="#">Iniciar sesión</a>
            <button type="button" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Crear cuenta</button>
          </li>
        </div>
    </nav>
  </header>

        </>
    )
  }


export default Header
  
  