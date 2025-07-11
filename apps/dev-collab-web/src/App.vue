<template>
  <div id="app">
    <RouterView />
  </div>
  <div id="app">
    <Chatbot/>
</div>
</template>

<style scoped></style>

<script>
import Chatbot from './components/Chatbot.vue';

export default {
    name: 'App',
    components: {
        Chatbot
    }
}
</script>

