<template>
    <div class="input__wrapper">
        <input v-model="product.connectivity.bluetooth"
               type="radio"
               class="input"
               placeholder="Enter product front camera size"
               required>
        <input v-model="product.connectivity['3g']"
               type="radio"
               placeholder="Enter product ram"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.connectivity['4G/LTE']"
               type="radio"
               class="input"
               placeholder="Enter product screen type"
               required>
        <input v-model="product.connectivity['5G']"
               type="radio"
               class="input"
               placeholder="Enter product proccessor"
               required>
    </div>
    <div class="input__wrapper">
        <input v-model="product.connectivity.radio"
               type="radio"
               class="input"
               placeholder="Enter product battery type"
               required>
        <input v-model="product.connectivity.NFC"
               type="radio"
               class="input"
               placeholder="Enter product proccessor"
               required>
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
