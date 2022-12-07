import {Route,Routes} from "react-router-dom"
import { HomePage} from "../components/HomePage";
import {AuthUser}from '../components/AuthUser';
import {Signup} from '../components/Signup';

export const Router = () => {
  return (
    <>
    <Routes>
      
    <Route path='/auth' element={<AuthUser/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/homepage' element={<HomePage/>}/>

    </Routes>
    </>
  )
}
