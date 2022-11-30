import {Route,Routes} from "react-router-dom"
import { AuthUser } from "../components/AuthUser";
import { Signup } from "../components/Signup";
import {UserContextData} from "../hooks/context/UserContextData"
export const Router = () => {
  return (
    <>
   
      <UserContextData>
    <Routes>
    <Route path='/' element={<AuthUser/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
      </UserContextData>
    </>
  )
}
