import { useAxios } from '@/vendors/axios'

const SignupAPI = {
  async getVCode(email: string) {
    const axios = useAxios()
    try {
      const response = await axios.get('/account/v-code?email=' + email)
      if (response.data.result === 'SUCCESS') {
        return { success: true, email: response.data.email, message: 'REQUEST_SUCESS' }
      } else {
        return { success: false, message: response.data.error || 'REQUEST_FAILED' }
      }
    } catch (error) {
      return { success: false, message: 'REQUEST_FAILED' }
    }
  },

  async createAccount(
    email: string,
    password: string | null,
    vcode: string | null,
    invitation: string | null
  ) {
    const payload = {
      email: email,
      password: password,
      code: vcode,
      invitation: invitation
    }
    const axios = useAxios()
    try {
      const response = await axios.post('/account/create', payload)
      if (response.data.result === 'SUCCESS') {
        localStorage.setItem('auth_token', response.data.token)
        return { success: true, token: response.data.token, message: 'REQUEST_SUCESS' }
      } else {
        return { success: false, message: response.data.error || 'REQUEST_FAILED' }
      }
    } catch (error) {
      return { success: false, message: 'REQUEST_FAILED' }
    }
  }
}

export default SignupAPI // Default export
