import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    getters: {
        getItems: (state) => state.items
    },
    actions: {
        addItem(item) {
            this.items.push(item)
        }
    }
})