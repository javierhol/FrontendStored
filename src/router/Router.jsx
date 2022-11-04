import {Route,Routes} from "react-router-dom"
import { AuthUser } from "../components/AuthUser";

export const Router = () => {
  return (
    <>
    <Routes>
      
    <Route path='/auth' element={<AuthUser/>}/>

    </Routes>
    </>
  )
}
