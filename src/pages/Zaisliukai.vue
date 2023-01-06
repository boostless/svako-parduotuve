<script>
import ShopPost from '../components/ShopPost.vue'

export default {
    components: {
        ShopPost
    },
    data() {
        return {
            loaded: true,
            items: [
                {name: 'Meškiukas'}
            ]
        }
    }
}
</script>

<template>
    <div class="w-full flex justify-center min-h-fit pt-16 pb-32">
        <div class="w-2/4 space-y-8">
            <header>
                <h1 class="text-4xl font-thin">Žaisliukai</h1>
            </header>
            <div class="grid grid-cols-4 auto-rows-auto">
                <ShopPost v-for="i in 10" title="Meskiukas" image="https://picsum.photos/200/300"/>
            </div>
        </div>     
    </div>
</template>