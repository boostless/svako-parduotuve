import { createWebHistory, createRouter } from "vue-router";
import Index from '../pages/Index.vue'
import Apie_mus from '../pages/Apie_mus.vue'
import Kontaktai from '../pages/Kontaktai.vue'
import Zaisliukai from '../pages/Zaisliukai.vue'
import Kainorastis from '../pages/informacija/Kainorastis.vue'
import Dydziai from '../pages/informacija/Dydziai.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        path: '/zaisliukai',
        name: 'Žaisliukai',
        component: Zaisliukai,
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
    },
    {
        path: '/informacija',
        name: 'Informacija',
        children: [
            {
                path: '/informacija/kainorastis',
                name: 'Kainorastis',
                component: Kainorastis
            },
            {
                path: '/informacija/dydziai',
                name: 'Dydziai',
                component: Dydziai
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;