<template>
  <div>
    <v-card class="mb-6">
      <v-card-title>Task Management</v-card-title>
    </v-card>

    <!-- Task Controls -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <v-text-field
        v-model="search"
        label="Search tasks"
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
          Add New Task
        </v-btn>
      </div>
    </div>

    <!-- Task Grid -->
    <v-row v-if="loading" justify="center" class="my-8">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-row>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <v-card
        v-for="task in sortedAndFilteredTasks"
        :key="task.taskid"
        class="task-card"
        :elevation="2"
      >
        <v-card-title class="pb-2">{{ task.name }}</v-card-title>

        <v-card-text class="pt-4">
          <div class="grid grid-cols-2 gap-y-2">
            <div class="text-gray-600">Project ID:</div>
            <div>{{ task.projectId }}</div>

            <div class="text-gray-600">Sprint ID:</div>
            <div>{{ task.sprintId }}</div>
            <!-- <div class="text-gray-600">Task ID:</div>
            <div>{{ task.taskid }}</div> -->
            <div class="text-gray-600">Priority:</div>
            <v-chip :color="getPriorityColor(task.priority)" size="small" class="w-min">
              {{ task.priority }}
            </v-chip>

            <div class="text-gray-600">Status:</div>
            <v-chip :color="getStatusColor(task.status)" size="small" class="w-min">
              {{ task.status }}
            </v-chip>

            <div class="text-gray-600">Assignee:</div>
            <div>{{ task.assignee }}</div>

            <div class="text-gray-600">Due Date:</div>
            <div>{{ formatDate(task.duedate) }}</div>
          </div>

          <div class="mt-4">
            <div class="text-gray-600">Description:</div>
            <div class="mt-1">{{ task.description }}</div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" color="primary" @click="editTask(task)" prepend-icon="mdi-pencil">
            Edit
          </v-btn>
          <v-btn
            variant="text"
            color="error"
            @click="confirmDelete(task)"
            prepend-icon="mdi-delete"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- Add/Edit Dialog -->
    <v-dialog v-model="dialog" max-width="800px" persistent>
      <v-card>
        <v-card-title class="pa-4">
          <h5 class="text-gray-800">
            {{ formTitle }}
          </h5>
          <!-- Error Alert -->
          <v-alert
            v-if="error"
            type="error"
            variant="tonal"
            closable
            class="mb-6"
            @click:close="error = null"
          >
            {{ error }}
          </v-alert>
        </v-card-title>

        <v-card-text class="pa-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- <v-text-field
              v-model.number="editedTask.sprintId"
              label="Sprint ID"
              type="number"
              variant="outlined"
              density="comfortable"
              :rules="[(v) => !!v || 'Sprint ID is required']"
            ></v-text-field> -->
            <v-select
              v-model="editedTask.sprintId"
              :items="sprintList"
              label="Sprint ID"
              variant="outlined"
              density="comfortable"
              :rules="[(v) => !!v || 'Sprint ID is required']"
            ></v-select>

            <v-text-field
              v-model="editedTask.name"
              label="Task Name"
              variant="outlined"
              density="comfortable"
              :rules="[(v) => !!v || 'Task name is required']"
            ></v-text-field>

            <v-select
              v-model="editedTask.priority"
              :items="['Low', 'Medium', 'High']"
              label="Priority"
              variant="outlined"
              density="comfortable"
              :rules="[(v) => !!v || 'Priority is required']"
            ></v-select>

            <v-select
              v-model="editedTask.status"
              :items="['To Do', 'In Progress', 'Done']"
              label="Status"
              variant="outlined"
              density="comfortable"
              :rules="[(v) => !!v || 'Status is required']"
            ></v-select>
            <v-select
              v-model="editedTask.assignee"
              :items="getMemberEmail()"
              label="Assignee"
              variant="outlined"
              density="comfortable"
            ></v-select>
            <!-- <v-text-field
              v-model="editedTask.assignee"
              label="Assignee"
              variant="outlined"
              density="comfortable"
            ></v-text-field> -->

            <v-text-field
              v-model="editedTask.duedate"
              label="Due Date"
              type="date"
              variant="outlined"
              density="comfortable"
              :value="formatDateForInput(editedTask.duedate)"
              @input="editedTask.duedate = $event.target.value"
              :rules="[(v) => !!v || 'Due date is required']"
            ></v-text-field>

            <v-textarea
              v-model="editedTask.description"
              label="Description"
              variant="outlined"
              class="col-span-2"
              auto-grow
              rows="3"
            ></v-textarea>
          </div>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="closeDialog" :disabled="saving">Cancel</v-btn>
          <v-btn color="primary" @click="saveTask" :loading="saving" class="ml-2">Save</v-btn>
        </v-card-actions>

        <v-card-text class="pa-4">
          <!-- Comments Section (Only shown in edit mode) -->
          <div v-if="editedIndex > -1" class="mt-6">
            <v-divider class="mb-6"></v-divider>
            <CommentSection
              :comments="taskComments"
              :projectId="project?.projectId"
              :taskId="currTaskId"
              :userList="userList"
            />
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="text-h5 pa-4">Delete Task</v-card-title>
        <v-card-text class="pa-4"> Are you sure you want to delete this task? </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="closeDeleteDialog" :disabled="deleting"> Cancel </v-btn>
          <v-btn color="error" @click="deleteTaskConfirm" :loading="deleting" class="ml-2">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { TaskManagementApi } from '@/api/taskmanagement.api'
