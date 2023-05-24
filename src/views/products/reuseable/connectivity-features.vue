<template>
    <!-- <div>
        <h3>Connectivity Features:</h3>
    </div> -->
    <div class="input__wrapper">
        <div>
            <label for="bluetooth">Bluetooth:</label>
            <select name="bluetooth"
                    id="bluetooth"
                    class="input select"
                    v-model="product.connectivity.bluetooth">
                <option :value="undefined"
                        disabled
                        selected>Please Select One</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
        <div>
            <label for="bluetooth">3G:</label>
            <select name="3g"
                    id="3g"
                    class="input select"
                    v-model="product.connectivity._3g">
                <option :value="undefined"
                        disabled
                        selected>Please Select One</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
        <div>
            <label for="bluetooth">4G/LTE:</label>
            <select name="4g"
                    id="4g"
                    class="input select"
                    v-model="product.connectivity._4GLTE">
                <option :value="undefined"
                        disabled
                        selected>Please Select One</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
        <div>
            <label for="bluetooth">5G:</label>
            <select name="5g"
                    id="5g"
                    class="input select"
                    v-model="product.connectivity._5G">
                <option :value="undefined"
                        disabled
                        selected>Please Select One</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
    </div>
    <div class="input__wrapper">
        <div>
            <label for="bluetooth">NFC:</label>
            <select name="nfc"
                    id="nfc"
                    class="input select"
                    v-model="product.connectivity.NFC">
                <option :value="undefined"
                        disabled
                        selected>Please Select One</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
        <div>
            <label for="bluetooth">Wifi:</label>
            <select name="wifi"
                    id="wifi"
                    class="input select"
                    v-model="product.connectivity.wifi">
                <option :value="undefined"
                        disabled
                        selected>Please Select One</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
        <div>
            <label for="bluetooth">Radio:</label>
            <select name="radio"
                    id="radio"
                    class="input select"
                    v-model="product.connectivity.radio">
                <option :value="undefined"
                        disabled
                        selected>Please Select One</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
        <div>
            <label for="microphone">MicroPhone:</label>
            <Field name="microphone"
                   id="microphone"
                   class="input select"
                   as="select"
                   v-slot="{ value }"
                   :class="{ 'active': product.connectivity.microPhone == undefined }"
                   v-model="product.connectivity.microPhone">
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
tr {
    display: flex;
    gap: 16px;

    td {
        display: flex;
        gap: 10px;

        &:first-child {
            width: 120px;
        }
    }
}
</style>