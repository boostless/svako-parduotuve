import { createApp } from 'vue'
import router from './routes/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createPinia } from 'pinia'

// Icons
import { faShoppingCart, faImage, faNewspaper, faInfoCircle, faFileSignature, faTags, faList, faCircleXmark, faUsers, faArrowTrendUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'
import App from './App.vue'

library.add(faShoppingCart, faEnvelope, faImage, faNewspaper, faInfoCircle, faFileSignature, faTags, faList, faCircleXmark, faUsers, faHeart, faArrowTrendUp, faArrowDown)

const pinia = createPinia()

createApp(App).use(router).use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
