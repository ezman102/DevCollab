<template>
  <div>
    <v-card class="mb-6">
      <v-card-title>User Story Management</v-card-title>
    </v-card>

    <!-- Controls for User Stories -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <v-text-field
          v-model="search"
          label="Search stories"
          prepend-inner-icon="mdi-magnify"
          clearable
          :disabled="loading"
          density="comfortable"
          variant="outlined"
          hide-details
      ></v-text-field>

      <v-select
          v-model="sortBy"
          :items="sortOptions"
          item-title="text"
          item-value="value"
          label="Sort by"
          :disabled="loading"
          density="comfortable"
          variant="outlined"
          hide-details
      ></v-select>

      <div class="flex justify-end">
        <v-btn color="primary" @click="showAddDialog" :disabled="loading" prepend-icon="mdi-plus">
          Add New Story
        </v-btn>
      </div>
    </div>

    <!-- User Story List -->
    <v-row v-if="loading" justify="center" class="my-8">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-row>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <v-card
          v-for="story in sortedAndFilteredStories"
          :key="story.userStoryId"
          class="story-card"
          :elevation="2"
      >
        <v-card-title class="pb-2">{{ story.title }}</v-card-title>

        <v-card-text class="pt-4">
          <div class="grid grid-cols-2 gap-y-2">
            <div class="text-gray-600">As a:</div>
            <div>{{ story.asA }}</div>

            <div class="text-gray-600">I want to:</div>
            <div>{{ story.iWantTo }}</div>

            <div class="text-gray-600">So that:</div>
            <div>{{ story.soThat }}</div>

            <div class="text-gray-600">Priority:</div>
            <v-chip :color="getPriorityColor(story.priority)" size="small" class="w-min">
              {{ story.priority }}
            </v-chip>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn icon @click="upvote(story)">
            <v-icon color="green">mdi-thumb-up</v-icon>
          </v-btn>
          <span>{{ story.upvoteCount }}</span>

          <v-btn icon @click="downvote(story)">
            <v-icon color="red">mdi-thumb-down</v-icon>
          </v-btn>
          <span>{{ story.downvoteCount }}</span>

          <v-spacer></v-spacer>
          <v-btn variant="text" color="primary" @click="editStory(story)" prepend-icon="mdi-pencil">
            Edit
          </v-btn>
          <v-btn variant="text" color="error" @click="confirmDelete(story)" prepend-icon="mdi-delete">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- Add/Edit Dialog -->
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <v-card>
        <v-card-title class="pa-4">
          <h5 class="text-gray-800">
            {{ formTitle }}
          </h5>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-text-field v-model="editedStory.title" label="Title" variant="outlined" density="comfortable"></v-text-field>
          <v-text-field
              v-model="editedStory.asA"
              label="As a"
              variant="outlined"
              density="comfortable"
          ></v-text-field>

          <v-text-field
              v-model="editedStory.iWantTo"
              label="I want to"
              variant="outlined"
              density="comfortable"
          ></v-text-field>

          <v-text-field
              v-model="editedStory.soThat"
              label="So that"
              variant="outlined"
              density="comfortable"
          ></v-text-field>

          <v-select v-model="editedStory.priority" :items="['Low', 'Medium', 'High']" label="Priority" variant="outlined"></v-select>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="closeDialog">Cancel</v-btn>
          <v-btn color="primary" @click="saveStory">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="text-h5 pa-4">Delete Story</v-card-title>
        <v-card-text class="pa-4"> Are you sure you want to delete this story? </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="closeDeleteDialog"> Cancel </v-btn>
          <v-btn color="error" @click="deleteStoryConfirm">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { UserStoryApi } from '@/api/userstory.api'

const userStoryApi = UserStoryApi()

interface UserStory {
  userStoryId: number
  title: string
  asA: string
  iWantTo: string
  soThat: string
  priority: 'Low' | 'Medium' | 'High'
  upvoteCount: number
  downvoteCount: number
}

const userStories = ref<UserStory[]>([])
const dialog = ref(false)
const deleteDialog = ref(false)
const editedIndex = ref(-1)
const editedStory = ref<UserStory>({
  userStoryId: 0,
  title: '',
  asA: '',
  iWantTo: '',
  soThat: '',
  priority: 'Medium',
  upvoteCount: 0,
  downvoteCount: 0
})
const search = ref('')
const sortBy = ref('priority-desc')
const loading = ref(false)

