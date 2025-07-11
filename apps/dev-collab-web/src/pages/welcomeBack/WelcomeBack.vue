<script>
import Logo from '../../../public/logo-gray.png'
import SideLogo from '@/components/cover_page_components/SideLogo.vue'
import ConnectBtn from '@/components/cover_page_components/ConnectBtn.vue'
import GitHubBtn from '@/components/cover_page_components/GitHubBtn.vue'
import CoverFooter from '@/components/cover_page_components/CoverFooter.vue'

import TeamSelector from '@/components/cover_page_components/TeamSelector.vue'
import { ref, onMounted } from 'vue'
import LoginApi from '@/api/login.api'

export default {
  data() {
    return {
      Logo: Logo
    }
  },

  setup() {
    const Username = ref('Username')
    const defaultTeamId = ref(1001) // ref(0)
    const getUserInfo = async () => {
      const info = await LoginApi.checkToken(LoginApi.getLocalToken())
      Username.value = info.user_details.username
    }
    if (LoginApi.getLocalToken() == '') {
      location.href = './welcome'
    }
    onMounted(() => {
      getUserInfo()
    })
    return {
      Username,
      defaultTeamId,
      getUserInfo
    }
  },
  components: {
    //TeamSelector: TeamSelector,
    GitHubBtn: GitHubBtn,
    SideLogo: SideLogo,
    ConnectBtn: ConnectBtn,
    CoverFooter: CoverFooter
  },

  methods: {
    findTeam() {
      this.$router.push({ name: 'projects' })
    },
    updateSelectedTeam(id) {
      this.$refs.ConnectBtn.updateSelectedTeam(id)
    },
    goHomePage() {
      window.location.href = '/home'
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
.large-text {
  font-size: 6rem;
}
@media (max-width: 1440px) {
  .large-text {
    font-size: 2rem;
  }
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
        <div class="h1 p-4 color-gray-2">Welcome Back,</div>
        <div class="h2 p-2 large-text red-text-1">{{ Username }}</div>
        <div class="h6 p-2 red-text-1">DEVCOLLAB</div>
      </div>
      <!-- <div class="w-100 text-center d-flex justify-content-center">
        <div class="w-50">
          <TeamSelector
            :defaultTeamId="defaultTeamId"
            @updateSelectedTeam="updateSelectedTeam"
          ></TeamSelector>
          <div class="red-text-1 fs-6 mt-2 text-start">
            <span class="cursor-pointer" @click="findTeam">I'm looking for another team</span>
          </div>
        </div>
      </div> -->
      <ConnectBtn
        ref="ConnectBtn"
        class="my-auto"
        LoginState="EXISTING_USER"
        :defaultTeamId="defaultTeamId"
        @click="goHomePage"
      ></ConnectBtn>
      <CoverFooter></CoverFooter>
      <SideLogo></SideLogo>
    </v-container>
  </v-app>
</template>
