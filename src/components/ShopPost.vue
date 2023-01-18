<script>
import { useCartStore } from '../stores/shoppingCartStore'

export default {
    props: ['title', 'description', 'price', 'size', 'uid', 'imagePath', 'imageAlt'],
    data() {
        return {
            sizes: ['S', 'M', 'L', 'XL'],
            show: true,
        }
    },
    setup() {
        const store = useCartStore()

        const { addItem } = store

        return {
            addItem
        }
    },
    methods: {
        addItemToStore() {
            const props = this.$props
            this.addItem(props)
        }
    }
}
</script>


<template>
    <article v-if="show" class="flex flex-col items-center bg-gray-50 w-[280px] pb-6 space-y-3 shadow">
        <div class="w-[280px] h-[186.66px] bg-gray-300 relative flex items-center justify-center text-white">
            <font-awesome-icon icon="fa-solid fa-image" class="text-8xl animate-pulse" />
            <a class="cursor-pointer" :href="`/images/${imagePath}`"><img class="w-full h-auto absolute top-0 left-0" :src="`/images/${imagePath}`" :alt="imageAlt" /></a>
        </div>
        <header class="w-full space-y-1 px-6">
            <h2 class="text-lg font-semibold">{{ title }}</h2>
            <span class="block text-purple-450">{{ price }} €</span>
        </header>
        <div class="px-6">
            <p class="break-words text-slate-550">{{ description }}</p>
        </div>
        <div class="w-full space-y-1 px-6">
            <span class="font-semibold">Dydis:</span>
            <ul class="flex space-x-2">
                <li @click="size = item" :class="{'bg-purple-450 text-white': size == item, 'bg-sizebg  text-purple-450': size != item}" class="text-sm w-8 h-8 flex items-center justify-center rounded font-semibold shadow-sm hover:text-white hover:bg-purple-450 cursor-pointer" v-for="item in sizes">{{ item }}</li>
            </ul>
        </div>
        <div class="w-full px-6">
            <button @click="addItemToStore" class="text-white bg-purple-450 w-full rounded-lg py-2 font-semibold hover:bg-sizebg hover:text-purple-450 flex justify-center items-center space-x-2"><font-awesome-icon class="mt-0.5" icon="fa-solid fa-cart-shopping" />  <span>Įdėti į krepšelį</span></button>
        </div>
    </article>
</template>