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
    <div class="input__wrapper align__start">
        <p for="card"
           id="card"
           class="item">Bluetooth:</p>
        <div class="item">
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </div>
        <div class="item">
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </div>

    </div>
    <div class="input__wrapper align__start">
        <p for="card"
           id="card">3G</p>
        <div>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </div>
        <div>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </div>

    </div>
    <div class="input__wrapper align__start">
        <p for="card"
           id="card">4G/LTE</p>
        <div>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </div>
        <div>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </div>


    </div>
    <div class="input__wrapper align__start">
        <p for="card"
           id="card">5G</p>
        <div>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </div>
        <div>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </div>

    </div>
    <div class="input__wrapper align__start">
        <p for="card"
           id="card">Radio</p>
        <div>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </div>
        <div>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </div>

    </div>
    <div class="input__wrapper align__start">
        <p for="card"
           id="card">WiFi</p>
        <div>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </div>
        <div>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </div>

    </div>
    <div class="input__wrapper align__start">
        <p for="card"
           id="card">NFC</p>
        <div>
            <input type="radio"
                   id="html"
                   name="fav_language"
                   :value="true">
            <label for="html">Yes</label>
        </div>
        <div>
            <input type="radio"
                   id="memory"
                   name="fav_language"
                   :value="false">
            <label for="memory">No</label>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useproductStore } from '@/stores/product.store'

export default defineComponent({
    setup()
    {
        const { product } = useproductStore()

        return { product }
    },
})
</script>
