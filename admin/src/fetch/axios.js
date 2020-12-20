import axios from "axios"
import {getToken} from '../Utils/Common'

let token = getToken()
console.log("token: " + token)
axios.defaults.headers.common.Authorization = `Bearer ${token}`

axios.interceptors.response.use(
    response => response,
    (error) => {
        if(error.response.status === 401 ) {
            console.log('401');
        }
        return Promise.reject(error);
    }
);
export default axios;

// put formAxios in its own module to reuse it across the project
// const formAxios = axios.create({
//     transformRequest: [function (data, headers) {
//         alert(typeof data)
//         console.log(data)
//         if (headers['Content-Type'] && headers['Content-Type'].startsWith('multipart/form-data')) {
//             const form = new FormData();
//             for (const key in data) {
//                 const value = data[key];
//                 if (Array.isArray(value)) {
//                     const arrayKey = `${key}[]`;
//                     value.forEach(v => {
//                         form.append(arrayKey, v);
//                     });
//                 } else{
//                     form.append(key, value);
//                 }
//             }
//             return form;
//         }

//         return data;
//     }],
// });
// export default formAxios