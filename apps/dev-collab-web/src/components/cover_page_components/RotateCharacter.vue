<script>
export default {
  props: {
    characterData: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.rotate {
  transform: rotate(90deg);
}
</style>

<template>
  <span class="rotate fw-bolder">
    {{ characterData }}
  </span>
</template>
