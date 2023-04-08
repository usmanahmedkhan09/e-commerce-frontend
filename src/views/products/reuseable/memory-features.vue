<template>
    <div>
        <h3>Memory Features:</h3>
    </div>
    <div class="input__wrapper">
        <input v-model="product.memory.internal"
               type="text"
               class="input"
               placeholder="Enter product internal memory size">
        <input v-model="product.memory.ram"
               type="text"
               placeholder="Enter product ram"
               class="input">
    </div>
    <div class="input__wrapper">
        <input v-model="product.battery.type"
               type="text"
               class="input"
               placeholder="Enter product battery type">
        <input v-model="product.performance.processor"
               type="text"
               class="input"
               placeholder="Enter product proccessor">
    </div>
    <div class="checkbox__wrapper">
        <div class="input__wrapper">
            <p for="card"
               id="card">Memory Card</p>
            <input type="radio"
                   id="html"
                   name="memory_card"
                   :value="true"
                   v-model="product.memory.card">
            <label for="html">Yes</label> <br>
        </div>
        <div class="input__wrapper">
            <input type="radio"
                   id="memory"
                   name="memory_card"
                   :value="false"
                   v-model="product.memory.card">
            <label for="memory">No</label><br>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup()
    {
        const { product } = useproductStore()
        // const { product }: Product = storeToRefs(productStore)

        return { product }
    },
})
</script>
<style scoped lang="scss">
.checkbox__wrapper {
    display: flex;
    gap: 16p;
}
</style>
