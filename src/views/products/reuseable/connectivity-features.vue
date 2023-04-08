<template>
    <tr>
        <td>
            <p for="card"
               id="card"
               class="item">Bluetooth:</p>
        </td>
        <td>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </td>
        <td>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </td>
    </tr>
    <tr>
        <td>
            <p for="card"
               id="card">3G</p>
        </td>
        <td>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </td>
        <td>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </td>
    </tr>
    <tr>
        <td>
            <p for="card"
               id="card">4G/LTE</p>
        </td>
        <td>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </td>
        <td>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </td>
    </tr>
    <tr>
        <td>
            <p for="card"
               id="card">5G</p>
        </td>
        <td>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </td>
        <td>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </td>
    </tr>
    <tr>
        <td>
            <p for="card"
               id="card">Radio</p>
        </td>
        <td>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </td>
        <td>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </td>
    </tr>
    <tr>
        <td>
            <p for="card"
               id="card">WiFi</p>
        </td>
        <td>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </td>
        <td>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </td>
    </tr>
    <tr>
        <td>
            <p for="card"
               id="card">NFC</p>
        </td>
        <td>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </td>
        <td>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </td>
    </tr>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useproductStore } from '@/stores/product.store'

export default defineComponent({
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