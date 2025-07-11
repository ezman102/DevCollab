<script>
export default {
  props: {
    SignState: {
      type: String, //EMAIL || VERIFY
      required: true
    },
    ClickAction: {
      type: Function, //EMAIL || VERIFY
      required: true
    }
  },
  setup(props) {
    const handleSubmit = () => {
      console.log('Form submitted!')
      if (props.ClickAction) {
        props.ClickAction() // Pass the input value to the SubmitAction
      }
    }
    return {
      handleSubmit
    }
  }
}
</script>
<style lang="scss" scoped>
.red-text-1 {
  color: $red-1;
}

.bg-red-1 {
  background-color: $red-1;
}
.color-white {
  color: $vt-c-white;
}
</style>
<template>
  <div class="w-100 text-center d-flex justify-content-center">
    <div class="position-relative text-end w-75 py-4">
      <button @click="handleSubmit" class="fs-4 my-auto bg-red-1 color-white py-2 px-4 rounded-3">
        {{ SignState == 'EMAIL' ? 'Verify Email' : 'Sign Up' }}
      </button>
    </div>
  </div>
</template>
