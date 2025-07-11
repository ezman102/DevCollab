import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { usePinia } from './vendors/pinia'
import { useVuetify } from './vendors/vuetify'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// Import Bootstrap and its styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/styles.scss'

// Import Bootstrap and its styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/styles.scss'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);

app.use(useVuetify())
app.use(usePinia())
app.use(router)

app.mount('#app')
