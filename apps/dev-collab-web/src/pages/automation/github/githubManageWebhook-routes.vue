<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-6">Github Webhook</h1>

    <h3>Showing ALL Webhooks</h3>
    <hr>
    <br>
    <div class="mb-4 overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border-b">Action</th>
            <!-- <th class="py-2 px-4 border-b">ID</th> -->
            <th class="py-2 px-4 border-b">URL</th>
            <th class="py-2 px-4 border-b">Webhook Name</th>
            <th class="py-1 px-0 border-b">Created At</th>
            <th class="py-1 px-0 border-b">Test Webhook</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td>
              <button @click="confirmDelete(event.id)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-0 px-1 rounded">
                Delete Webhook
              </button>
            </td>
            <!-- <td class="py-2 px-4 border-b">{{ event.id }}</td> -->
            <td class="py-2 px-4 border-b">{{ event.url }}</td>
            <td class="py-2 px-4 border-b">{{ event.name }}</td>
            <td class="py-1 px-0 border-b">{{ event.created_at }}</td>
            <td class="py-2 px-4 border-b">
              <details>
                <summary>View</summary>
                <pre
                  class="text-wrap">curl -X POST http://IP{{ event.url }} -H "Content-Type: application/json" -d "{\"message\": \"Hello, World!\"}"</pre>
              </details>
            </td>
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
      instance.get('/webhook/api/webhooks', {
        headers: {
          Authorization: token
        }
      })
        .then(response => {
          console.log('Success fetching events.');
          this.events = response.data;
          this.events.forEach(function (item, index, array) {
            array[index]["created_at"] = new Date(array[index]["created_at"]);
          });
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    },
    confirmDelete(id) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        // User clicked OK, proceed with deletion
        this.deleteItem(id);
      } else {
        // User clicked Cancel, do nothing
      }
    },
    deleteItem(id) {
      console.log('Deleted:', id);
      console.log('/webhook/api/webhook-delete/'.concat(id));
      instance.post('/webhook/api/webhook-delete/'.concat(id))
        .then(response => {
          console.log('Deleted successfully');
        })
        .catch(error => {
          console.error('Error in deletion:', error);
        });
      setTimeout(() => {
        window.location.reload();
      }, 500); // Reload after 0.5 second
    },
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
