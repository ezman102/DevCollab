<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <h2>Add User</h2>
      <form @submit.prevent="addUser">
        <label for="name">Name:</label>
        <input type="text" v-model="newUser.name" required />

        <label for="email">Email:</label>
        <input type="email" v-model="newUser.email" required />

        <label for="role">Role:</label>
        <select v-model="newUser.role" required>
          <option value="Group Admin">Group Admin</option>
          <option value="Developer">Developer</option>
          <option value="Product Owner">Product Owner</option>
        </select>

        <label for="status">Status:</label>
        <select v-model="newUser.status" required>
          <option value="ACTIVE">ACTIVE</option>
          <option value="OFFLINE">OFFLINE</option>
        </select>

        <button type="submit">Add User</button>
        <button type="button" @click="close">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(props, { emit }) {
    const newUser = ref({
      name: '',
      email: '',
      role: 'Group Admin',
      status: 'ACTIVE'
    })

    const addUser = () => {
      // Emit the new user data to the parent component
      emit('user-added', { ...newUser.value })
      // Reset the form
      newUser.value = { name: '', email: '', role: 'Group Admin', status: 'ACTIVE' }
    }

    const close = () => {
      emit('close')
    }

    return {
      newUser,
      addUser,
      close
    }
  }
})
</script>
