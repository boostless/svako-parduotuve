<script setup>
import PageHeader from '../components/PageHeader.vue';
import ShopPost from '../components/ShopPost.vue';
</script>

<template>
    <div class="w-full min-h-fit px-32 pb-24 bg-purple-50">
        <PageHeader title="Parduotuvė" subtitle="Išsirinkite jums patinkantį žaisliuką ir mes jį pristatysime kuo greičiau" />
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 auto-rows-auto place-items-center gap-16">
            <ShopPost v-for="i in 20" title="Meskiukas" price="25,00" size="M"/>
        </div>
    </div>
</template>