<template>
  <div class="container">
    <!-- <h1>Home page</h1>
    <p>Messages from Home: {{ store.messages }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from './home.store'
const store = useHomeStore()
location.href = '/profile'
</script>

<!-- 
if CSS, no need to add lang="scss"
better to use scss
scope means the css will only be applied to this file
-->
<style lang="scss" scoped></style>
