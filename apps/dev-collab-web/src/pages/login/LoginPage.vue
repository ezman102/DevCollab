<template>
  <v-app class="bg-image">
    <div class="position-fixed vh-100 vw-100 d-flex">
      <div class="bg-cover w-75 vh-100 opacity-75"></div>
      <div class="bg-splash vh-100 opacity-75"></div>
    </div>
    <v-container class="vh-100 position-relative z-3 text-center flex-column d-flex">
      <div class="start-0 w-100 text-start d-flex">
        <GitHubBtn></GitHubBtn>
        <div class="ms-auto align-self-center logo-div-sm">
          <span><img :src="Logo" alt="LOGO" style="width: 1rem" />DEVCOLLAB </span>
        </div>
      </div>
      <div class="container-sm">
        <div v-if="showEmailInput" class="large-text p-3 red-text-1">LOGIN</div>
        <div v-if="!showEmailInput" class="large-text p-3 red-text-1">WELCOME BACK</div>
        <div v-if="!showEmailInput" class="fs-3 red-text-1 fw-bolder">#{{ username }}</div>
        <div
          v-if="!showEmailInput"
          class="fs-6 pb-1 red-text-1 fw-bolder text-decoration-underline"
        >
          <span @click="refresh" class="cursor-pointer">(Change)</span>
        </div>
        <div class="h2 p-1 color-gray-2">Connect Your</div>
        <div class="h2 p-1 red-text-1">#Team #Task #Project</div>

        <!-- Email Input -->
        <InputEditText
          v-if="showEmailInput"
          class="mt-4"
          InputType="email"
          PlaceHolder="Email"
          @input-change="updateEmail"
          :ShowSubmit="true"
          :SubmitAction="checkEmail"
        ></InputEditText
        ><!-- Listen for input-change event -->

        <!-- Password Input -->
        <InputEditText
          v-if="showPasswordInput"
          class="mt-4"
          InputType="password"
          PlaceHolder="Password"
          @input-change="updatePassword"
          :ShowSubmit="true"
          :SubmitAction="submitPassword"
        ></InputEditText
        ><!-- Listen for input-change event -->

        <!-- Verification Code Input -->
        <InputEditText
          v-if="showVerificationInput"
          class="mt-4"
          InputType="number"
          PlaceHolder="Verification Code"
          @input-change="updateVerificationCode"
          :ShowSubmit="true"
          :SubmitAction="submitVerification"
        ></InputEditText
        ><!-- Listen for input-change event -->

        <div class="mt-2">
          <a class="red-text-1 text-decoration-underline fs-4" href="sign-up">
            Sign Up For DEVCOLLAB
          </a>
        </div>
      </div>

      <CoverFooter></CoverFooter>
      <SideLogo></SideLogo>
    </v-container>
  </v-app>
</template>
<script>
import Logo from '../../../public/logo-gray.png'
import SideLogo from '@/components/cover_page_components/SideLogo.vue'
import GitHubBtn from '@/components/cover_page_components/GitHubBtn.vue'
import CoverFooter from '@/components/cover_page_components/CoverFooter.vue'
import InputEditText from '@/components/cover_page_components/InputEditText.vue'
import LoginApi from '@/api/login.api'
import { ref } from 'vue'

export default {
  components: {
    GitHubBtn,
    SideLogo,
    CoverFooter,
    InputEditText
  },
  setup() {
    const LogoRef = Logo // Use Logo directly since it's a static import

    const showEmailInput = ref(true)
    const showPasswordInput = ref(false)
    const showVerificationInput = ref(false)
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const verificationCode = ref('')

    const updateEmail = (value) => {
      email.value = value // Update email value
    }

    const updatePassword = (value) => {
      password.value = value // Update password value
    }

    const updateVerificationCode = (value) => {
      verificationCode.value = value // Update verification code value
    }

    const checkEmail = () => {
      //console.log(email.value) // Use the email data property
      const data = {
        //email: 'test41321@gmail.com',
        //username: 'test41321@gmail.com',
        mfa: false // Set this to true or false based on your logic
      }

      // Update visibility based on the mfa value
      username.value = email.value
      showEmailInput.value = false // Hide email input

      if (data.mfa) {
        showPasswordInput.value = false // Hide password input
        showVerificationInput.value = true // Show verification input
      } else {
        showPasswordInput.value = true // Show password input
        showVerificationInput.value = false // Hide verification input
      }
    }

    const submitPassword = async () => {
      //console.log(email.value)
      //console.log(password.value) // Use the password data property
      const data = await LoginApi.getLoginToken(email.value, password.value, null)
      //console.log(data)
      try {
        if (data.success === true) {
          window.location.href = '/home'
        } else {
          alert('Login Failed. Invalid email or password. Please try again.')
        }
      } catch (error) {
        console.log(error)
        alert('Login Failed. [EXCEPTION]')
      }
    }

    const submitVerification = () => {
      console.log(email.value)
      //console.log(verificationCode.value) // Use the verification code data property
    }

    const refresh = () => {
      window.location.reload()
    }

    /*   // Call checkEmail when the email input changes
    watch(email, (newValue) => {
      if (newValue) {
        checkEmail()
      }
    }) */

    return {
      Logo: LogoRef,
      showEmailInput,
      showPasswordInput,
      showVerificationInput,
      username,
      updateEmail,
      updatePassword,
      updateVerificationCode,
      checkEmail,
      submitPassword,
      submitVerification,
      refresh
    }
  }
}
</script>

<style lang="scss" scoped>
.large-text {
  font-size: 6rem;
}
.logo-div-sm {
  display: none;
}
.red-text-1 {
  color: $red-1;
}
.color-gray-2 {
  color: $gray-2;
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
.bg-splash {
  background-image: url('/public/splash.svg');
  width: 15%;
  background-size: cover;
  background-position: center;
}
.bg-cover {
  background-color: $vt-c-white;
}
</style>
