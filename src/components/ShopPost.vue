<script setup>
const sizes = [
    'S', 'M', 'L', 'XL'
]

const props = defineProps({
    title: { required: true },
    price: { required: true },
    size: { required: true }
})
</script>

<template>
    <article class="flex flex-col items-center bg-gray-50 w-[280px] p-6 space-y-3">
        <header class="w-full space-y-1">
            <h2 class="text-lg font-semibold">{{ title }}</h2>
            <span class="block text-purple-600">{{ price }} €</span>
        </header>
        <div>
            <p class="break-words text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="w-full space-y-1">
            <span class="font-semibold">Dydis:</span>
            <ul class="flex space-x-2">
                <li :class="{'bg-purple-500 text-white': size == item, 'bg-sizebg  text-purple-600': size != item}" class="text-sm w-8 h-8 flex items-center justify-center rounded font-semibold shadow-sm" v-for="item in sizes">{{ item }}</li>
            </ul>
        </div>
        <button class="text-white bg-purple-500 w-full rounded-lg py-2 font-semibold transition-colors ease-in hover:bg-slate-200 hover:text-purple-600">Įdėti į krepšelį</button>
    </article>
</template>