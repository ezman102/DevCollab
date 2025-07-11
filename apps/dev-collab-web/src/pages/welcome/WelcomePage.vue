<script>
import Logo from '../../../public/logo-gray.png'
import SideLogo from '@/components/cover_page_components/SideLogo.vue'
import ConnectBtn from '@/components/cover_page_components/ConnectBtn.vue'
import GitHubBtn from '@/components/cover_page_components/GitHubBtn.vue'
import CoverFooter from '@/components/cover_page_components/CoverFooter.vue'
import LoginApi from '@/api/login.api'
export default {
  data() {
    return {
      Logo: Logo
    }
  },
  setup() {
    const checkToken = async () => {
      const token = localStorage.getItem('auth_token')

      if (token != '') {
        try {
          const data = await LoginApi.checkToken(token)
          console.log(data)
          if (data.success === true) {
            console.log('Hello')
            window.location.href = 'welcomeBack'
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    checkToken()
  },
  components: {
    GitHubBtn: GitHubBtn,
    SideLogo: SideLogo,
    ConnectBtn: ConnectBtn,
    CoverFooter: CoverFooter
  },
  methods: {
    goLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-div-sm {
  display: none;
}

.red-text-1 {
  color: $red-1;
}
.color-gray-2 {
  color: $gray-2;
}
@media (max-width: 720px) {
  .logo-div {
    display: none;
  }
  .logo-div-sm {
    display: block;
  }
}
</style>

<template>
  <v-app class="bg-image">
    <v-container class="vh-100 position-relative z-3 text-center flex-column d-flex">
      <div class="start-0 w-100 text-start d-flex">
        <GitHubBtn></GitHubBtn>
        <div class="ms-auto align-self-center logo-div-sm">
          <span><img :src="Logo" alt="LOGO" style="width: 1rem" />DEVCOLLAB </span>
        </div>
      </div>
      <div class="container-sm">
        <div class="h1 p-4 color-gray-2">Keeping Your Projects on Track</div>
        <div class="h2 p-2 color-gray-2">Synchronize Your Team's Efforts</div>
        <div class="h6 p-2 red-text-1">DEVCOLLAB</div>
      </div>
      <ConnectBtn class="my-auto"></ConnectBtn>
      <CoverFooter></CoverFooter>
      <SideLogo></SideLogo>
    </v-container>
  </v-app>
</template>
