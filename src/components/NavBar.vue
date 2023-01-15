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
                'Kainos': {
                    route: '/informacija/kainorastis',
                }
            },
            burgerMenu: false,
        }
    }
}
</script>

<template>
    <header class="flex flex-col md:flex-row justify-center sm:justify-start py-6 px-32 md:space-x-6 w-full items-center bg-white shadow-md sticky">
        <div>
            <h1 @click="$router.push('/')" class="text-xl font-semibold hover:text-purple-600 cursor-pointer">Pliušinukai</h1>
        </div>    
        <nav class="hidden sm:grid">
            <ul class="flex flex-row w-full space-x-3 md:space-x-6">
                <li @click="$router.push(item.route)" v-for="(item, label) in list" :class="{'text-purple-600': $route.name == label, 'text-gray-500': $route.name != label}" class="hover:text-purple-600 cursor-pointer font-semibold">{{label}}</li>
            </ul>
        </nav>
        <button @click="burgerMenu = true" class="grid sm:hidden">Menu</button>
    </header>
    <Transition name="slide-down">
        <div v-if="burgerMenu" class="absolute z-10 w-2/3 h-full bg-gray-50 top-0 right-0 rounded-l-2xl flex flex-col items-center justify-center shadow-xl">
            <nav>
                <ul class="flex flex-col text-xl space-y-2">
                    <li @click="$router.push(item.route); burgerMenu = false" v-for="(item, label) in list" :class="{'text-purple-600': $route.name == label, 'text-gray-500': $route.name != label}" class="hover:text-purple-600 cursor-pointer font-semibold">{{label}}</li>
                </ul>
            </nav>
        </div>
    </Transition> 
</template>

<style scoped>
.slide-down-enter-from, .slide-down-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity .2s, transform .3s ease-in-out;
}
</style>