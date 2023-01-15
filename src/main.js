import { createApp } from 'vue'
import router from './routes/router'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'
import App from './App.vue'

library.add(faShoppingCart, faEnvelope)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