import LoginApi from '@/api/login.api'
import { useProjectMainStore } from '../project-main/project-main.store'
import CommentSection from '@/components/Comment/CommentSection.vue'
import { CommentApi } from '@/api/comment.api'
import { useUserApi } from '@/api/user.api'
import { useAxios } from '@/vendors/axios'
import { useSprintApi } from '@/api/sprint.api'

const { getTasks, createTask: createTaskApi, updateTask, deleteTask } = TaskManagementApi()
const mainStore = useProjectMainStore()
const project = mainStore.project
const commentApi = CommentApi()

interface Task {
  taskid?: number
  name: string
  description: string
  priority: 'Low' | 'Medium' | 'High'
  status: 'To Do' | 'In Progress' | 'Done'
  assignee: string
  duedate: string
  projectId: number | null
  sprintId: number | null
  author: number
}

interface FormattedComment {
  id: number
  author: string
  role: string
  date: string
  content: string
}

interface Comment {
  comment_id: number
  project_id: number
  task_id: number
  comment: string
  author_name: number
  create_date: string
}

interface UserName {
  user_id: number
  name: string
}

const defaultTask: Task = {
  name: '',
  description: '',
  priority: 'Medium',
  status: 'To Do',
  assignee: '',
  duedate: '',
  projectId: project?.projectId,
  sprintId: null,
  author: 0
}

// State
const tasks = ref<Task[]>([])
const dialog = ref(false)
const deleteDialog = ref(false)
const editedIndex = ref(-1)
const editedTask = ref<Task>({ ...defaultTask })
const loading = ref(false)
const saving = ref(false)
const deleting = ref(false)
const error = ref<string | null>(null)
const search = ref('')
const sortBy = ref('priority-desc')
const taskComments = ref<FormattedComment[]>([])
const currTaskId = ref(0)
const userList = ref<UserName[]>([])
const memberList = ref<any[]>([])
const sprintList = ref<any[]>([])
// Constants
const sortOptions = [
  { text: 'Priority (High to Low)', value: 'priority-desc' },
  { text: 'Priority (Low to High)', value: 'priority-asc' },
  { text: 'Name (A-Z)', value: 'name-asc' },
  { text: 'Name (Z-A)', value: 'name-desc' }
]

// Computed
const formTitle = computed(() => (editedIndex.value === -1 ? 'New Task' : 'Edit Task'))

