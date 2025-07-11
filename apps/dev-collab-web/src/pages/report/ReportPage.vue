<!-- src/App.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-6">Burndown Chart</h1>
      <BurndownChart
        :labels="labels"
        :plannedWork="plannedWork"
        :actualWork="actualWork"
      />
    </div>
  </div>
</template>

<script>
import BurndownChart from '../../components/chart/BurndownChart.vue';

export default {
  components: {
    BurndownChart
  },
  data() {
    return {
      labels: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6', 'Sprint 7'],
      plannedWork: [70, 60, 50, 40, 30, 20, 10],
      actualWork: [70, 55, 45, 35, 30, 20, 5]
    };
  }
};
</script>

<style>
body {
  @apply bg-gray-100;
}
</style>