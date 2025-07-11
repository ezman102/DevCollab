<template>
  <div class="w-100 text-center d-flex justify-content-center">
    <div class="position-relative text-center w-100">
      <select
        class="border rounded-2 red-border-1 border-2 bg-color-white red-text-1 fs-2 px-4 py-2 w-100 text-start"
        @change="teamChange"
      >
        <option
          v-for="member in teamList"
          :key="member.id"
          :value="member.id"
          :selected="defaultTeamId == member.id"
        >
          {{ member.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultTeamId: {
      type: Number,
      required: false,
      default: 0
    },

    teamList: {
      type: Array,
      required: false,
      default: () => [
        {
          id: 0,
          name: 'Create / Join a Project Team'
        },
        {
          id: 1001,
          name: 'MonkeyDev'
        },
        {
          id: 1002,
          name: 'MonkeyTest'
        }
      ]
    }
  },
  setup(props, { emit }) {
    const teamChange = (event) => {
      emit('updateSelectedTeam', event.target.value)
    }

    return {
      teamChange
    }
  }
}
</script>

<style lang="scss" scoped>
.red-text-1 {
  color: $red-1;
}
.large-text {
  font-size: 6rem;
}
.bg-red-1 {
  background-color: $red-1;
}
.bg-color-white {
  background-color: $vt-c-white;
}
.red-border-1 {
  border-color: $red-1 !important;
}
</style>