const sortOptions = [
  { text: 'Priority (High to Low)', value: 'priority-desc' },
  { text: 'Priority (Low to High)', value: 'priority-asc' },
  { text: 'Title (A-Z)', value: 'title-asc' },
  { text: 'Title (Z-A)', value: 'title-desc' }
]

const formTitle = computed(() => (editedIndex.value === -1 ? 'New User Story' : 'Edit User Story'))

const sortedAndFilteredStories = computed(() => {
  let stories = userStories.value

  if (search.value) {
    const searchLower = search.value.toLowerCase()
    stories = stories.filter((story) =>
        Object.values(story).some((value) => typeof value === 'string' && value.toLowerCase().includes(searchLower))
    )
  }

  return stories.sort((a, b) => {
    if (sortBy.value === 'priority-desc') return getPriorityValue(b.priority) - getPriorityValue(a.priority)
    if (sortBy.value === 'priority-asc') return getPriorityValue(a.priority) - getPriorityValue(b.priority)
    if (sortBy.value === 'title-asc') return a.title.localeCompare(b.title)
    if (sortBy.value === 'title-desc') return b.title.localeCompare(a.title)
    return 0
  })
})

const fetchUserStories = async () => {
  loading.value = true
  try {
    userStories.value = await userStoryApi.getUserStories()
  } catch (error) {
    console.error('Error fetching stories:', error)
  } finally {
    loading.value = false
  }
}

const showAddDialog = () => {
  editedIndex.value = -1
  editedStory.value = {
    userStoryId: 0,
    title: '',
    asA: '',
    iWantTo: '',
    soThat: '',
    priority: 'Medium',
    upvoteCount: 0,
    downvoteCount: 0
  }
  dialog.value = true
}

const editStory = (story: UserStory) => {
  editedIndex.value = userStories.value.indexOf(story)
  editedStory.value = { ...story }
  dialog.value = true
}

const saveStory = async () => {
  try {
    if (editedIndex.value > -1) {
      const updatedStory = await userStoryApi.updateUserStory(editedStory.value.userStoryId, editedStory.value)
      Object.assign(userStories.value[editedIndex.value], updatedStory)
    } else {
      const newStory = await userStoryApi.createUserStory(editedStory.value)
      userStories.value.push(newStory)
    }
    dialog.value = false
  } catch (error) {
    console.error('Error saving story:', error)
  }
}

const confirmDelete = (story: UserStory) => {
  editedIndex.value = userStories.value.indexOf(story)
  editedStory.value = { ...story }
  deleteDialog.value = true
}

const deleteStoryConfirm = async () => {
  try {
    await userStoryApi.deleteUserStory(editedStory.value.userStoryId)
    userStories.value.splice(editedIndex.value, 1)
    deleteDialog.value = false
  } catch (error) {
    console.error('Error deleting story:', error)
  }
}

const upvote = async (story: UserStory) => {
  try {
    const response = await userStoryApi.upvoteUserStory(story.userStoryId)
    story.upvoteCount = response.upvoteCount
  } catch (error) {
    console.error('Error upvoting story:', error)
  }
}

const downvote = async (story: UserStory) => {
  try {
    const response = await userStoryApi.downvoteUserStory(story.userStoryId)
    story.downvoteCount = response.downvoteCount
  } catch (error) {
    console.error('Error downvoting story:', error)
  }
}

const closeDialog = () => {
  dialog.value = false
  editedStory.value = {
    userStoryId: 0,
    title: '',
    asA: '',
    iWantTo: '',
    soThat: '',
    priority: 'Medium',
    upvoteCount: 0,
    downvoteCount: 0
  }
}

const closeDeleteDialog = () => {
  deleteDialog.value = false
}

const getPriorityValue = (priority: string) => {
  switch (priority) {
    case 'High': return 3
    case 'Medium': return 2
    case 'Low': return 1
    default: return 0
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'red'
    case 'Medium': return 'orange'
    case 'Low': return 'green'
    default: return 'grey'
  }
}

onMounted(fetchUserStories)
</script>

<style scoped>
.story-card {
  transition: transform 0.2s ease-in-out;
}
.story-card:hover {
  transform: translateY(-2px);
}
</style>
