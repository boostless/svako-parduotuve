<script setup>
const props = defineProps({
    route: {
        required: false
    },
    title: {
        required: true
    },
    subtitle: {
        required: false
    }
})
</script>

<template>
    <header class="py-10 sm:py-24">
        <p v-if="route != 'false'" class="text-center text-purple-450 font-semibold">{{ $route.name }}</p>
        <h1 class="text-center font-semibold text-lg md:text-xl lg:text-5xl mt-2 md:mt-6">{{ title }}</h1>
        <p class="text-slate-550 text-sm sm:text-base md:text-xl text-center mt-3 md:mt-7 break-words">{{ subtitle }}</p>
    </header>
</template>