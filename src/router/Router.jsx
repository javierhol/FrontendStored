import {Route,Routes} from "react-router-dom"
import { AuthUser } from "../components/AuthUser";
import { Signup } from "../components/Signup";

export const Router = () => {
  return (
    <>
   
    <Routes>
      
    <Route path='/' element={<AuthUser/>}/>
    <Route path='/signup' element={<Signup/>}/>

    </Routes>
    </>
  )
}
