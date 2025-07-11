<template>
  <hr>
  <br>
    <div>
      <h4><span class="font-weight-bold">Step 2:</span> Set Name for Webhook</h4>
      <div class="mb-4 space-y-2">
        <input v-model="name" type="text" placeholder="Input custom name for Webhook here (E.g. Issue notification)" class="form-control"/>
      </div>
      <div class="space-x-2 mb-4">
        <button @click="previous" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Previous
      </button>
        <button @click="next" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Next
        </button>
      </div>
      <div v-if="showEmptyNotification" class="notification">Please provide a name for the Webhook.</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        name: '',
        showEmptyNotification: false,
      };
    },
    methods: {
      next() {
        if (this.name === ''){
          this.showEmptyNotification = true;
              setTimeout(() => {
                this.showEmptyNotification = false;
              }, 3000);
        }else{
        this.$emit('next', { name: this.name });}
      },
      previous() {
        this.$emit('previous');
      }
    }
  });
  </script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.custom-box {
  @apply bg-gray-100 p-4 rounded-lg;
  border: 1px solid $gray-2;
}

.custom-link {
  color: $accent-color;
  &:hover {
    text-decoration: underline;
  }
}

.responsive-text {
  font-size: 1rem;

  @include responsive(small) {
    font-size: 1.2rem;
  }

  @include responsive(medium) {
    font-size: 1.4rem;
  }

  @include responsive(large) {
    font-size: 1.6rem;
  }

  @include responsive(xlarge) {
    font-size: 1.8rem;
  }

  @include responsive(xxlarge) {
    font-size: 2rem;
  }
}

.bg-primary-color {
  background-color: $primary-color;
}
.bg-secondary-color {
  background-color: $secondary-color;
}
.bg-accent-color {
  background-color: $accent-color;
}
.bg-gray-1 {
  background-color: $gray-1;
}
.bg-gray-2 {
  background-color: $gray-2;
}
.bg-brown-1 {
  background-color: $brown-1;
}
.bg-pink-red-1 {
  background-color: $pink-red-1;
}
.bg-red-1 {
  background-color: $red-1;
}

.color-white {
  color: $vt-c-white;
}

.notification {
    position: fixed;
    left: 40%;
    background-color: #de5252;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
  
  .notification.hidden {
    opacity: 0;
  }
</style>