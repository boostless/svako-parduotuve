<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue';
import ShopPost from '../components/ShopPost.vue';
import shopItems from '../assets/shop.json'

const displayCount = ref(5)
const currentDisplay = ref(0)
</script>

<template>
    <div class="w-full min-h-screen px-8 sm:px-16 md:px-32 pb-24 bg-purple-50">
        <PageHeader title="Parduotuvė" subtitle="Išsirinkite jums patinkantį žaisliuką ir mes jį pristatysime kuo greičiau" />
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-auto place-items-center gap-16 relative">
            <template  v-for="(item, i) in shopItems">
                <Transition name="slide-down">
                <ShopPost @vnodeMounted="currentDisplay=Number(i)" v-if="Number(i) <= displayCount"
                    :title="item.label" 
                    :price="item.price" 
                    :size="item.size"
                    :description="item.description"
                    :uid="item.uid"
                    :imagePath="item.image.path"
                    :imageAlt="item.image.alt"
                />
                </Transition>
            </template>
            <div @click="displayCount += 5" v-if="currentDisplay == displayCount" class="w-full absolute -bottom-20 flex">
                <button class="mx-auto font-semibold text-base text-purple-450 bg-purple-5 py-3 px-5 rounded-lg hover:text-white hover:bg-purple-450"><font-awesome-icon icon="fa-solid fa-arrow-down" /> Rodyti daugiau</button>
            </div>           
        </div>
    </div>
</template>

<style scoped>
.slide-down-enter-from, .slide-down-leave-to {
    opacity: 0;
}
.slide-down-enter-active, .slide-down-leave-active {
  transition: opacity .2s;
}
</style>