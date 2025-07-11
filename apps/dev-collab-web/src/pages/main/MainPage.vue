<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
      class="bg-red-lighten-1"
      theme="dark"
    >
      <template v-slot:prepend>
        <v-list-item
          class="ps-3"
          :prepend-avatar="`${baseUrl}logo.png`"
          :title="rail ? '' : ''"
          nav
        >
          <div v-if="!rail" class="fs-5">DevCollab</div>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>
      </template>

      <v-divider class="my-2 mx-4"></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :value="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="rail ? '' : item.title"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div v-if="!rail">
          <div class="d-flex align-items-center">
            <div class="flex-1 mx-4">
              <hr />
            </div>
            <div class="text-center rounded px-3 border-4 rounded-circle">
              <i class="mdi mdi-account-circle fs-1"></i>
            </div>

            <div class="flex-1 mx-4">
              <hr />
            </div>
          </div>
          <div class="text-start px-2 mb-3">
            <div class="fs-6 py-1">
              <i class="mdi mdi-music-accidental-sharp py-2 px-2 ms-2 rounded-top-4 bg-white"></i>
              <span class="ms-2">{{ user_id }}</span>
            </div>
            <div class="fs-6 py-1">
              <i class="mdi mdi-account py-2 px-2 ms-2 bg-white"></i>
              <span class="ms-2">{{ username }}</span>
            </div>
            <div class="fs-6 py-1">
              <i class="mdi mdi-email py-2 px-2 ms-2 rounded-bottom-4 bg-white"></i
              ><span class="ms-2">{{ email }}</span>
            </div>
          </div>
        </div>
        <hr class="mx-4" />
        <v-list density="compact" nav>
          <!-- <v-list-item
            prepend-icon="mdi-cog"
            :title="rail ? '' : 'Settings'"
            :to="{ name: 'profile' }"
          ></v-list-item> -->
          <div
            class="border border-2 rounded rounded-4 bg-white mb-2 py-1 cursor-pointer"
            @click="logout"
          >
            <v-list-item :prepend-icon="'mdi-logout'"
              ><span class="ps-3 fw-bolder">LOGOUT</span></v-list-item
            >
          </div>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="min-w-36 text-sm md:text-lg lg:text-xl font-bold">{{
        currentPageTitle
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDarkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
      <v-btn icon @click="showNotifications">
        <v-icon>mdi-bell</v-icon>
        <v-badge
          v-if="unreadNotifications > 0"
          :content="unreadNotifications"
          color="error"
        ></v-badge>
      </v-btn>
      <v-menu>
        <!-- <template v-slot:activator="{ props }">
          
        </template> -->
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>

    <v-footer app> © {{ new Date().getFullYear() }} DevCollab. All rights reserved. </v-footer>

    <v-dialog v-model="settingsDialog" max-width="500px">
      <v-card>
        <v-card-title>Settings</v-card-title>
        <v-card-text>
          <!-- Add settings options here -->
          <v-switch v-model="isDarkTheme" label="Dark Theme"></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="settingsDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from 'vuetify'
import { env } from '@/utils/env/env'
import { NotificationApi } from '@/api/notification.api'
import LoginApi from '@/api/login.api'

const { baseUrl } = env()
const route = useRoute()
const router = useRouter()
const theme = useTheme()

const drawer = ref(true)
const rail = ref(false)
const settingsDialog = ref(false)
const isDarkTheme = ref(theme.global.current.value.dark)
const unreadNotifications = ref(0)
const notificationApi = NotificationApi()
const email = ref('')
const user_id = ref('')
const username = ref('')
const firstEmailCharacter = ref('')

const menuItems = [
  { title: 'Home', icon: 'mdi-home-account', to: { name: 'profile' } },
  { title: 'Projects', icon: 'mdi-file-table-box-multiple', to: { name: 'projects' } },
  // { title: 'User Stories', icon: 'mdi-notebook-outline', to: { name: 'userstory' } },
  { title: 'Report', icon: 'mdi-chart-areaspline', to: { name: 'report' } },
  // {
  //   title: 'Project Overview(temp)',
  //   icon: 'mdi-chart-areaspline',
  //   to: { name: 'project-overview' }
  // },
  //{
  //  title: 'User Management(temp)',
  //  icon: 'mdi-human-greeting-variant',
  //  to: { name: 'usermanagement' }
  // },
  { title: 'Github', icon: 'mdi-github', to: { name: 'automation' } }
  // { title: 'Guide', icon: 'mdi-book-open-variant', to: { name: 'guide' } }
  // { title: 'Component', icon: 'mdi-view-dashboard', to: { name: 'component' } }
]

const currentPageTitle = computed(() => {
  const currentRoute = menuItems.find((item) => item.to.name === route.name)
  return currentRoute ? currentRoute.title : 'DevCollab'
})

const userInitials = computed(() => {
  // Replace with actual user data
  const name = 'John Doe'
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
})

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  isDarkTheme.value = !isDarkTheme.value
}

const openSettings = () => {
  settingsDialog.value = true
}

const showNotifications = () => {
  router.push({ name: 'notification' })
}

const logout = () => {
  console.log('Logout')
  location.href = './logout'
}

// Function to update drawer based on window width
const updateDrawer = () => {
  drawer.value = window.innerWidth >= 1280
  rail.value = window.innerWidth <= 1280
}

const fetchUnReadNotification = async () => {
  try {
    const info = await LoginApi.checkToken(LoginApi.getLocalToken())
    const data = await notificationApi.getCurrentUserUnReadNotificationCount(info.user.userId) // current user id
    if (data) {
      unreadNotifications.value = data
    }
  } catch (err) {
    console.error('Error fetching:', err)
  } finally {
    // console.log(unreadNotifications.value)
  }
}
const getUserInfo = async () => {
  const info = await LoginApi.checkToken(LoginApi.getLocalToken())

  if (info.success == false) logout()
  email.value = info.user.email
  user_id.value = info.user.userId
  username.value = info.user_details.username
  firstEmailCharacter.value = info.user.email.toString().substring(0, 1)
}
// Set up event listener on mount
onMounted(() => {
  updateDrawer() // Initial check
  window.addEventListener('resize', updateDrawer)
  fetchUnReadNotification()
  getUserInfo()
})

// Clean up event listener on unmount
onUnmounted(() => {
  window.removeEventListener('resize', updateDrawer)
})
</script>

<style lang="scss" scoped>
/* Add any component-specific styles here */
.bg-white {
  background-color: $vt-c-white;
  opacity: 0.95;
}
@media (max-width: 720px) {
  .v-container {
    padding: 0px !important;
  }
}
</style>
