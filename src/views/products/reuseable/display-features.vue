<template>
    <div>
        <h3>Display Features:</h3>
    </div>
    <div class="input__wrapper">
        <input v-model="product.display.size"
               type="text"
               class="input"
               placeholder="Enter product screen size">
        <input v-model="product.display.resolution"
               type="text"
               placeholder="Enter product resolution"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.display.type"
               type="text"
               class="input"
               placeholder="Enter product screen type">
        <input v-model="product.display.protection"
               type="text"
               placeholder="Enter product protection"
               class="input">
    </div>
</template>
<script lang="ts">
import { defineComponent, } from 'vue'
import { useproductStore } from '@/stores/product.store'

export default defineComponent({
    setup()
    {
        const { product } = useproductStore()

        return { product }
    },
})
</script>
