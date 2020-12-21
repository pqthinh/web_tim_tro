import axios from "axios"
import {getToken} from '../Utils/Common'

let token = getToken()
console.log("token: " + token)
axios.defaults.headers.common.Authorization = `Bearer ${token}`

axios.interceptors.response.use(
    response => response,
    (error) => {
        if(error.response.status === 401 ) {
            console.log('401: Token het han hoac bi fake'); 
        }
        return Promise.reject(error);
    }
);
export default axios;