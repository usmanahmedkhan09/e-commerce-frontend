<template>
    <div class="input__wrapper">
        <div>
            <label for="screen-size">Screen Size:</label>
            <Field v-model="product.display.size"
                   type="text"
                   class="input"
                   id="screen-size"
                   placeholder="Enter screen size"
                   name="size" />
            <ErrorMessage class="error__message"
                          name="size" />
        </div>
        <div>
            <label for="screen-resolution">Screen Resolution:</label>
            <Field v-model="product.display.resolution"
                   type="text"
                   placeholder="Enter resolution"
                   class="input"
                   id="screen-resolution"
                   name="resolution" />
            <ErrorMessage class="error__message"
                          name="resolution" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <label for="screen-type">Screen Type:</label>
            <Field v-model="product.display.type"
                   type="text"
                   class="input"
                   id="screen-type"
                   placeholder="Enter screen type"
                   name="screenType" />
            <ErrorMessage class="error__message"
                          name="screenType" />
        </div>
        <div>
            <label for="screen-protection">Screen Protection:</label>
            <Field v-model="product.display.protection"
                   type="text"
                   placeholder="Enter screen protection"
                   class="input"
                   id="screen-protection"
                   name="protection" />
            <ErrorMessage class="error__message"
                          name="protection" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, } from 'vue'
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
