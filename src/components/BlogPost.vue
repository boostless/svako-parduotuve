<script setup>
const props = defineProps({
    title: '',
    description: '',
    group: '',
    time: '',
    imagePath: ''
})
</script>

<template>
    <article class="w-[358px] flex flex-col space-y-3">
        <div class="w-[358px] h-[225px] bg-gray-500 rounded-lg relative flex items-center justify-center text-white">
            <font-awesome-icon icon="fa-solid fa-image" class="text-8xl animate-pulse" />
            <img class="w-full h-auto absolute top-0 right-0 rounded-lg" :src="`/images/${imagePath}.png`">
        </div>
        <header class="space-y-1">
            <p class="font-semibold text-purple-450">{{ group }} • {{ time }} min.</p>
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <p class="text-slate-550">{{ description }}</p>
        </header>
    </article>
</template>
