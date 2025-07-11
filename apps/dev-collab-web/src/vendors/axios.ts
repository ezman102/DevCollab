import axios from 'axios'
import LoginApi from '../api/login.api'

if (process.env.API_URL === undefined || process.env.API_URL === null) {
  process.env.API_URL = 'http://127.0.0.1:3000'
}

const auth = LoginApi.getLocalToken()
const _axios = axios.create({
  baseURL: `${process.env.API_URL}/api/`,
  headers: {
    authorization: auth
  }
})

export const useAxios = () => _axios
