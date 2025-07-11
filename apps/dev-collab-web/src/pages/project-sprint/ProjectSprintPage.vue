<template>
  <div>
    <v-card title="Project Sprint"></v-card>

    <v-card class="mt-4">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="text-subtitle-1 text-medium-emphasis">Total Sprints</div>

            <v-list lines="one">
              <v-list-item
                class="mb-2"
                v-for="sprint of store.sprints"
                :title="`Sprint ${sprint.sprintNo}`"
                :disabled="sprint.isEnded === true || sprint.isCurrent === true"
              >
                <template #subtitle>
                  <div class="flex gap-1">
                    <v-chip v-for="c of formatSprintSubtitle(sprint)" density="compact">
                      {{ c }}
                    </v-chip>
                  </div>
                </template>
                <template v-slot:append>
                  <v-btn
                    color="grey-lighten-1"
                    variant="text"
                    @click="prepareInput('edit', sprint)"
                  >
                    Update
                  </v-btn>
                  <v-btn color="grey-lighten-1" variant="text" @click="removeSprint(sprint)">
                    Delete
                  </v-btn>
                </template>
              </v-list-item>
              <v-list-item v-if="store.sprints.length === 0">
                <v-empty-state
                  text="You haven't created any sprint for your projects yet."
                  title="No sprint created"
                ></v-empty-state>
              </v-list-item>
              <v-list-item>
                <v-btn variant="flat" block @click="prepareInput('create', null)">
                  + New Sprint
                </v-btn>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="6" v-show="!mode">
            <v-alert title="Sprints" type="info">
              <p>Some rules on managing the sprints:</p>
              <ul>
                <li>You cannot create a sprint that's start from today</li>
                <li>You cannot edit the sprint that's ended or currently running</li>
                <li>
                  No overlapping duration between any of the sprints, but the duration can be
                  non-consecutive
                </li>
                <li>
                  There is no actual ending of the project as long as there is a sprint to be run
                </li>
              </ul>
            </v-alert>
          </v-col>
          <v-col cols="6" v-show="mode !== null">
            <div class="text-subtitle-1 text-medium-emphasis">Duration</div>

            <v-list lines="one">
              <v-list-item class="mb-2">
                <vue-date-picker
                  ref="dp"
                  class="justify-center"
                  v-model="form.duration"
                  :range="{ partialRange: false }"
                  inline
                  :enable-time-picker="false"
                  :min-date="new Date()"
                  @range-end="selectDate"
                  :action-row="{
                    showSelect: false,
                    showCancel: false,
                    showNow: false,
                    showPreview: true
                  }"
                >
                  <template #action-buttons>
                    <v-btn
                      color="primary"
                      size="small"
                      @click="addSprint()"
                      v-if="mode === 'create'"
                    >
                      Create
                    </v-btn>
                    <v-btn
                      color="primary"
                      size="small"
                      @click="updateSprint()"
                      v-else-if="mode === 'edit'"
                    >
                      Save
                    </v-btn>
                  </template>
                </vue-date-picker>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/data-format/date-format'
import { compact } from 'lodash'
import type { SprintModel } from 'shared/models/sprint'
import { nextTick, ref } from 'vue'
import { useProjectSprintStore } from './project-sprint.store'
import { useSprints } from './sprints.logic'

const store = useProjectSprintStore()
const { mode, form, prepareInput, addSprint, removeSprint, updateSprint } = useSprints()

const dp = ref()

const selectDate = async () => {
  await nextTick()
  dp.value.selectDate()
}

const formatSprintSubtitle = (sprint: SprintModel) => {
  const duration = `${formatDate(sprint.startDate)} - ${formatDate(sprint.endDate)}`
  const isCurrent = sprint.isCurrent ? 'Current Sprint' : null
  const isEnded = sprint.isEnded ? 'Ended' : null

  return compact([duration, isEnded, isCurrent])
}
</script>
