<template>
  <div class="w-100 text-center d-flex justify-content-center">
    <div class="position-relative text-center w-75">
      <input
        :type="InputType"
        :placeholder="PlaceHolder"
        :value="inputValue"
        @input="onInputChange"
        class="border rounded-2 red-border-1 border-2 bg-color-white red-text-1 fs-2 px-4 py-2 w-100"
      />
      <div class="h-100 position-absolute end-0 d-inline p-2">
        <IconSubmit
          v-show="ShowSubmit"
          @click="handleSubmit"
          color="white"
          class="bg-red-1 rounded-5 p-2 h-100"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import IconSubmit from '../icons/IconSubmit.vue'

export default {
  components: {
    IconSubmit
  },
  props: {
    InputType: {
      type: String,
      required: true
    },
    PlaceHolder: {
      type: String,
      default: ''
    },
    SubmitAction: {
      type: Function,
      default: null
    },
    ShowSubmit: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const inputValue = ref(props.value) // Create a local ref for input value

    // Emit the input value change to parent
    const onInputChange = (event) => {
      inputValue.value = event.target.value // Update local value
      emit('input-change', inputValue.value) // Emit custom event with new value
    }

    const handleSubmit = () => {
      //console.log('Form submitted!')
      if (props.SubmitAction) {
        props.SubmitAction(inputValue.value) // Pass the input value to the SubmitAction
      }
    }

    return {
      inputValue,
      onInputChange, // Expose the input change handler
      handleSubmit
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
.bg-color-white {
  background-color: $vt-c-white;
}
.red-border-1 {
  border-color: $red-1 !important;
}
</style>
