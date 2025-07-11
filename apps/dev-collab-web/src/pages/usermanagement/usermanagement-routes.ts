import { defineRoutes } from '@/utils/route/route'

export const createUsermanagementRoutes = defineRoutes(() => [
  {
    path: '/usermanagement',
    name: 'usermanagement',
    component: () => import('./UsermanagementPage.vue')
  }
])
// In your User Management component
import { useRouter } from 'vue-router'
// ...
import { defineComponent, ref, computed } from 'vue'
import AddUserModal from '@/pages/usermanagement/AddUserModal.vue'
import AddToGroupModal from '@/pages/usermanagement/AddToGroupModal.vue'

interface User {
  id: number
  name: string
  status: string
  lastActive: string
  email: string
  role: string
}

export default defineComponent({
  components: {
    AddUserModal,
    AddToGroupModal
  },
  setup() {
    const users = ref<User[]>([
      {
        id: 1,
        name: 'Jeff',
        status: 'ACTIVE',
        lastActive: '4 Sep 2023, 1:37 PM',
        email: 'jeff@gmail.com',
        role: 'Group Admin'
      },
      {
        id: 2,
        name: 'Alex',
        status: 'ACTIVE',
        lastActive: '4 Sep 2023, 1:37 PM',
        email: 'alex@gmail.com',
        role: 'Developer'
      },
      {
        id: 3,
        name: 'Gigi',
        status: 'OFFLINE',
        lastActive: '4 Sep 2023, 1:37 PM',
        email: 'gigi@gmail.com',
        role: 'Product Owner'
      }
    ])

    const searchQuery = ref('')
    const selectedUsers = ref<number[]>([])
    const showAddUser = ref(false)
    const showAddToGroup = ref(false)

    const filteredUsers = computed(() => {
      return users.value.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    const showAddUserModal = () => {
      showAddUser.value = true
    }

    const showAddToGroupModal = () => {
      showAddToGroup.value = true
    }

    const editUser = (user: User) => {
      // Logic for editing the user
    }

    return {
      users,
      searchQuery,
      selectedUsers,
      showAddUser,
      showAddToGroup,
      filteredUsers,
      showAddUserModal,
      showAddToGroupModal,
      editUser
    }
  }
})
