<script>
import { useCartStore } from '../stores/shoppingCartStore';

export default {
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.items = this.store.getItems
    },  
    setup(){
        const store = useCartStore()

        return {
            store
        }
    }
}
</script>

<template>
    <div class="w-full min-h-screen">
        <template v-for="item in items">
            
        </template>
    </div>
</template>