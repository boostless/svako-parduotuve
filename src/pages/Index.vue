<script>
import PageHeader from '../components/PageHeader.vue';
import json from '../assets/shop.json'
import { useCartStore } from '../stores/shoppingCartStore'

export default {
    components: {
        PageHeader
    },
    data() {
        return {
            show: true,
            currentPic: 0,
            items: Object.values(json)
        }
    },
    methods: {
        scrollPictures() {
            this.show = false
            if(this.items.length > this.items + 1) {
                this.currentPic += 1
            }else{
                this.currentPic = 0
            }
            setTimeout(() => {
                this.show = true
            }, 500)
        },
        addItemToStore() {
            const item = this.items[this.currentPic.toString()]
            this.addItem(item)
        }
    },
    mounted(){
        setInterval(()=>{
            this.scrollPictures()
        }, 5000)
    },
    setup() {
        const store = useCartStore()

        const { addItem } = store

        return {
            addItem
        }
    }
}
</script>

<template>
    <div class="w-full min-h-screen px-8 sm:px-16 md:px-32 pb-24 bg-purple-50">
        <PageHeader route="false" title="Naujienos"/>
        <main class="flex justify-center w-full overflow-hidden">
            <Transition name="scale" mode="in-out">
                <div v-if="show" class="flex flex-col items-center w-[280px] xl:flex-row xl:w-full xl:space-x-10">
                    <div class="w-[280px] h-[186.66px] xl:h-[450px] xl:w-[675px] rounded-lg relative bg-gray-300 flex items-center justify-center text-white">
                        <font-awesome-icon icon="fa-solid fa-image" class="text-8xl animate-pulse" />
                        <img class="w-full h-auto xl:w-auto xl:h-full rounded-lg absolute top-0 left-0" :src="`/images/${items[currentPic.toString()].image.path}`" :alt="items[currentPic.toString()].image.alt">
                    </div>
                    <div class="space-y-2 xl:space-y-0 flex flex-col items-start justify-between xl:h-full">
                        <span class="space-y-0 xl:space-y-2">
                            <h2 class="font-semibold text-3xl">{{ items[currentPic.toString()].label }}</h2>
                            <p class="text-slate-550 break-words">{{ items[currentPic.toString()].description }}</p>
                            <p class="text-purple-450 text-xl font-semibold">{{ items[currentPic.toString()].price }} €</p>
                        </span>
                        <button @click="addItemToStore" class="text-white bg-purple-450 w-full rounded-lg py-2 font-semibold hover:bg-sizebg hover:text-purple-450 flex justify-center items-center space-x-2"><font-awesome-icon class="mt-0.5" icon="fa-solid fa-cart-shopping" />  <span>Įdėti į krepšelį</span></button>
                    </div>
                </div>
            </Transition>    
        </main>
    </div>
</template>

<style scoped>
.scale-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
.scale-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}
.scale-enter-active, .scale-leave-active {
  transition: transform 0.2s, opacity 0.2s;
}
</style>