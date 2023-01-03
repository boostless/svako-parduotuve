<script>
import ShopPost from '../components/ShopPost.vue'

export default {
    components: {
        ShopPost
    }
}
</script>

<template>
    <div class="w-full flex justify-center min-h-fit py-16">
        <div class="w-2/4 space-y-8">
            <header>
                <h1 class="text-4xl font-thin">Žaisliukai</h1>
            </header>
            <div class="grid grid-cols-4 auto-rows-auto">
                <ShopPost v-for="i in 10" title="Meskiukas"/>
            </div>
        </div>     
    </div>
</template>