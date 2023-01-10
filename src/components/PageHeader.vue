<script setup>
const props = defineProps({
    title: {
        required: true
    },
    subtitle: {
        required: false
    }
})
</script>

<template>
    <header class="py-24 space-y-6">
        <h1 class="text-center font-semibold text-5xl">{{ title }}</h1>
        <p class="text-gray-500 text-xl text-center">{{ subtitle }}</p>
    </header>
</template>