<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-6">Automation</h1>
    <h2 class="text-2xl font-semibold mb-4">Repository Automation</h2>
    <section class="mb-8">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 rounded">
          <div @click="githubPage" class="bg-gray-100 p-4 rounded-lg hover-div">
            <div class="block">
              <div class="icon">
                <img :src="github" alt="Github Icon" />
              </div>
              <div class="text">
                <p class="font-weight-bold">Github<br>Webhook</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 rounded">
          <div @click="availableSoon = true" class="bg-gray-100 p-4 rounded-lg hover-div">
            <div class="block">
              <div class="icon">
                <img :src="gitlab" alt="Gitlab Icon" />
              </div>
              <div class="text">
                <p class="font-weight-bold">Gitlab<br>Webhook</p>
              </div>
            </div>
          </div>
          <div v-if="availableSoon"
            class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div class="bg-white p-5 rounded-lg shadow-xl w-96">
              <h3 class="text-lg font-semibold mb-4">Available Soon</h3>
              <button @click="availableSoon = false"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>

  <!-- <div class="container mx-auto p-4">
    <section class="mb-8">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 rounded">
          <div @click="sendMessage" class="bg-red-400 p-4 rounded-lg hover-div">
            <div class="block">
              <div class="text">
                <p>WebSocket TEST</p>
              </div>
            </div>
          </div>
          <ul>
            <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div> -->
</template>

// For icons & Page navigation
<script lang="ts">
import { defineComponent } from 'vue'
import type { Router } from 'vue-router'
import github from '@/assets/icons/Icon_github.svg'
import gitlab from '@/assets/icons/Icon_gitlab.svg'

export default defineComponent({
  data() {
    return {
      github: github,
      gitlab: gitlab,
      ws: null as WebSocket | null,
      messages: [] as { id: number; text: string }[]
    }
  },
  methods: {
    githubPage(): void {
      const router: Router = this.$router
      router.push('/automation/github') // Navigate to a sub-page
    }
  }
})
</script>

<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'

const availableSoon = ref(false)
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

.block {
  display: flex;
  align-items: center;
  width: 250px;
}

.icon {
  margin-right: 15px;
}

.icon img {
  width: 50px;
  height: 50px;
}

.text p {
  margin: 0;
}

.hover-div {
  cursor: pointer;
  transition: background-color 0.3s;
}

.hover-div:hover {
  background-color: lightgray;
}
</style>
