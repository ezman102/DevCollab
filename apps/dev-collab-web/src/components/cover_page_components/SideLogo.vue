<script>
import RotateCharacter from '../../components/cover_page_components/RotateCharacter.vue'
import Logo from '../../../public/logo-gray.png'

export default {
  data() {
    return {
      Logo: Logo
    }
  },
  components: {
    RotateCharacter: RotateCharacter
  }
}
</script>
<style lang="scss" scoped>
.logo-text {
  font-size: 6rem;
  line-height: 4.5rem;
  text-align: center;
}
.color-gray-2 {
  color: $gray-2;
}
.red-text-1 {
  color: $red-1;
}
</style>
<template>
  <div class="p-4 bg-gray-2 color-white position-fixed top-0 end-0 mx-6 z-0 logo-div">
    <div class="text-center vh-100">
      <div class="pb-3">
        <img :src="Logo" alt="LOGO" style="height: 11.5rem" />
      </div>
      <div class="logo-text p-2 d-flex flex-sm-column color-gray-2">
        <RotateCharacter characterData="D" class="red-text-1"></RotateCharacter>
        <RotateCharacter characterData="E"></RotateCharacter>
        <RotateCharacter characterData="V"></RotateCharacter>
        <RotateCharacter characterData="C" class="red-text-1"></RotateCharacter>
        <RotateCharacter characterData="O"></RotateCharacter>
        <RotateCharacter characterData="L"></RotateCharacter>
        <RotateCharacter characterData="L"></RotateCharacter>
        <RotateCharacter characterData="A"></RotateCharacter>
        <RotateCharacter characterData="B"></RotateCharacter>
      </div>
    </div>
  </div>
</template>
