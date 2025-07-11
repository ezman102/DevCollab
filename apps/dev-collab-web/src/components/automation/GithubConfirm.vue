<template>
  <hr>
  <br>
  <div>
    <h4><span class="font-weight-bold">Step 3:</span> Confirmation</h4>

    <div class="mb-4 overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border-b">Webhook URL</th>
            <td class="py-2 px-4 border-b">{{ url }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="py-2 px-4 border-b">Name</th>
            <td class="py-2 px-4 border-b">{{ name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="space-x-2 mb-4">
      <button v-if="!finish" @click="previous"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Previous
      </button>
      <button v-if="!finish" @click="saveUrl"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        SAVE
      </button>
      <button v-if="finish" @click="github_home"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        FINISH
      </button>
    </div>
    <div v-if="showSuccessNotification" class="notification-success">
      <p class="font-weight-bold">Webhook Saved!</p>
      <p>Please setup Webhook on Github with the above URL.</p>
    </div>
    <div v-if="showFailNotification" class="notification">Error in saving, please check connection!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Router } from 'vue-router'
import axios from 'axios';

let baseURLdynamic = window.location.href.includes('localhost') ? 'http://localhost:3000' : 'http://54.199.209.19';

const instance = axios.create({
  baseURL: baseURLdynamic // Express backend
});

export default defineComponent({
  data() {
    return {
      webhookUrl: '',
      showSuccessNotification: false,
      showFailNotification: false,
      finish: false,
      userId: null,
    };
  },
  props: {
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    previous() {
      this.$emit('previous');
    },
    saveUrl() {
      const token = localStorage.getItem('auth_token');
      let baseURLdynamic = window.location.href.includes('localhost')
        ? 'http://localhost:3001'
        : 'http://54.199.209.19'
      instance.post('/webhook/save-url', {
        url: this.url.replace(baseURLdynamic, ""),
        name: this.name
      }, {
        headers: {
          Authorization: token
        }
      })
        .then(response => {
          console.log('URL saved successfully');
          this.showSuccessNotification = true;
          setTimeout(() => {
            this.showSuccessNotification = false;
          }, 5000);
          this.$emit('save');
          this.finish = true;
        })
        .catch(error => {
          console.error('Error saving URL:', error);
          this.showFailNotification = true;
          setTimeout(() => {
            this.showFailNotification = false;
          }, 3000);
          this.$emit('save');
        });
    },
    github_home(): void {
      const router: Router = this.$router
      router.push('/automation/github') // Navigate back to Github Home
    },
    //     async getUserID() {
    //       try {
    //         const token = localStorage.getItem('auth_token');
    //         console.log("token: ",token);
    //         const response = await axios.get('http://localhost:3000/webhook/api/get-user-id', {
    //         headers: {
    //           authorization: token,
    //       },
    //     });
    //     this.userId = response.data.userId;
    //   } catch (error) {
    //     console.error('Error fetching user ID:', error);
    //   }
    // }
  }

}
);
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

.notification-success {
  position: fixed;
  left: 40%;
  background-color: #4caf50;
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