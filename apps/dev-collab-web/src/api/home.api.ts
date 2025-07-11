import { useAxios } from '@/vendors/axios'
import type { HomeMessageModel } from 'shared/models/home'

const _homeApi = {
  async getMessages() {
    const axios = useAxios()
    const { data } = await axios.get('/home/messages')

    return data as HomeMessageModel
  }
}

export const useHomeApi = () => _homeApi
