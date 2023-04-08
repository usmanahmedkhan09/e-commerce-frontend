<template>
    <div>
        <h3>General Features:</h3>
    </div>
    <div class="input__wrapper">
        <input v-model="product.generalFeatures.releaseDate"
               type="date"
               class="input"
               placeholder="Enter product release date">
        <input v-model="product.generalFeatures.simSupport"
               type="text"
               placeholder="Sim Support"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.generalFeatures.dimensions"
               type="text"
               class="input"
               placeholder="Enter product dimension">
        <input v-model="product.generalFeatures.opertaingSystem"
               type="text"
               placeholder="Enter product operating system"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.generalFeatures.weight"
               type="text"
               class="input"
               placeholder="Enter product weight">
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
