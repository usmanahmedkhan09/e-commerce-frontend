<template>
    <div class="input__wrapper">
        <input v-model="product.camera.frontCamera"
               type="text"
               class="input"
               placeholder="Enter specified value"
               required>
        <input v-model="product.camera.backCamera"
               type="text"
               placeholder="Enter specified value"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.camera.backvideorecording"
               type="text"
               class="input"
               placeholder="Enter specified value"
               required>
        <input v-model="product.camera.frontvideorecording"
               type="text"
               class="input"
               placeholder="Enter specified value"
               required>
    </div>
    <div class="">
        <p for="card"
           id="card">Front Flash Light:</p>
        <input type="radio"
               id="html"
               name="fav_language"
               :value="true">
        <label for="html">Yes</label> <br>
        <input type="radio"
               id="memory"
               name="fav_language"
               :value="false">
        <label for="memory">No</label><br>
    </div>
    <div class="">
        <p for="card"
           id="card">Back Flash Light:</p>
        <input type="radio"
               id="html"
               name="fav_language"
               :value="true">
        <label for="html">Yes</label> <br>
        <input type="radio"
               id="memory"
               name="fav_language"
               :value="false">
        <label for="memory">No</label><br>
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
