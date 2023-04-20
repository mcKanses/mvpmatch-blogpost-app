import axios from 'axios'

const BACKEND_URL = 'http://localhost:8000'

const apiRequest = axios.create({
  baseURL: BACKEND_URL
})

export default apiRequest