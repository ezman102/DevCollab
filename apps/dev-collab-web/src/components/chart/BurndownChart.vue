<!-- src/components/BurndownChart.vue -->
<template>
  <div class="chart-container">
    <canvas ref="burndownCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  props: {
    labels: {
      type: Array,
      required: true
    },
    plannedWork: {
      type: Array,
      required: true
    },
    actualWork: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.createBurndownChart();
  },
  methods: {
    createBurndownChart() {
      const ctx = this.$refs.burndownCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Planned Work',
              data: this.plannedWork,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
              tension: 0.1
            },
            {
              label: 'Actual Work',
              data: this.actualWork,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: true,
              tension: 0.1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Remaining Work'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Sprint'
              }
            }
          }
        }
      });
    }
  }
};
</script>

<style> 
.chart-container {
  position: relative;
  margin: auto;
  min-width: 900px;
}
canvas {
  max-width: 100%;
  height: auto;
}
</style>