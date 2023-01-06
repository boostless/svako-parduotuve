<script>
export default {
    data(){
        return {
            list: {
                'Naujienos': {
                    route: '/',
                    name: 'Index'
                },
                'Žaisliukai': {
                    route: '/zaisliukai',
                    name: 'Zaisliukai'
                },
                'Apie mus': {
                    route: '/apie_mus',
                    name: 'Apie_mus'
                },
                'Kontaktai': {
                    route: '/kontaktai',
                    name: 'Kontaktai'
                },
                'Dydziai': {
                    route: '/informacija/dydziai',
                    name: 'Dydziai'
                },
                'Kainorastis': {
                    route: '/informacija/kainorastis',
                    name: 'Kainorastis'
                }
            }
        }
    }
}
</script>

<template>
    <header class="flex justify-center py-8 w-hull h-48 bg-pink-200 shadow-md">
        <div class="h-full w-2/4 flex flex-col justify-between">
            <div>
                <h1 @click="$router.push('/')" class="text-3xl font-bold hover:text-gray-500 cursor-pointer">Pliušinukai</h1>
                <p class="text-sm">Ranku darbo</p>
            </div>
            <nav>
                <ul class="flex w-full space-x-6">
                    <li @click="$router.push(item.route)" v-for="(item, label) in list" :class="{'text-gray-500': $route.name == item.name}" class="hover:text-gray-500 cursor-pointer text-sm">{{label}}</li>
                </ul>
            </nav>
        </div>
    </header>
</template>