<template>
  <div class="w-100 text-center d-flex justify-content-center">
    <div class="position-relative text-start w-75">
      <div
        class="border rounded-2 gray-border-2 border-2 bg-color-white gray-text-2 fs-2 px-4 py-2 w-100"
      >
        {{ text === '' ? 'Email' : text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.gray-border-2 {
  border-color: $gray-2;
}
.large-text {
  font-size: 6rem;
}

.bg-color-white {
  background-color: $vt-c-white;
}

.gray-text-2 {
  color: $gray-2;
}
</style>
