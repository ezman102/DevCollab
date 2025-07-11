import { formatDate } from '@/utils/data-format/date-format'
import { join, map } from 'lodash'
import type { ProjectModel } from 'shared/models/project'
import { ref } from 'vue'

export const useTable = () => {
  const formatSprint = (sprints: number[]) => {
    if (sprints.length === 0) {
      return 'Inactive'
    } else if (sprints.length === 1) {
      return `Sprint #${sprints[0]}`
    } else {
      return `Sprint ${join(
        map(sprints, (s) => `#${s}`),
        ' -> '
      )}`
    }
  }

  const headers = [
    {
      key: 'projectId',
      title: 'ID',
      value: (item: ProjectModel) => `PJ-${item.projectId}`
    },
    {
      key: 'name',
      title: 'Project Name'
    },
    {
      key: 'description',
      title: 'Description'
    },
    {
      key: 'created',
      title: 'Created Date',
      value: (item: ProjectModel) => formatDate(item.created)
    },
    {
      key: 'modified',
      title: 'Last Modified Date',
      value: (item: ProjectModel) => formatDate(item.modified)
    }
  ]

  const searchKeywords = ref('')

  return { headers, formatSprint, searchKeywords }
}
