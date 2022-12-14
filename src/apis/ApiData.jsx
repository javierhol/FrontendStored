import axios from "axios"
let urlServer = "http://localhost:3002"
export const PostDataUser = async (postDataUser) => await axios.post(`${urlServer}/login`, { postDataUser})
export const postRecoveryEmail = async (email) => await axios.post(`${urlServer}/recovery`, { email})
export const recoverycode = async (data) => await axios.post(`${urlServer}/recoverycode`, { data})
export const newPassword = async (data) => await axios.post(`${urlServer}/newPass`, { data})
export const AuthGoogle = async (data) => await axios.post(`${urlServer}/authgoogleAccount`, { data})


// Data Admin Register

export const PostDataAdmin = async (postDataAdmin) => await axios.post(`${urlServer}/register`, { postDataAdmin})
export const tokenData = async (tokenData,token) => await axios.post(`${urlServer}/register`, {tokenData},{
    headers: {
        "acc-token-data":token
    }
})

// Data User Register
let accessToken=localStorage.getItem("secure_token")
export const PostDataUserRegister = async (postDataUserRegister) => await axios.post(`${urlServer}/registerUser`, { postDataUserRegister},{
    headers: {
        "acc-token-data":accessToken
    }
    })

