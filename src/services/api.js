import axios from 'axios'


const api = axios.create({
  baseURL:'https://allanapi.herokuapp.com'
})


export default api