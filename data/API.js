import axios from 'axios'
import { BACKEND_URL } from './const'

const addUser = async (body) => {
    return await axios.post(`${BACKEND_URL}/auth/register`, body,{
        headers: {
        }
    }).then(response => {
        console.log(response)
    })
}


export { addUser }