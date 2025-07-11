<template>
  <div>
    <v-card title="Projects" :subtitle="`Total ${store.projects.length}`"></v-card>

    <v-card class="mt-4">
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="flex justify-between">
            <div class="w-1/4">
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
            <div>
              <v-btn color="primary" :to="{ name: 'projects-create' }">New Project</v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-data-table :items="store.projects" :headers="headers" :search="searchKeywords">
              <template #item.name="{ value, item }">
                <router-link
                  :to="{ name: 'project', params: { projectId: toProject(item).projectId } }"
                >
                  <v-avatar v-if="toProject(item).avatar" class="mr-2">
                    <v-img :src="toProject(item).avatar || ''"></v-img>
                  </v-avatar>
                  {{ value }}
                </router-link>
                <v-badge
                  color="info"
                  content="Inactive"
                  inline
                  v-if="!toProject(item).isActive"
                ></v-badge>
                <v-badge
                  color="info"
                  :content="formatSprint(toProject(item).currentSprintNos)"
                  inline
                  v-else-if="toProject(item).currentSprintNos"
                >
                </v-badge>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { ProjectModel } from 'shared/models/project'
import { useProjectsListStore } from './projects-list.store'
import { useTable } from './table.logic'

const store = useProjectsListStore()
const { headers, formatSprint, searchKeywords } = useTable()
const toProject = (item: any) => item as ProjectModel
</script>
