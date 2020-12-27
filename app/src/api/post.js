import axios from '../fetch/axios'

const post = {
    getPostFav: () =>{
        return axios.get('/post/infor/2', {type: 2})
    },
    getPostView: () =>{
        return axios.get('/post/infor/1', {type: 1})
    },
    getAll: () =>{
        return axios.get('/post/infor/0',  {type: 0})
    },
    search: (data) => {
        return axios.post(`/post/all/search`, data)
    },
    countview: (id_post) => {
        return axios.post(`/post/countview/${id_post}`)
    },
    countlike: (id_post) => {
        return axios.post(`/post/countlike/${id_post}`)
    },
    getcomment: (id_post) => {
        return axios.get(`/comment/post/${id_post}`)
    },
    report: (id_post, id_member, content)=>{
        return axios.post("/report/add", {id_member: id_member, id_post:id_post, content: content})
    },
    getDetail: (id) =>{
        return axios.get(`post/${id}`)
    }
}
export default post