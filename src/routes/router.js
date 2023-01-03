import { createWebHistory, createRouter } from "vue-router";
import Index from '../pages/Index.vue'
import Apie_mus from '../pages/Apie_mus.vue'
import Kontaktai from '../pages/Kontaktai.vue'
import Zaisliukai from '../pages/Zaisliukai.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/zaisliukai',
        name: 'Zaisliukai',
        component: Zaisliukai
    },
    {
        path: '/apie_mus',
        name: 'Apie mus',
        component: Apie_mus
    },
    {
        path: '/kontaktai',
        name: 'Kontaktai',
        component: Kontaktai
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;