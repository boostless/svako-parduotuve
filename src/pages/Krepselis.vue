<script>
import { useCartStore } from '../stores/shoppingCartStore';
import PageHeader from '../components/PageHeader.vue'

export default {
    components: {
        PageHeader
    },  
    data() {
        return {
            items: []
        }
    },
    methods: {
        getCartItems() {
            if(localStorage.getItem('shoppingCart')) {
                return localStorage.getItem('shoppingCart')
            }else {
                return this.items
            }
        }
    },
    mounted() {
        this.items = this.store.getItems
    },  
    setup(){
        const store = useCartStore()

        return {
            store
        }
    }
}
</script>

<template>
    <div class="w-full min-h-screen px-8 sm:px-16 md:px-32 pb-6 bg-purple-50">
        <PageHeader route="false" title="Pirkinių krepšelis" />
        <main class="w-full">
            <div class="w-full grid grid-cols-3 auto-rows-auto">
                <div class="bg-gray-50 flex" v-for="item in items">
                    <div class="w-[240px] h-[160px] bg-gray-300 relative flex items-center justify-center text-white">
                        <font-awesome-icon icon="fa-solid fa-image" class="text-8xl animate-pulse" />
                        <img class="w-full h-auto absolute top-0 left-0" :src="`/images/${item.imagePath}`" :alt="item.imageAlt" />
                    </div>
                    <div class="flex flex-col">
                        <header class="w-full space-y-0.5 px-6">
                            <h2 class="text-lg font-semibold">{{ item.title }}</h2>
                            <span class="block text-purple-450 text-lg font-semibold">{{ item.price }} €</span>
                        </header>
                        <div class="w-full space-y-1 px-6">
                            <span class="font-semibold">Dydis:</span>
                            <div class="text-sm w-8 h-8 flex items-center justify-center rounded font-semibold shadow-sm text-white bg-purple-450">{{ item.size }}</div>
                        </div>
                        <button>Iššimti</button>
                    </div>
                </div>
            </div>
        </main> 
    </div>
</template>