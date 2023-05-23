<template>
    <div>
        <h3>Memory Features:</h3>
    </div>
    <div class="input__wrapper">
        <div>
            <Field type="text"
                   name="name"
                   class="input"
                   rules="required"
                   placeholder="Enter product internal memory size"
                   v-model="product.memory.internal" />
            <ErrorMessage class="error__message"
                          name="internal" />
        </div>
        <div>
            <Field v-model="product.memory.ram"
                   type="text"
                   placeholder="Enter product ram"
                   class="input"
                   name="ram" />
            <ErrorMessage class="error__message"
                          name="ram" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <Field type="text"
                   name="battery type"
                   class="input"
                   rules="required"
                   v-model="product.battery.type"
                   placeholder="Enter product battery type" />
            <ErrorMessage class="error__message"
                          name="battery type" />
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
    <div class="input__wrapper">
        <div>
            <Field type="text"
                   name="battery type"
                   class="input"
                   rules="required"
                   v-model="product.battery.type"
                   placeholder="Enter product battery type" />
            <ErrorMessage class="error__message"
                          name="battery type" />
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
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { Field, ErrorMessage } from 'vee-validate'
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: { Field, ErrorMessage },
    setup()
    {
        const productStore = useproductStore()
        const { product } = productStore
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
