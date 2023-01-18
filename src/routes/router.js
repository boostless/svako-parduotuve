import { createWebHistory, createRouter } from "vue-router";
import Index from '../pages/Index.vue'
import Apie_mus from '../pages/Apie_mus.vue'
import Kontaktai from '../pages/Kontaktai.vue'
import Zaisliukai from '../pages/Zaisliukai.vue'
import Kainorastis from '../pages/informacija/Kainorastis.vue'
import Krepselis from '../pages/Krepselis.vue'

const routes = [
    {
        path: '/',
        name: 'Naujienos',
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
        path: '/krepselis',
        name: 'Krepselis',
        component: Krepselis
    },
    {
        path: '/informacija',
        name: 'Informacija',
        children: [
            {
                path: '/informacija/kainorastis',
                name: 'Kainos',
                component: Kainorastis
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;