import React from 'react'
import { useNavigate, Navigate, Outlet } from 'react-router-dom'

export const ProtectedRouter = ( { users, children,redirectTo="/auth"} ) => {

  if (!users) {
    return <Navigate to={redirectTo} />
  }
  // const navigate = useNavigate()
  return children ? children : <Outlet />
}
