import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// mettere le icone che servono e inserirle in  library ⬇
library.add()

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
