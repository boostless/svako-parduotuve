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
    <header class="py-24">
        <p v-if="route != 'false'" class="text-center text-purple-600 font-semibold">{{ this.$route.name }}</p>
        <h1 class="text-center font-semibold text-5xl mt-6">{{ title }}</h1>
        <p class="text-gray-500 text-xl text-center mt-7">{{ subtitle }}</p>
    </header>
</template>