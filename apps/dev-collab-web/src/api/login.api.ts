import { useAxios } from '@/vendors/axios'

const LoginApi = {
  async getLoginToken(email: string, password: string | null, vcode: string | null) {
    const payload = {
      email: email,
      password: password,
      vcode: vcode
    }
    const axios = useAxios()

    try {
      const response = await axios.post('/account/login/password', payload)
      if (response.data.result === 'SUCCESS' && response.data.token) {
        localStorage.setItem('auth_token', response.data.token) // Store the token
        //console.log('Token stored:', response.data.token) // For debugging
        return { success: true, token: response.data.token, message: 'LOGIN_SUCCESS' }
      } else {
        return { success: false, message: response.data.error || 'LOGIN_FAILED' }
      }
    } catch (error) {
      //this.message = 'Login failed: ' + (error.response?.data?.message || error.message)
      //console.error('Axios error:', error)
      return { success: false, message: 'LOGIN_FAILED' }
    }
  },

  async checkToken(token: string) {
    const payload = {
      token: token
    }
    const axios = useAxios()
    try {
      const response = await axios.post('/account/login/token', payload)
      if (response.data.result === 'SUCCESS') {
        return {
          success: true,
          user: response.data.user,
          user_details: {
            username: response.data.detail.name,
            email_2fa: response.data.detail.email_2fa
          },
          message: 'TOKEN_SUCCESS'
        }
      } else {
        return { success: false, message: response.data.error || 'TOKEN_FAILED' }
      }
    } catch (error) {
      return { success: false, message: 'TOKEN_FAILED' }
    }
  },

  getLocalToken() {
    const token = localStorage.getItem('auth_token')
    if (token != null) {
      return token
    } else {
      return ''
    }
  },
  async update_2fa_setting(active: boolean) {
    const token = this.getLocalToken()
    const payload = {
      token: token,
      active: active ? 'ON' : 'OFF'
    }
    const axios = useAxios()
    try {
      const response = await axios.post('/account/2fa-setting', payload)
      if (response.data.result === 'SUCCESS') {
        return { success: true, message: 'UPDATE_SUCCESSFUL' }
      } else {
        return { success: false, message: 'UPDATE_FAILED' }
      }
    } catch (error) {
      return { success: false, message: 'UPDATE_FAILED' }
    }
  },

  async updatePassword(password: string | null) {
    const token = this.getLocalToken()
    const payload = {
      token: token,
      password: password
    }
    const axios = useAxios()
    try {
      const response = await axios.post('/account/password', payload)
      if (response.data.result === 'SUCCESS') {
        localStorage.setItem('auth_token', response.data.token)
        return { success: true, token: response.data.token, message: 'REQUEST_SUCESS' }
      } else {
        return { success: false, message: response.data.error || 'REQUEST_FAILED' }
      }
    } catch (error) {
      return { success: false, message: 'REQUEST_FAILED' }
    }
  },
  async updateUsername(username: string | null) {
    const token = this.getLocalToken()
    const payload = {
      token: token,
      username: username
    }
    const axios = useAxios()
    try {
      const response = await axios.post('/account/username', payload)
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

export default LoginApi // Default export
