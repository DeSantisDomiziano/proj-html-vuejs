import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(faPhone)

createApp(App).component('f-a-icon', FontAwesomeIcon).mount('#app')
