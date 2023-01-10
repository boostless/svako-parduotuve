<script>
export default {
    data(){
        return {
            list: {
                'Naujienos': {
                    route: '/'
                },
                'Žaisliukai': {
                    route: '/zaisliukai',
                },
                'Apie mus': {
                    route: '/apie_mus',
                },
                'Kontaktai': {
                    route: '/kontaktai',
                },
                'Kainorastis': {
                    route: '/informacija/kainorastis',
                }
            }
        }
    }
}
</script>

<template>
    <header class="flex py-6 px-32 space-x-6 w-hull items-center bg-white shadow-md sticky">
        <div>
            <h1 @click="$router.push('/')" class="text-xl font-semibold hover:text-purple-600 cursor-pointer">Pliušinukai</h1>
        </div>    
        <nav>
            <ul class="flex w-full space-x-6">
                <li @click="$router.push(item.route)" v-for="(item, label) in list" :class="{'text-purple-600': $route.name == label}" class="hover:text-purple-600 cursor-pointer font-semibold text-gray-500">{{label}}</li>
            </ul>
        </nav>
    </header>
</template>