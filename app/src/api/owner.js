import axios from '../fetch/axios'

const owner = {
    getOwnerPublic: (id_owner) =>{
        return axios.get(`/user/owner/get/${id_owner}`)
    },
}
export default owner