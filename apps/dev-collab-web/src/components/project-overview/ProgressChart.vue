<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-3">
      <h6 class="text-gray-700 mr-1">{{ title }}</h6>
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="flex items-center justify-between w-32 px-3 py-2 text-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span class="mr-2">{{ options[selectedPeriodIndexComputed] }}</span>
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <div
          v-if="isOpen"
          class="absolute right-0 z-10 w-32 mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
        >
          <div class="py-1">
            <div
              v-for="(option, index) in options"
              :key="index"
              @click="selectOption(index)"
              class="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              :class="{ 'bg-gray-100': index === selectedPeriodIndexComputed }"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-40 h-40 mx-auto">
      <svg class="w-full h-full" viewBox="0 0 100 100">
        <circle
          class="text-gray-200 stroke-current"
          stroke-width="10"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
        />
        <circle
          :class="[barColorClass, 'stroke-current']"
          stroke-width="10"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
        />
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-3xl font-bold text-gray-700">{{ progress }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, type PropType } from 'vue'

export default {
  props: {
    barColor: {
      type: String as PropType<'red' | 'yellow' | 'teal'>,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    progress: {
      type: Number,
      required: true
    },
    options: {
      type: Array as PropType<string[]>,
      required: true
    },
    selectedPeriodIndex: {
      type: Number,
      default: 2
    }
  },
  emits: ['update:selectedPeriodIndex'],
  setup(props, { emit }) {
    const isOpen = ref(false)
    const circumference = 2 * Math.PI * 45

    const dashOffset = computed((): number => {
      return circumference - (props.progress / 100) * circumference
    })

    const barColorClass = computed((): string => {
      switch (props.barColor) {
        case 'red':
          return 'text-red-400'
        case 'yellow':
          return 'text-yellow-400'
        case 'teal':
          return 'text-teal-400'
        default:
          return 'text-gray-400'
      }
    })

    const selectedPeriodIndexComputed = computed({
      get: () => props.selectedPeriodIndex,
      set: (value: number) => {
        emit('update:selectedPeriodIndex', value)
      }
    })

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }

    const selectOption = (index: number) => {
      selectedPeriodIndexComputed.value = index
      isOpen.value = false
    }

    onMounted(() => {
      if (props.selectedPeriodIndex !== 2) {
        selectOption(2)
      }
    })

    return {
      circumference,
      dashOffset,
      barColorClass,
      selectedPeriodIndexComputed,
      isOpen,
      toggleDropdown,
      selectOption
    }
  }
}
</script>

<style scoped>
circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
