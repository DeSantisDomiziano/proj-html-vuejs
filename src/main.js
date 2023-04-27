import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMountain } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faPhone, faMountain, faFacebookF, faInstagram, faTwitter)

createApp(App).component('f-a-icon', FontAwesomeIcon).mount('#app')
