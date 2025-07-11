<template>
  <div>
    <v-tabs fixed-tabs>
      <v-tab :to="{ name: 'project-overview' }">Overview</v-tab>
      <v-tab :to="{ name: 'project-detail' }">Detail</v-tab>
      <v-tab :to="{ name: 'project-sprint' }">Sprint</v-tab>
      <v-tab :to="{ name: 'project-user' }">User</v-tab>
      <v-tab :to="{ name: 'taskmanagement' }">task</v-tab>
      <v-tab :to="{ name: 'userstory' }">User Story</v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>
