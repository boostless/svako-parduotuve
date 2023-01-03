<script>
export default {
    data(){
        return {
            list: ['Naujienos', 'Zaisliukai', 'Apie mus', 'Galerija']
        }
    }
}
</script>

<template>
    <nav class="flex w-full h-48 bg-pink-200">
        <div class="h-full w-2/4 mx-auto pt-8 pb-4 flex flex-col justify-between">
            <div>
                <h1 class="text-3xl font-bold">Pliušinukai</h1>
                <p>Ranku darbo</p>
            </div>
            <ul class="flex w-full space-x-6">
                <li v-for="item in list" class="hover:text-gray-500 cursor-pointer">{{item}}</li>
            </ul>
        </div>
    </nav>
</template>