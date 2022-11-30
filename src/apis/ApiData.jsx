import axios from "axios"
var getUrl = "http://localhost:3002"
export const PostDataUser = async (postDataUser) => await axios.post(`${getUrl}/login`, { postDataUser})