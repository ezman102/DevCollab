<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-6">Github Webhook - Create New WebHook</h1>

    <div v-if="currentStep === 1">
      <WebhookUrl @next="nextStep" />
    </div>
    <div v-if="currentStep === 2">
      <CreateRules @next="nextStep" @previous="previousStep" />
    </div>
    <div v-if="currentStep === 3">
      <Confirmation :url="webhookUrl" :name="name" @save="saveWebhook" @previous="previousStep" />
    </div>
  </div>
</template>

// For icons
<script lang="ts">
import { ref } from 'vue';
import _ from 'lodash'
import { defineComponent } from 'vue'
import github from '@/assets/icons/Icon_github.svg'
import gitlab from '@/assets/icons/Icon_gitlab.svg'

import WebhookUrl from '@/components/automation/GithubWebhookUrl.vue';
import CreateRules from '@/components/automation/GithubWebhookName.vue';
import Confirmation from '@/components/automation/GithubConfirm.vue';

export default defineComponent({
  data() {
    return {
      github: github,
      gitlab: gitlab
    }
  },
  components: { WebhookUrl, CreateRules, Confirmation },
  setup() {
    const currentStep = ref(1);
    const webhookUrl = ref('');
    const name = ref('');

    const nextStep = (data: any) => {
      if (currentStep.value === 1) {
        webhookUrl.value = data.url;
      } else if (currentStep.value === 2) {
        name.value = data.name;
      }
      currentStep.value++;
      console.log('value:', currentStep.value);
    };

    const previousStep = () => {
      currentStep.value--;
      console.log('value:', currentStep.value);
    };

    const saveWebhook = () => {
      console.log('Webhook URL:', webhookUrl.value);
      console.log('Name:', name.value);
    };

    return { currentStep, webhookUrl, name, nextStep, previousStep, saveWebhook };
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.custom-box {
  @apply bg-gray-100 p-4 rounded-lg;
  border: 1px solid $gray-2;
}

.custom-link {
  color: $accent-color;

  &:hover {
    text-decoration: underline;
  }
}

.responsive-text {
  font-size: 1rem;

  @include responsive(small) {
    font-size: 1.2rem;
  }

  @include responsive(medium) {
    font-size: 1.4rem;
  }

  @include responsive(large) {
    font-size: 1.6rem;
  }

  @include responsive(xlarge) {
    font-size: 1.8rem;
  }

  @include responsive(xxlarge) {
    font-size: 2rem;
  }
}

.bg-primary-color {
  background-color: $primary-color;
}

.bg-secondary-color {
  background-color: $secondary-color;
}

.bg-accent-color {
  background-color: $accent-color;
}

.bg-gray-1 {
  background-color: $gray-1;
}

.bg-gray-2 {
  background-color: $gray-2;
}

.bg-brown-1 {
  background-color: $brown-1;
}

.bg-pink-red-1 {
  background-color: $pink-red-1;
}

.bg-red-1 {
  background-color: $red-1;
}

.color-white {
  color: $vt-c-white;
}

.block {
  display: flex;
  align-items: center;
  width: 250px;
}

.icon {
  margin-right: 15px;
}

.icon img {
  width: 50px;
  height: 50px;
}

.text p {
  margin: 0;
}

.hover-div {
  cursor: pointer;
  transition: background-color 0.3s;
}

.hover-div:hover {
  background-color: lightgray;
}
</style>
