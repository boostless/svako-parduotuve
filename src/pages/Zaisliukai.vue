<script>
import PageHeader from '../components/PageHeader.vue';
import ShopPost from '../components/ShopPost.vue';
import json from '../assets/shop.json'

export default {
    components: {
        PageHeader,
        ShopPost
    },
    data() {
        return {
            filter: 'Filtras',
            shopItems: Object.values(json),
            displayCount: 5,
            currentDisplay: 0,
            showFilters: false
        }
    },
    computed: {
        itemFilter() {
            switch(this.filter) {
                case 'price-ascending':
                    this.filter = 'Pigiausias virsuje'
                    this.shopItems.sort((a,b) => a.price - b.price)              
                    break;
                case 'price-descending':
                    this.filter = 'Brangiausias virsuje'
                    this.shopItems.sort((a,b) => b.price - a.price) 
                    break;
            }

            return this.shopItems
        }
    }
}
</script>

<template>
    <div class="w-full min-h-screen px-8 sm:px-16 md:px-32 pb-24 bg-purple-50 z-10">
        <PageHeader title="Parduotuvė" subtitle="Išsirinkite jums patinkantį žaisliuką ir mes jį pristatysime kuo greičiau" />
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-auto place-items-center gap-16 relative">
            <div class="col-span-full place-self-start relative">
                <button @click="showFilters = !showFilters" :class="{'rounded-b-none': showFilters}" class="font-semibold w-[280px] text-base text-center sm:text-left text-purple-450 bg-purple-5 py-3 px-5 rounded-lg hover:text-white hover:bg-purple-450"><font-awesome-icon icon="fa-solid fa-filter" /> {{ filter }}</button>
                <Transition name="scale">
                    <div v-if="showFilters" class="absolute w-[280px] bg-purple-5 text-purple-450 py-3 z-20 rounded-b-lg rounded-r-lg font-semibold">
                        <ul>
                            <li @click="filter='price-ascending'; showFilters=false" class="hover:bg-purple-450 hover:text-white cursor-pointer px-3">Pigiausias virsui</li>
                            <li @click="filter='price-descending'; showFilters=false" class="hover:bg-purple-450 hover:text-white cursor-pointer px-3">Brangiausias virsui</li>
                        </ul>
                    </div>
                </Transition>
            </div>
            <template  v-for="(item, i) in itemFilter">
                <Transition name="fade">
                <ShopPost @vnodeMounted="currentDisplay=Number(i)" v-if="Number(i)+1 <= displayCount"
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
            <div @click="displayCount += 5" v-if="currentDisplay+1 == displayCount" class="w-full absolute -bottom-20 flex">
                <button class="mx-auto font-semibold text-base text-purple-450 bg-purple-5 py-3 px-5 rounded-lg hover:text-white hover:bg-purple-450"><font-awesome-icon icon="fa-solid fa-arrow-down" /> Rodyti daugiau</button>
            </div>           
        </div>
    </div>
</template>

<style scoped>
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.scale-enter-from, .scale-leave-to {
  opacity: 0;
    transform: scale(0.9);
}
.scale-enter-active, .scale-leave-active {
  transition: transform 0.2s, opacity 0.2s;
}
</style>