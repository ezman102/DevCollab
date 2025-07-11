<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <h2>Add to Group</h2>
      <form @submit.prevent="addToGroup">
        <label for="groupName">Group Name:</label>
        <input type="text" v-model="groupName" required />

        <label>Select Users:</label>
        <div v-for="user in availableUsers" :key="user.id">
          <input type="checkbox" v-model="selectedUserIds" :value="user.id" />
          {{ user.name }}
        </div>

        <button type="submit">Add to Group</button>
        <button type="button" @click="close">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    availableUsers: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const groupName = ref('')
    const selectedUserIds = ref<number[]>([])

    const addToGroup = () => {
      // Emit the group name and selected user IDs to the parent component
      emit('group-added', { groupName: groupName.value, userIds: selectedUserIds.value })
      // Reset the form
      groupName.value = ''
      selectedUserIds.value = []
    }

    const close = () => {
      emit('close')
    }

    return {
      groupName,
      selectedUserIds,
      addToGroup,
      close
    }
  }
})
</script>
