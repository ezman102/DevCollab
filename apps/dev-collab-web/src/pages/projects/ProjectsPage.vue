<template>
  <div>
    <v-card title="Projects" :subtitle="`Total ${store.projects.length}`"></v-card>

    <v-card title="Recent Updates" class="mt-4">
      <v-container fluid>
        <v-empty-state
          v-if="recentUpdates.length === 0"
          text="You haven't assigned into any projects yet. When you do, they'll appear here."
          title="No recent projects"
        ></v-empty-state>
        <v-list :items="recentUpdates" lines="two" item-props></v-list>
        <div class="flex justify-end">
          <v-btn variant="text" :to="{ name: 'projects-list' }"> View all projects </v-btn>
        </div>
      </v-container>
    </v-card>

    <v-card title="Active" class="mt-4">
      <v-container fluid>
        <v-empty-state
          v-if="actives.length === 0"
          text="You haven't assigned into any projects yet. When you do, they'll appear here."
          title="No active projects"
        ></v-empty-state>
        <v-list :items="actives" lines="two" item-props></v-list>
        <div class="flex justify-end">
          <v-btn variant="text" :to="{ name: 'projects-list' }"> View all projects </v-btn>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/data-format/date-format'
import { dropRight, filter, flatten, map, orderBy, take } from 'lodash'
import { computed } from 'vue'
import { useProjectsStore } from './projects.store'

const store = useProjectsStore()

const recentUpdates = computed(() =>
  dropRight(
    flatten(
      map(
        take(
          orderBy(store.projects, (p) => p.modified || '', 'desc'),
          10
        ),
        (p) => [
          {
            prependAvatar: p.avatar,
            title: `[PJ-${p.projectId}] ${p.name}`,
            subtitle: p.description,
            to: { name: 'project', params: { projectId: p.projectId } }
          },
          { type: 'divider', inset: true }
        ]
      )
    )
  )
)

const formatSprintNos = (sprintNos: number[]) => {
  const len = sprintNos.length

  if (len === 0) {
    return `No sprint`
  } else if (len === 1) {
    return `Current sprint ${sprintNos[0]}`
  } else {
    return `Sprint transiting from ${sprintNos[0]} to ${sprintNos[1]}`
  }
}

const actives = computed(() =>
  dropRight(
    flatten(
      map(
        take(
          orderBy(
            filter(store.projects, (p) => p.isActive),
            (p) => p.created,
            'desc'
          ),
          10
        ),
        (p) => [
          {
            prependAvatar: p.avatar,
            title: `[PJ-${p.projectId}] ${p.name}`,
            subtitle: `Created ${formatDate(p.created)} • ${formatSprintNos(p.currentSprintNos)}`,
            to: { name: 'project', params: { projectId: p.projectId } }
          },
          { type: 'divider', inset: true }
        ]
      )
    )
  )
)
</script>
