<template>
  <v-app class="bg-image">
    <div class="position-fixed vh-100 vw-100 d-flex">
      <div class="bg-cover w-75 vh-100 opacity-75"></div>
      <div class="bg-splash vh-100 opacity-75"></div>
    </div>
    <v-container class="vh-100 position-relative z-3 text-start">
      <div class="start-0 w-100 text-start d-flex">
        <GitHubBtn></GitHubBtn>
        <div class="ms-auto align-self-center logo-div-sm">
          <span><img :src="Logo" alt="LOGO" style="width: 1rem" />DEVCOLLAB </span>
        </div>
      </div>
      <div class="container-sm mx-0">
        <div v-if="signupState === 'EMAIL'" class="large-text p-3 red-text-1 fw-bolder">
          Join Us
        </div>
        <div v-if="signupState === 'VERIFY'" class="large-text p-3 red-text-1 fw-bolder">
          Verification
        </div>

        <!-- Email Input -->
        <InputEditText
          v-if="signupState === 'EMAIL'"
          class="mt-4 justify-content-start"
          InputType="email"
          PlaceHolder="Email"
          @input-change="updateEmail"
        ></InputEditText>

        <!-- Password Input -->
        <InputEditText
          v-if="signupState === 'EMAIL'"
          class="mt-4 justify-content-start"
          InputType="password"
          PlaceHolder="Password"
          @input-change="updatePassword"
        ></InputEditText>

        <!-- Password Input -->
        <InputEditText
          v-if="signupState === 'HIDDEN'"
          class="mt-4 justify-content-start"
          InputType="number"
          PlaceHolder="Invitation Code (Optional)"
          @input-change="updateInvitationCode"
        ></InputEditText>
        <SignUpBtn
          v-if="signupState === 'EMAIL'"
          class="justify-content-start"
          :ClickAction="getVerificationCode"
          SignState="EMAIL"
        ></SignUpBtn>
        <!-- Email Input -->
        <SignUpTextView
          v-if="signupState === 'VERIFY'"
          class="justify-content-start"
          :text="email"
        ></SignUpTextView>
        <!-- Verification Code Input -->
        <InputEditText
          v-if="signupState === 'VERIFY'"
          class="mt-4 justify-content-start"
          InputType="number"
          PlaceHolder="Verification Code"
          @input-change="updateVerificationCode"
        ></InputEditText>
        <SignUpBtn
          v-if="signupState === 'VERIFY'"
          class="justify-content-start"
          :ClickAction="submitVerification"
          SignState="VERIFY"
        ></SignUpBtn>
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
import SignUpBtn from '@/components/cover_page_components/SignUpBtn.vue'
import SignUpTextView from '@/components/cover_page_components/SignUpTextView.vue'
import SignupAPI from '@/api/signup.api'
import { ref } from 'vue'
import GroupApi from '@/api/group.api'

export default {
  components: {
    GitHubBtn,
    SignUpTextView,
    SideLogo,
    CoverFooter,
    InputEditText,
    SignUpBtn
  },
  setup() {
    const LogoRef = Logo // Use Logo directly since it's a static import
    const signupState = ref('EMAIL')
    const email = ref('')
    const password = ref('')
    const invitationCode = ref('')
    const verificationCode = ref('')
    const getVerificationCode = async () => {
      //console.log('GET Verification')
      const data = await SignupAPI.getVCode(email.value)
      try {
        if (data.success === true) {
          signupState.value = 'VERIFY'
          //FOR DEBUG
          alert('USE `535153` to bypass the Verification code[DEBUG ONLY]')
          return
        } else {
          alert('Request Verification Code failed. Invalid email. Please try again.')
        }
      } catch (error) {
        //console.log(error)
        alert('Request Verification Code failed.[EXCEPTION]')
      }
    }

    const submitVerification = async () => {
      /*       console.log('Checking Verification')
      console.log(verificationCode.value)
      console.log('Email:', email.value)
      console.log('Password:', password.value)
      console.log('Invitation Code:', invitationCode.value)
      console.log('Verification Code:', verificationCode.value) */
      const data = await SignupAPI.createAccount(
        email.value,
        password.value,
        verificationCode.value,
        invitationCode.value
      )
      try {
        if (data.success === true) {
          await GroupApi.createGroup('Default Group')

          location.href = '/home'

          return
        } else {
          alert('Create Account failed. Please try again.')
        }
      } catch (error) {
        //console.log(error)
        alert('Create Account failed.[EXCEPTION]')
      }
    }

    return {
      Logo: LogoRef,
      signupState,
      email,
      password,
      invitationCode,
      verificationCode,
      getVerificationCode,
      submitVerification
    }
  },
  methods: {
    updateEmail(newEmail) {
      this.email = newEmail // Update email value
    },
    updatePassword(newPassword) {
      this.password = newPassword // Update password value
    },
    updateInvitationCode(newCode) {
      this.invitationCode = newCode // Update invitation code value
    },
    updateVerificationCode(newCode) {
      this.verificationCode = newCode // Update invitation code value
    }
  }
}
</script>

<style lang="scss" scoped>
.large-text {
  font-size: 6rem;
}
.justify-content-start {
  justify-content: start !important;
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
