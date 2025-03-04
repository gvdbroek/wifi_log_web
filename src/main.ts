import './assets/main.css'

import {createApp } from 'vue'
import ApiCallTest from './ApiCallTest.vue'

// Date picker plugin
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

let app = createApp(ApiCallTest);
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
// app.use(vuetify).mount('#app')
// let app = createApp(ApiCallTest).mount('#app')
