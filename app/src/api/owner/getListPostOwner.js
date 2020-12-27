import axios from '../../fetch/axios'

const post = {
    getListPostAllActive :  () =>{
        return axios.get('/post/all/search')
    },
    // "status": "pending"
    getListPostAllPendding :  () =>{
        return axios.get('/post/all/search', {status: "pending"})
    },
    getPostType: (id_owner, status , available) =>{
        return axios.get('/post/owner/type', {id_owner: id_owner, status : status , available : available})
    },
    search: (data) =>{
        return axios.post(`/post/all/search`, data)
    }
}

export default post