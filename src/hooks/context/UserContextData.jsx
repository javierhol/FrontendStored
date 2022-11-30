import React, { createContext, useState, useContext } from "react";
import {PostDataUser} from "../../apis/ApiData"
export const contextUserAdmin = createContext()

export const usePostAuth = () => {
  const contextUser = useContext( contextUserAdmin );
  return contextUser;
}
export const UserContextData = ({children}) => {
  const [getUserPost, setGetUserPostAut] = useState([])
  
  const createPostUser = async ( postDataUser ) => {
    setGetUserPostAut(...getUserPost,postDataUser)
    const response = await PostDataUser( postDataUser );
    return response
 }
  return <contextUserAdmin.Provider value={{

    getUserPost,
    setGetUserPostAut,
    createPostUser
  }}  >

    {children}
  </contextUserAdmin.Provider>
  
}
