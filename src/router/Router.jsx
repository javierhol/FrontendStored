import {Route,Routes} from "react-router-dom"
import { HomePage} from "../components/HomePage";
import {AuthUser}from '../components/AuthUser';
import {Signup} from '../components/Signup';
import { InforStored } from "../pages/InfoStored/InforStored";

export const Router = () => {
  return (
    <>
    <Routes>
      
    <Route path='/auth' element={<AuthUser/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/homepage' element={<HomePage/>}/>
    <Route path='/infStored' element={<InforStored/>}/>
    </Routes>
    </>
  )
}
