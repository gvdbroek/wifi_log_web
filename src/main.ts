import './assets/main.css'

import {createApp } from 'vue'
import ApiCallTest from './ApiCallTest.vue'

// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'
// const vuetify = createVuetify({
//   components,
//   directives,
//   icons:{
//     defaultSet:'mdi',
//     aliases,
//     sets:{
//       mdi,
//     }
//   }
// })

let app = createApp(ApiCallTest);
app.mount('#app')
// app.use(vuetify).mount('#app')
// let app = createApp(ApiCallTest).mount('#app')
