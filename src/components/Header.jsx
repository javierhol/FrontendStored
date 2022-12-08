import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/fuente.css";
export const Header = () => {
  return (
    <>
      <header className=" flex w-full justify-between items-center bg-white   border-2 border-gray-100 border-b-gray-100">
        <div className="flex  items-center">
          <div className="d">
            <h1 className="text-[#1876F2] text-3xl font-bold my-2 mx-2">
              Stored
            </h1>
          </div>

          <div className="div">
            <nav className=" mx-9">
              <ul className="flex imes-center">
                <li className="relative lik mx-3 text-[1.1rem] text-gray-600 todoFont">
                  <NavLink to="/" className="nav-item  inline-block relative ">
                    Servicios
                  </NavLink>
                </li>
                <li className="relative lik mx-3 text-[1.1rem] text-gray-600 todoFont">
                  <NavLink to="/" className="nav-item inline-block relative ">
                    Ayuda
                  </NavLink>
                </li>
                <li className="relative lik mx-3 text-[1.1rem] text-gray-600 todoFont">
                  <NavLink to="/" className="nav-item  inline-block relative  ">
                    Contctanos
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-96 ">
          <form>
            <div className="inpit w-96 border items-center  px-2 rounded-full flex">
              <div className="w-full">
                <input
                  type="text"
                  name="search"
                  placeholder="Que deseas buscar? "
                  className=" block w-full p-2 bg-transparent outline-none"
                />
              </div>
              <div className="sea">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-300 text-xl"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <ul className="mx-2 flex ">
            <li className=" ">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? " py-2 relative text-[1.1rem] active"
                    : " py-2 relative text-[1.1rem] lik"
                }
              >
                Iniciar sesión
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? `mx-4 border p-1.5 text-[1.1rem] bg-[#1876F2] todoFont px-4 text-white
                     hover:bg-white duration-200 hover:text-[#1876F2] rounded-full border-[#1876F2]`
                    : "mx-4 border p-1.5 text-[1.1rem] todoFont px-4 hover:bg-[#1876F2] duration-200 hover:text-white rounded-full border-[#1876F2]"
                }
              >
                Crear cuenta
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
