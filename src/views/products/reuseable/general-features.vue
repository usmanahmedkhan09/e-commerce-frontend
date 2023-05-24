<template>
    <div class="input__wrapper">
        <div>
            <label for="date">Release Date:</label>
            <Field v-model="product.generalFeatures.releaseDate"
                   type="date"
                   id="date"
                   class="input"
                   placeholder="Enter product release date"
                   name="date" />
            <ErrorMessage class="error__message"
                          name="date" />
        </div>
        <div>
            <label for="simsupport">Sim Support:</label>
            <Field v-model="product.generalFeatures.simSupport"
                   type="text"
                   placeholder="Sim Support"
                   class="input"
                   id="simsupport"
                   name="simSupport" />
            <ErrorMessage class="error__message"
                          name="simSupport" />
        </div>
    </div>
    <div class="input__wrapper">
        <div>
            <label for="dimension">Dimension:</label>
            <Field v-model="product.generalFeatures.dimensions"
                   type="text"
                   class="input"
                   id="dimension"
                   placeholder="Enter product dimension"
                   name="dimension" />
            <ErrorMessage class="error__message"
                          name="dimension" />
        </div>
        <div>
            <label for="opertaing-system">Operating System:</label>
            <Field v-model="product.generalFeatures.opertaingSystem"
                   type="text"
                   id="operating-system"
                   placeholder="Enter product operating system"
                   class="input"
                   name="operatingSystem" />
            <ErrorMessage class="error__message"
                          name="operatingSystem" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <label for="weight">Weight:</label>
            <Field v-model="product.generalFeatures.weight"
                   type="text"
                   class="input"
                   name="weight"
                   id="weight"
                   placeholder="Enter product weight" />
            <ErrorMessage class="error__message"
                          name="weight" />
        </div>
        <div>
            <label for="wearing-type">Wearing Type:</label>
            <Field v-model="product.generalFeatures.wearingType"
                   type="text"
                   class="input"
                   name="wearingType"
                   id="wearing-type"
                   placeholder="Enter product weight" />
            <ErrorMessage class="error__message"
                          name="wearingType" />
        </div>
    </div>
    <div class="input__wrapper">
        <div>
            <label for="volume-control">Volume Control:</label>
            <Field name="volumeControl"
                   class="input select"
                   as="select"
                   id="volume-control"
                   v-slot="{ value }"
                   :class="{ 'active': product.generalFeatures.volumeControl == undefined }"
                   v-model="product.generalFeatures.volumeControl">
                <option value=""
                        disabled
                        selected>Please Select One</option>
                <option :value="'yes'"
                        :selected="value">Yes</option>
                <option :value="'no'"
                        :selected="value">No</option>
            </Field>
        </div>
        <div>
            <label for="water-proof">Water Proof:</label>
            <Field name="waterproof"
                   id="waterproof"
                   class="input select"
                   as="select"
                   v-slot="{ value }"
                   :class="{ 'active': product.generalFeatures.waterproof == undefined }"
                   v-model="product.generalFeatures.waterproof">
                <option value=""
                        disabled
                        selected>Please Select One</option>
                <option :value="'yes'"
                        :selected="value">Yes</option>
                <option :value="'no'"
                        :selected="value">No</option>
            </Field>
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
        const { product } = storeToRefs(productStore)

        return { product }
    },
})
</script>
