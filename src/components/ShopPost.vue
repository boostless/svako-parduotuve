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
    <article class="flex flex-col items-center bg-gray-50 w-[280px] pb-6 space-y-3 shadow">
        <img class="w-full h-auto" src="https://cdn.discordapp.com/attachments/1018802602542120962/1062670762537926776/IMG_0294-min.JPG" />
        <header class="w-full space-y-1 px-6">
            <h2 class="text-lg font-semibold">{{ title }}</h2>
            <span class="block text-purple-450">{{ price }} €</span>
        </header>
        <div class="px-6">
            <p class="break-words text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div class="w-full space-y-1 px-6">
            <span class="font-semibold">Dydis:</span>
            <ul class="flex space-x-2">
                <li :class="{'bg-purple-450 text-white': size == item, 'bg-sizebg  text-purple-450': size != item}" class="text-sm w-8 h-8 flex items-center justify-center rounded font-semibold shadow-sm" v-for="item in sizes">{{ item }}</li>
            </ul>
        </div>
        <div class="w-full px-6">
            <button class="text-white bg-purple-450 w-full rounded-lg py-2 font-semibold transition-colors ease-in hover:bg-slate-200 hover:text-purple-450">Įdėti į krepšelį</button>
        </div>
    </article>
</template>