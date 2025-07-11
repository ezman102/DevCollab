<template>
  <div class="user-management">
    <header>
      <h1>User Management Page</h1>
      <div class="actions">
        <input type="text" v-model="filter" placeholder="Search users by name..." />
        <button @click="showAddUserModal = true">Add User</button>
        <button @click="showAddGroupModal = true">Add to Group</button>
      </div>
    </header>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
            Selected Users
          </th>
          <th>Status</th>
          <th>Last Active</th>
          <th>Email Address</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>
            <input type="checkbox" v-model="selectedUsers" :value="user.id" />
            {{ user.name }}
          </td>
          <td>{{ user.status }}</td>
          <td>{{ user.lastActive }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button @click="editUser(user)">EDIT</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddUserModal
      v-if="showAddUserModal"
      @close="showAddUserModal = false"
      @user-added="onUserAdded"
    />
    <AddToGroupModal
      v-if="showAddGroupModal"
      @close="showAddGroupModal = false"
      @group-added="onGroupAdded"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import AddUserModal from './AddUserModal.vue'
import AddToGroupModal from './AddToGroupModal.vue'

export default defineComponent({
  name: 'UserManagementPage',
  components: {
    AddUserModal,
    AddToGroupModal
  },
  setup() {
    const showAddUserModal = ref(false)
    const showAddGroupModal = ref(false)
    const filter = ref('')
    const selectedUsers = ref<number[]>([])
    const selectAll = ref(false)

    const users = ref([
      {
        id: 1,
        name: 'Tom',
        status: 'ACTIVE',
        lastActive: '4 Sep 2023, 11:37 PM',
        email: 'tom@example.com',
        role: 'Group Admin'
      },
      {
        id: 2,
        name: 'Abc',
        status: 'ACTIVE',
        lastActive: '4 Sep 2023, 11:37 PM',
        email: 'abc@example.com',
        role: 'Developer'
      },
      {
        id: 3,
        name: 'GGG',
        status: 'OFFLINE',
        lastActive: '4 Sep 2023, 11:37 PM',
        email: 'ggg@example.com',
        role: 'Product Owner'
      }
      // Add more user objects as needed
    ])

    const filteredUsers = computed(() => {
      return users.value.filter((user) =>
        user.name.toLowerCase().includes(filter.value.toLowerCase())
      )
    })

    const toggleSelectAll = () => {
      selectedUsers.value = selectAll.value ? filteredUsers.value.map((user) => user.id) : []
    }

    const onUserAdded = (user) => {
      users.value.push(user) // Add the new user to the list
      showAddUserModal.value = false
    }

    const onGroupAdded = (group) => {
      // Handle group addition logic if necessary
      showAddGroupModal.value = false
    }

    const editUser = (user) => {
      // Logic to edit the user
      console.log('Edit user:', user)
    }

    return {
      showAddUserModal,
      showAddGroupModal,
      filter,
      filteredUsers,
      selectedUsers,
      selectAll,
      toggleSelectAll,
      onUserAdded,
      onGroupAdded,
      editUser
    }
  }
})
</script>

<style scoped>
.user-management {
  padding: 20px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
.actions {
  display: flex;
  gap: 10px;
}
input[type='text'] {
  padding: 5px;
  margin-right: 10px;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
