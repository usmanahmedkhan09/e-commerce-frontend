<template>
    <div class="categories">
        <div class="card">
            <div class="card__header">
                <h4>Manage Brands</h4>

            </div>
        </div>
        <div class="categories__content">
            <div class="card">
                <div class="card__header border-bottom">
                    <h4>All Brands</h4>
                    <button class="btn"
                            @click="open">Add Brand</button>
                </div>
                <div class="card__body"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { openModal } from "jenesius-vue-modal";
import addBrand from './add-brand.vue';

export default defineComponent({
    setup()
    {
        const open = async () =>
        {
            await openModal(addBrand)
        }
        return {
            open
        }
    },
})
</script>
