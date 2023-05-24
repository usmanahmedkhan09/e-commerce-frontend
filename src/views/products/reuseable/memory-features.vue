<template>
    <div class="input__wrapper">
        <div>
            <label for="memory">Internal Memory Size:</label>
            <Field type="text"
                   id="memory"
                   name="name"
                   class="input"
                   rules="required"
                   placeholder="Enter internal memory size"
                   v-model="product.memory.internal" />
            <ErrorMessage class="error__message"
                          name="internal" />
        </div>
        <div>
            <label for="ram">Ram:</label>
            <Field v-model="product.memory.ram"
                   type="text"
                   id="ram"
                   placeholder="Enter ram"
                   class="input"
                   name="ram" />
            <ErrorMessage class="error__message"
                          name="ram" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <label for="battery-type">Battery Type:</label>
            <Field type="text"
                   name="battery type"
                   class="input"
                   rules="required"
                   id="battery-type"
                   v-model="product.battery.type"
                   placeholder="Enter battery type" />
            <ErrorMessage class="error__message"
                          name="battery type" />
        </div>
        <div>
            <label for="proccessor">Proccessor:</label>
            <Field v-model="product.performance.processor"
                   type="text"
                   class="input"
                   id="proccessor"
                   placeholder="Enter proccessor"
                   name="proccessor" />
            <ErrorMessage class="error__message"
                          name="proccessor" />
        </div>
    </div>
    <div class="input__wrapper">
        <div>
            <label for="play-time">Battery Play Time:</label>
            <Field type="text"
                   name="battery type"
                   class="input"
                   rules="required"
                   id="play-time"
                   v-model="product.battery.playTime"
                   placeholder="Enter play time" />
            <ErrorMessage class="error__message"
                          name="battery type" />
        </div>
        <div>
            <label for="chargin-time">Battery Charging Time:</label>
            <Field v-model="product.battery.chargingTime"
                   type="text"
                   class="input"
                   id="chargin-time"
                   placeholder="Battery charging time"
                   name="chargingTime" />
            <ErrorMessage class="error__message"
                          name="chargingTime" />
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