const sortedAndFilteredTasks = computed(() => {
  let filteredTasks = [...tasks.value]

  if (search.value) {
    const searchLower = search.value.toLowerCase()
    filteredTasks = filteredTasks.filter(
      (task) =>
        task.name.toLowerCase().includes(searchLower) ||
        task.description.toLowerCase().includes(searchLower)
    )
  }

  return filteredTasks.sort((a, b) => {
    switch (sortBy.value) {
      case 'priority-desc':
        return getPriorityValue(b.priority) - getPriorityValue(a.priority)
      case 'priority-asc':
        return getPriorityValue(a.priority) - getPriorityValue(b.priority)
      case 'name-asc':
        return a.name.localeCompare(b.name)
      case 'name-desc':
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })
})

const fetchTaskComments = async (taskId: number) => {
  try {
    // console.log('taskId', taskId)
    const data = await commentApi.getCommentByTaskId(taskId)
    // console.log('fetchTaskComments', data)
    if (Array.isArray(data)) {
      taskComments.value = data.map((item: Comment) => ({
        id: Number(item.comment_id),
        author: `${item.author_name}`,
        role: '',
        date: item.create_date,
        content: item.comment
      }))
    }
  } catch (err) {
    // Error handling
  }
}

const fetchUserList = async () => {
  try {
    const data = await commentApi.getAllUsers()
    if (Array.isArray(data)) {
      userList.value = data
    }
  } catch (err) {
    // Error handling
  }
}

const fetchTasks = async () => {
  loading.value = true
  error.value = null
  try {
    await LoginApi.checkToken(LoginApi.getLocalToken())
    tasks.value = await getTasks(project?.projectId)
  } catch (err) {
    console.error('Error fetching tasks:', err)
    error.value = 'Failed to fetch tasks. Please check your input value.'
  } finally {
    loading.value = false
  }
}

const showAddDialog = () => {
  editedIndex.value = -1
  editedTask.value = { ...defaultTask }
  taskComments.value = []
  dialog.value = true
}

const editTask = async (task: Task) => {
  editedIndex.value = tasks.value.indexOf(task)
  editedTask.value = { ...task }
  dialog.value = true
  if (task.taskid) {
    currTaskId.value = task.taskid
    await fetchTaskComments(task.taskid)
  }
}

const confirmDelete = (task: Task) => {
  editedIndex.value = tasks.value.indexOf(task)
  editedTask.value = { ...task }
  deleteDialog.value = true
}

const deleteTaskConfirm = async () => {
  deleting.value = true
  try {
    await deleteTask(
      editedTask.value.projectId,
      editedTask.value.sprintId,
      editedTask.value.taskid!
    )
    await fetchTasks()
    closeDeleteDialog()
  } catch (err) {
    console.error('Error deleting task:', err)
    error.value = 'Failed to delete task. Please try again later.'
  } finally {
    deleting.value = false
  }
}

const saveTask = async () => {
  saving.value = true
  try {
    const info = await LoginApi.checkToken(LoginApi.getLocalToken())
    const userId = info.user.userId

    const command = {
      ...editedTask.value,
      author: userId
    }

    if (editedIndex.value > -1) {
      // console.log('command', command)
      await updateTask(
        editedTask.value.projectId,
        editedTask.value.sprintId,
        editedTask.value.taskid!,
        command
      )
    } else {
      await createTaskApi(editedTask.value.projectId, editedTask.value.sprintId, command)
    }
    await fetchTasks()
    closeDialog()
  } catch (err) {
    console.error('Error saving task:', err)
    error.value = 'Failed to save task. Please try again later.'
  } finally {
    saving.value = false
  }
}

const closeDialog = () => {
  dialog.value = false
  editedIndex.value = -1
  editedTask.value = { ...defaultTask }
  taskComments.value = []
  error.value = ''
}

const closeDeleteDialog = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedTask.value = { ...defaultTask }
}

const getPriorityValue = (priority: string) => {
  switch (priority) {
    case 'High':
      return 3
    case 'Medium':
      return 2
    case 'Low':
      return 1
    default:
      return 0
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'error'
    case 'Medium':
      return 'warning'
    case 'Low':
      return 'success'
    default:
      return 'grey'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'To Do':
      return 'grey'
    case 'In Progress':
      return 'info'
    case 'Done':
      return 'success'
    default:
      return 'grey'
  }
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const fetchMember = async () => {
  const userApi = useUserApi(useAxios())
  memberList.value = await userApi.getUsers()
  //console.log(memberList)
}

const getMemberEmail = (): string[] => {
  const memberEmailList: string[] = []
  for (const m of memberList.value) {
    memberEmailList.push(m.email)
  }
  return memberEmailList
}

const fetchSprintId = async () => {
  try {
    const sprintApi = useSprintApi(useAxios())
    const data = await sprintApi.getProjectSprints(project?.projectId)
    if (Array.isArray(data)) {
      sprintList.value = data.map((m) => m.sprintId)
    }
  } catch (err) {
    // Error handling
  }
}

const formatDateForInput = (date: string) => {
  if (!date) return ''
  return new Date(date).toISOString().split('T')[0]
}

onMounted(() => {
  fetchTasks()
  fetchUserList()
  fetchMember()
  fetchSprintId()
})
</script>

<style scoped>
.task-card {
  transition: transform 0.2s ease-in-out;
}

.task-card:hover {
  transform: translateY(-2px);
}
</style>
