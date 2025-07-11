<script>
import IconGithub from '@/assets/icons/Icon_github.svg'

export default {
  data() {
    return {
      IconGithub: IconGithub
    }
  },
  methods: {
    goToExternalWebsite() {
      window.location.href = 'https://github.com/cs5351-gp22-2024/DevCollab'
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-btn {
  width: 32px;
  height: 32px;
}
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
</style>

<template>
  <div class="color-gray-2">
    <img :src="IconGithub" alt="GitHub Icon" class="icon-btn" @click="goToExternalWebsite" />
    <div @click="goToExternalWebsite">Open Source in GitHub</div>
  </div>
</template>
