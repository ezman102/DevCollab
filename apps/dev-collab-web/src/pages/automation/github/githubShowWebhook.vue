<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-6">Github Webhook</h1>

    <h3>Showing ALL Webhook Notifications</h3>
    <hr>
    <br>
    <div class="mb-4 overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">GitHub Notification</th>
            <th class="py-2 px-4 border-b">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td class="py-2 px-4 border-b">{{ event.id }}</td>
            <td class="py-2 px-4 border-b">{{ event.name }}</td>
            <td class="py-2 px-4 border-b">
              <details>
                <summary>View Notification</summary>
                <pre>{{ event.payload }}</pre>
              </details>
            </td>
            <td class="py-2 px-4 border-b">{{ event.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

// For icons
<script lang="ts">
import { ref } from 'vue';
import _ from 'lodash'
import { defineComponent } from 'vue'
import github from '@/assets/icons/Icon_github.svg'
import gitlab from '@/assets/icons/Icon_gitlab.svg'
import axios from 'axios';

let baseURLdynamic = window.location.href.includes('localhost') ? 'http://localhost:3000' : 'http://54.199.209.19';

const instance = axios.create({
  baseURL: baseURLdynamic // Express backend
});

export default {
  data() {
    return {
      events: []
    };
  },
  created() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      const token = localStorage.getItem('auth_token');
      instance.get('/webhook/api/webhook-events', {
        headers: {
          Authorization: token
        }
      })
        .then(response => {
          console.log('Success fetching events.');
          this.events = response.data;
          console.log(response.data)
          this.events.forEach(function (item, index, array) {
            array[index]["created_at"] = new Date(array[index]["created_at"]);
          });
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    }
  }
}
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
