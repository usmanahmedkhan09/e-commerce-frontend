<template>
    <div class="input__wrapper">
        <input v-model="product.memory.internal"
               type="text"
               class="input"
               placeholder="Enter product internal memory size"
               required>
        <input v-model="product.memory.ram"
               type="text"
               placeholder="Enter product ram"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.battery.type"
               type="radio"
               class="input"
               placeholder="Enter product battery type"
               required>
        <input v-model="product.performance.processor"
               type="text"
               class="input"
               placeholder="Enter product proccessor"
               required>
    </div>
    <div class="">
        <p for="card"
           id="card">Memory Card</p>
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
