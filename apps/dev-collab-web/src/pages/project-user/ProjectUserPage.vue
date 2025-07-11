<template>
  <div>
    <v-card title="Project Users"></v-card>

    <v-card class="mt-4">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="text-subtitle-1 text-medium-emphasis">Project Users</div>

            <v-list lines="one">
              <v-list-item
                class="mb-2"
                v-for="user of store.users"
                :title="user.name ? `${user.name} / ${user.email}` : `${user.email}`"
              >
                <template v-slot:append>
                  <v-btn color="grey-lighten-1" variant="text" @click="removeUser(user.userId)">
                    Delete
                  </v-btn>
                </template>
              </v-list-item>
              <v-list-item v-if="store.users.length === 0">
                <v-empty-state
                  text="You haven't assigned any user for your projects yet."
                  title="No user assigned"
                ></v-empty-state>
              </v-list-item>
              <v-list-item>
                <v-btn variant="flat" block @click="prepareAddUser()"> + New User </v-btn>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="6" v-show="state === 'ADD_USER'">
            <div class="text-subtitle-1 text-medium-emphasis">All Users</div>

            <div class="mt-2">
              <v-text-field
                v-model="searchKeywords"
                density="compact"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="solo-filled"
                flat
                hide-details
                single-line
              ></v-text-field>
            </div>

            <v-list lines="one">
              <v-data-iterator
                :items="store.allUsers"
                :page="page"
                :items-per-page="pageSize"
                :search="searchKeywords"
              >
                <template v-slot:default="{ items }">
                  <template v-for="({ raw: user }, i) in items" :key="i">
                    <v-list-item
                      class="mb-2"
                      :title="user.name ? `${user.name} / ${user.email}` : `${user.email}`"
                      :disabled="existUser(user)"
                    >
                      <template v-slot:append>
                        <v-btn color="grey-lighten-1" variant="text" @click="addUser(user.userId)">
                          Add
                        </v-btn>
                      </template>
                    </v-list-item>
                  </template>
                </template>
              </v-data-iterator>
              <v-list-item v-if="store.allUsers.length === 0">
                <v-empty-state
                  text="The system currently has no user yet."
                  title="No user"
                ></v-empty-state>
              </v-list-item>
            </v-list>
            <v-pagination
              v-model="page"
              :length="Math.ceil(store.allUsers.length / pageSize)"
              rounded="circle"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProjectUserStore } from './project-user.store'
import { useUsers } from './user.logic'

const store = useProjectUserStore()
const { state, prepareAddUser, addUser, removeUser, existUser } = useUsers()

const page = ref(1)
const pageSize = 5
const searchKeywords = ref('')
</script>
