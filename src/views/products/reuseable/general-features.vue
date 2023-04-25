<template>
    <div>
        <h3>General Features:</h3>
    </div>
    <div class="input__wrapper">
        <div>
            <Field v-model="product.generalFeatures.releaseDate"
                   type="date"
                   class="input"
                   placeholder="Enter product release date"
                   name="date" />
            <ErrorMessage class="error__message"
                          name="date" />
        </div>
        <div>
            <Field v-model="product.generalFeatures.simSupport"
                   type="text"
                   placeholder="Sim Support"
                   class="input"
                   name="simSupport" />
            <ErrorMessage class="error__message"
                          name="simSupport" />
        </div>
    </div>
    <div class="input__wrapper">
        <div>
            <Field v-model="product.generalFeatures.dimensions"
                   type="text"
                   class="input"
                   placeholder="Enter product dimension"
                   name="dimension" />
            <ErrorMessage class="error__message"
                          name="dimension" />
        </div>
        <div>
            <Field v-model="product.generalFeatures.opertaingSystem"
                   type="text"
                   placeholder="Enter product operating system"
                   class="input"
                   name="operatingSystem" />
            <ErrorMessage class="error__message"
                          name="operatingSystem" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <Field v-model="product.generalFeatures.weight"
                   type="text"
                   class="input"
                   name="weight"
                   placeholder="Enter product weight" />
            <ErrorMessage class="error__message"
                          name="weight" />
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
