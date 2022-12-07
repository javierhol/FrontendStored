import { useState } from "react";
import { Route, Routes } from "react-router-dom"
import { AuthUser } from "../components/AuthUser";
import { Signup } from "../components/Signup";
import { UserContextData } from "../hooks/context/UserContextData"
import { Admin } from "../pages/Admin/Admin";
import { Home } from "../pages/Home";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import RecoveryPass from "../pages/RecoveryPass";
import CodePassword from "../pages/CodePassword";
import NewPassword from "../pages/newPassword";
import Inventario from "../views/Inventario";
import {UserRegister} from '../components/UserRegister';
export const Router = () => {
  const token = localStorage.getItem( 'secure_token' )
  const perfil_rol = localStorage.getItem( 'perfil_rol' )
  let tokeVerify = token ? token : null
  let permision = perfil_rol ? perfil_rol : null
  let usersData = {
     tokeVerify,
     permisions:[permision]
  }
  const [users, setUsers] = useState(usersData)
  return (
    <>
      <UserContextData>
        <Routes>

          <Route path='/login' element={<AuthUser />} />
          <Route path='/newPassword+auth=true' element={<NewPassword/>} />
          <Route path="/recovery+password/identify" element={<RecoveryPass/>}/>
          <Route path="/verifyc+code/identify" element={<CodePassword/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route index element={<Home />} />
          <Route element={<ProtectedRouter isAllowed={!!users.tokeVerify && users.permisions.includes( "admin" )}
          redirectTo="/inventario"/>}>
          <Route path='/dasboard' element={<Admin />} />

          </Route>
          <Route path='/inventario' element={
            <ProtectedRouter  isAllowed={!!users && users.permisions.includes( "usuario" ) }>
              <Inventario />
            </ProtectedRouter>
          } />
        </Routes>
      </UserContextData>
    </>
  )
}
