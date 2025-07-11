<template>
  <div class="p-4 h-[90%]">
    <div class="flex justify-between items-center mb-4">
      <h6 class="text-gray-700">Task Status Cumulative Flow</h6>
      <div class="flex items-center gap-2">
        <v-btn-toggle v-model="selectedPeriod" mandatory class="border rounded">
          <v-btn
            v-for="option in periodOptions"
            :key="option"
            :value="option"
            size="small"
            variant="text"
          >
            {{ option }}
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <div class="h-full">
      <canvas class="h-full" ref="progressCanvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, toRaw } from 'vue'
import { Chart, type ChartOptions } from 'chart.js/auto'

const props = defineProps<{
  chartData: Array<{
    createdDate: string
    todo: number
    inProgress: number
    done: number
  }>
}>()

const selectedPeriod = ref('Monthly')
const progressCanvas = ref<HTMLCanvasElement | null>(null)
const periodOptions = ['Daily', 'Monthly']
let chart: Chart | null = null

const chartColors = {
  todo: {
    background: 'rgba(255, 99, 132, 0.2)',
    border: 'rgb(255, 99, 132)'
  },
  inProgress: {
    background: 'rgba(255, 206, 86, 0.2)',
    border: 'rgb(255, 206, 86)'
  },
  done: {
    background: 'rgba(75, 192, 192, 0.2)',
    border: 'rgb(75, 192, 192)'
  }
}

const formatDate = (dateString: string, period: string) => {
  const date = new Date(dateString)
  if (period === 'Monthly') {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const getMonthKey = (date: Date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01`
}

const getLast12Months = () => {
  const months = []
  const today = new Date()
  for (let i = 11; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1)
    months.push(getMonthKey(date))
  }
  return months
}

const createCFDChart = () => {
  if (!progressCanvas.value) return

  const ctx = progressCanvas.value.getContext('2d')
  if (!ctx) return

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'nearest'
    },
    scales: {
      x: {
        ticks: {
          callback: function (value, index) {
            const date = this.getLabelForValue(index as number)
            return formatDate(date, selectedPeriod.value)
          }
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Tasks'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (context) => {
            const date = context[0].label
            return formatDate(date, selectedPeriod.value)
          }
        }
      },
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      }
    }
  }

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          label: 'To Do',
          data: [],
          backgroundColor: chartColors.todo.background,
          borderColor: chartColors.todo.border,
          fill: true,
          tension: 0.4
        },
        {
          label: 'In Progress',
          data: [],
          backgroundColor: chartColors.inProgress.background,
          borderColor: chartColors.inProgress.border,
          fill: true,
          tension: 0.4
        },
        {
          label: 'Done',
          data: [],
          backgroundColor: chartColors.done.background,
          borderColor: chartColors.done.border,
          fill: true,
          tension: 0.4
        }
      ]
    },
    options
  })
}

const updateChartData = () => {
  if (!chart) return

  let filteredData = toRaw(props.chartData)

  if (selectedPeriod.value === 'Monthly') {
    // First, aggregate the actual data by month
    const monthlyAggregated: { [key: string]: any } = {}
    filteredData.forEach((item) => {
      const monthKey = getMonthKey(new Date(item.createdDate))
      if (!monthlyAggregated[monthKey]) {
        monthlyAggregated[monthKey] = {
          createdDate: monthKey,
          todo: item.todo,
          inProgress: item.inProgress,
          done: item.done
        }
      } else {
        // Update with latest values for the month
        monthlyAggregated[monthKey].todo = item.todo
        monthlyAggregated[monthKey].inProgress = item.inProgress
        monthlyAggregated[monthKey].done = item.done
      }
    })

    // Get last 12 months and create final data array
    const last12Months = getLast12Months()
    filteredData = last12Months.map((monthKey) => {
      return (
        monthlyAggregated[monthKey] || {
          createdDate: monthKey,
          todo: 0,
          inProgress: 0,
          done: 0
        }
      )
    })
  }

  filteredData.sort((a, b) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime())

  chart.data.labels = filteredData.map((item) => item.createdDate)
  chart.data.datasets[0].data = filteredData.map((item) => item.todo)
  chart.data.datasets[1].data = filteredData.map((item) => item.inProgress)
  chart.data.datasets[2].data = filteredData.map((item) => item.done)

  chart.update()
}

onMounted(() => {
  createCFDChart()
  updateChartData()
})

watch(() => selectedPeriod.value, updateChartData)
watch(() => props.chartData, updateChartData, { deep: true })
</script>
