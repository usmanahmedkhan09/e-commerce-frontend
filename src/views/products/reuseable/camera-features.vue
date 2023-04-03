<template>
    <div class="input__wrapper">
        <input v-model="product.camera.frontCamera"
               type="text"
               class="input"
               placeholder="Enter product front camera size"
               required>
        <input v-model="product.camera.backCamera"
               type="text"
               placeholder="Enter product ram"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.camera.backflashlight"
               type="radio"
               class="input"
               placeholder="Enter product screen type"
               required>
        <input v-model="product.camera.frontflashlight"
               type="radio"
               class="input"
               placeholder="Enter product proccessor"
               required>
    </div>
    <div class="input__wrapper">
        <input v-model="product.camera.backvideorecording"
               type="radio"
               class="input"
               placeholder="Enter product battery type"
               required>
        <input v-model="product.camera.frontvideorecording"
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
