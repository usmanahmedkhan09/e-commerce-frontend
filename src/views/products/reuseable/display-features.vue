<template>
    <div class="input__wrapper">
        <input v-model="product.display.size"
               type="text"
               class="input"
               placeholder="Enter product screen size"
               required>
        <input v-model="product.display.resolution"
               type="number"
               placeholder="Enter product resolution"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.display.type"
               type="text"
               class="input"
               placeholder="Enter product screen type"
               required>
        <input v-model="product.display.protection"
               type="number"
               placeholder="Enter product protection"
               class="input">
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useproductStore } from '@/stores/product.store'

export default defineComponent({
    setup()
    {
        const { product } = useproductStore()

        return { product }
    },
})
</script>
