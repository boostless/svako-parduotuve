<script>
export default {
    data(){
        return {
            list: {
                'Naujienos': {
                    route: '/',
                    icon: 'fa-solid fa-newspaper'
                },
                'Žaisliukai': {
                    route: '/zaisliukai',
                    icon: 'fa-solid fa-cart-shopping'
                },
                'Apie mus': {
                    route: '/apie_mus',
                    icon: 'fa-solid fa-info-circle'
                },
                'Kontaktai': {
                    route: '/kontaktai',
                    icon: 'fa-solid fa-file-signature'
                },
                'Kainos': {
                    route: '/informacija/kainorastis',
                    icon: 'fa-solid fa-tags'
                }
            },
            burgerMenu: false,
        }
    }
}
</script>

<template>
    <header class="flex flex-row sm:flex-col md:flex-row justify-between sm:justify-start py-6 px-8 sm:px-16 md:px-32 md:space-x-6 w-full items-center bg-white shadow-md sticky">
        <div>
            <h1 @click="$router.push('/')" class="text-xl font-semibold hover:text-purple-450 cursor-pointer">Pliušinukai</h1>
        </div>    
        <nav class="hidden sm:grid">
            <ul class="flex flex-row w-full items-stretch space-x-3 md:space-x-6">
                <li @click="$router.push(item.route)" v-for="(item, label) in list" :class="{'text-purple-450': $route.name == label, 'text-slate-550': $route.name != label}" class="hover:text-purple-450 cursor-pointer font-semibold">{{label}}</li>
            </ul>
        </nav>
        <button @click="burgerMenu=true" class="grid sm:hidden"><font-awesome-icon icon="fa-solid fa-list" class="text-xl"/></button>
    </header>
    <Transition name="slide-down">
        <div v-if="burgerMenu" class="absolute z-10 w-2/3 h-full bg-gray-50 top-0 right-0 rounded-l-2xl flex flex-col items-center justify-center shadow-xl">
            <div @click="burgerMenu=false" class="absolute top-0 right-0 m-10"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-2xl text-slate-550"/></div>
            <nav>
                <ul class="flex flex-col text-xl space-y-2">
                    <li @click="$router.push(item.route); burgerMenu = false" v-for="(item, label) in list" :class="{'text-purple-450': $route.name == label, 'text-slate-550': $route.name != label}" class="hover:text-purple-450 cursor-pointer font-semibold"><font-awesome-icon :icon="item.icon" class="mr-2" /> {{label}}</li>
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