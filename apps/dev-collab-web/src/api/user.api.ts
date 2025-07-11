import type { AxiosInstance } from 'axios'
import type { UserModel } from 'shared/models/user'
import LoginApi from './login.api'

export const useUserApi = (axios: AxiosInstance) => ({
  async getUsers(): Promise<UserModel[]> {
    const token = LoginApi.getLocalToken()
    const { data } = await axios.get(`/users`, {
      headers: {
        Authorization: token
      }
    })
    //console.log(data)
    return data
  }
})
