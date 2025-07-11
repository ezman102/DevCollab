<script>
export default {
  setup() {
    localStorage.removeItem('auth_token')
    window.location.href = '/welcome'
  }
}
</script>

<template>
  <v-app></v-app>
</template>
