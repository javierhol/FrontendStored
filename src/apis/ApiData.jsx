import axios from "axios"
let urlServer = "http://localhost:3002"
export const PostDataUser = async (postDataUser) => await axios.post(`${urlServer}/login`, { postDataUser})
export const postRecoveryEmail = async (email) => await axios.post(`${urlServer}/recovery`, { email})
export const recoverycode = async (data) => await axios.post(`${urlServer}/recoverycode`, { data})
export const newPassword = async (data) => await axios.post(`${urlServer}/newPass`, { data})