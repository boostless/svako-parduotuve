<script setup>
import PageHeader from '../components/PageHeader.vue';
import ShopPost from '../components/ShopPost.vue';
import shopItems from '../assets/shop.json'
</script>

<template>
    <div class="w-full min-h-fit px-32 pb-24 bg-purple-50">
        <PageHeader title="Parduotuvė" subtitle="Išsirinkite jums patinkantį žaisliuką ir mes jį pristatysime kuo greičiau" />
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 auto-rows-auto place-items-center gap-16">
            <ShopPost v-for="item in shopItems" 
                :title="item.label" 
                :price="item.price" 
                :size="item.size"
                :description="item.description"
                :uid="item.uid"
                :imagePath="item.image.path"
                :imageAlt="item.image.alt"
            />
        </div>
    </div>
</template>