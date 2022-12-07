import { Link} from "react-router-dom"
import { Search } from "./Search";


export const Header=() =>{
    return (

        <>

        
        <header className="flex bg-white w-full h-12">
    <h1 className="text-[#1876F2] font-medium  sm:m-2 sm:text-xl hover:text-decoration md:ml-5 lg:mr-3 lg:ml-5 lg:m-2 lg:text-2xl xl:text-2xl xl:mt-2 2xl:text-3xl 2xl:mt-1 2xl:m-5">Stored</h1>
    <nav className="flex w-full justify-around">
      <ul className="flex sm:justify-between sm:text-xs sm:py-4 lg:w-60 lg:text-base xl:w-44 xl:mb-3 xl:mr-5 2xl:w-1/4 2xl:justify-around 2xl:mb-3 2xl:p-3">
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
        <div className="">
           <li className="nav-item sm:m-2 list-none lg:m-1 lg:w-60">
            <Link to="/" className="nav-item py-2 ">
              <span className="nav-link hover:text-gray-700  focus:text-gray-700 sm:text-xs lg:mr-3 lg:text-base xl:text-base 2xl:mr-0">Iniciar sesión</span>
            </Link>
            <button type="button" className="inline-block px-3 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out sm:text-xs sm:ml-2 sm:mt-1 lg:ml-1 lg:text-base lg:py-0 lg:mt-2 xl:text-base 2xl:ml-5">Crear cuenta</button>
          </li>
        </div>
    </nav>
  </header>

        </>
    )
  }


export default Header
  
  