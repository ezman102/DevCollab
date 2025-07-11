<script>
import { ref } from 'vue'

export default {
  props: {
    LoginState: {
      type: String,
      Required: false,
      default: 'NEW_USER'
    },
    defaultTeamId: {
      type: Number,
      Required: false,
      default: 0
    }
  },
  setup(props) {
    const selectedTeamId = ref(props.defaultTeamId)
    const updateSelectedTeam = (value) => {
      selectedTeamId.value = value
    }
    const goDashboard = () => {
      //console.log(selectedTeamId.value)
      this.$router.push({ name: 'projects' })
    }

    return {
      selectedTeamId,
      goDashboard,
      updateSelectedTeam
    }
  },
  methods: {
    goLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style lang="scss" scoped>
.red-text-1 {
  color: $red-1;
}

.large-text {
  font-size: 6rem;
}
.bg-red-1 {
  background-color: $red-1;
}
.color-white {
  color: $vt-c-white;
}
@media (max-width: 720px) {
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
  <div>
    <button
      v-if="LoginState === 'NEW_USER'"
      @click="goLogin"
      class="large-text my-auto bg-red-1 color-white p-6 rounded-5"
    >
      CONNECT
    </button>
    <button
      v-if="LoginState === 'EXISTING_USER'"
      @click="goDashboard"
      class="my-auto mx-auto bg-red-1 color-white p-6 rounded-5"
    >
      <div class="fs-2">Go To</div>
      <div class="large-text-2">DEVCOLLAB</div>
    </button>
    <div class="fs-1 red-text-1 fw-bolder mt-6">EVERY</div>
    <div class="fs-3 red-text-1 fw-bolder">
      <span> #Team </span>
      <span> #Task </span>
      <span> #Project </span>
    </div>
  </div>
</template>
