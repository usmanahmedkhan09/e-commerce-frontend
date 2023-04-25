<template>
    <div>
        <h3>Memory Features:</h3>
    </div>
    <div class="input__wrapper">
        <div>
            <Field v-model="product.memory.internal"
                   type="text"
                   class="input"
                   name="memory"
                   placeholder="Enter product internal memory size" />
            <ErrorMessage class="error__message"
                          name="memory" />
        </div>
        <div>
            <Field v-model="product.memory.ram"
                   type="text"
                   placeholder="Enter product ram"
                   class="input"
                   name="RAM" />
            <ErrorMessage class="error__message"
                          name="RAM" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <Field v-model="product.battery.type"
                   type="text"
                   class="input"
                   placeholder="Enter product battery type"
                   name="battery" />
            <ErrorMessage class="error__message"
                          name="battery" />
        </div>
        <div>
            <Field v-model="product.performance.processor"
                   type="text"
                   class="input"
                   placeholder="Enter product proccessor"
                   name="proccessor" />
            <ErrorMessage class="error__message"
                          name="proccessor" />
        </div>
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
import { defineComponent } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { Field, ErrorMessage } from 'vee-validate'

export default defineComponent({
    components: { Field, ErrorMessage },
    setup()
    {
        const { product } = useproductStore()

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
