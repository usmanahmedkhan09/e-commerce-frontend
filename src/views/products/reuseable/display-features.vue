<template>
    <div>
        <h3>Display Features:</h3>
    </div>
    <div class="input__wrapper">
        <div>
            <Field v-model="product.display.size"
                   type="text"
                   class="input"
                   placeholder="Enter product screen size"
                   name="size" />
            <ErrorMessage class="error__message"
                          name="size" />
        </div>
        <div>
            <Field v-model="product.display.resolution"
                   type="text"
                   placeholder="Enter product resolution"
                   class="input"
                   name="resolution" />
            <ErrorMessage class="error__message"
                          name="resolution" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <Field v-model="product.display.type"
                   type="text"
                   class="input"
                   placeholder="Enter product screen type"
                   name="screenType" />
            <ErrorMessage class="error__message"
                          name="screenType" />
        </div>
        <div>
            <Field v-model="product.display.protection"
                   type="text"
                   placeholder="Enter product protection"
                   class="input"
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
