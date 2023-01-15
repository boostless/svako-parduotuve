import { createApp } from 'vue'
import router from './routes/router'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faShoppingCart, faImage, faNewspaper, faInfoCircle, faFileSignature, faTags, faList, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './style.css'
import App from './App.vue'

library.add(faShoppingCart, faEnvelope, faImage, faNewspaper, faInfoCircle, faFileSignature, faTags, faList, faCircleXmark)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
