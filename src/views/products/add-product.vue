<template>
    <div class="products">
        <div class="card">
            <div class="card__header border-bottom">
                <h4>{{ isEdit ? 'Update' : 'Add' }} Product</h4>
                <button class="btn">Back To Products</button>
            </div>
            <div class="card__body">
                <form class="product__form"
                      @submit.prevent="sendStateToServer">
                    <generalInfo v-if="step == 1" />
                    <displayFeatures v-if="step == 2" />
                    <memoryFeatures v-if="step == 3" />
                    <cameraFeatures v-if="step == 4" />
                    <connectivityFeatures v-if="step == 5" />
                    <div class="button__wrapper">
                        <button class="btn"
                                type="submit"
                                v-if="step > 1"
                                @click.stop="step = step - 1">Back</button>
                        <button class="btn"
                                type="submit"
                                @click.stop="step = step + 1">Next</button>
                        <!-- <button class="btn"
                                type="submit">{{ isEdit ? 'Update' : 'Add' }} Product</button> -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useproductStore } from '@/stores/product.store'
import generalInfo from './reuseable/general-info.vue';
import displayFeatures from './reuseable/display-features.vue';
import memoryFeatures from './reuseable/memory-features.vue';
import cameraFeatures from './reuseable/camera-features.vue';
import connectivityFeatures from './reuseable/connectivity-features.vue';

import utilService from '@/services/util.service';
import { useRoute } from 'vue-router'

export default defineComponent({
    components: { generalInfo, displayFeatures, memoryFeatures, cameraFeatures, connectivityFeatures },
    setup()
    {
        const route = useRoute()
        const isEdit = ref(false)
        const step = ref(1)
        const productStore = useproductStore()
        const { addProduct, getProducts, getProductById, updateProduct, product } = productStore


        const sendStateToServer = () =>
        {
            if (!isEdit.value)
                addProduct(product)
            else
            {
                product["productId"] = product._id
                updateProduct(product)
            }

        }



        return { product, utilService, isEdit, sendStateToServer, step }
    },
})
</script>
<style lang="scss" scoped>
.button__wrapper {
    display: flex;
    gap: 16px;
    justify-content: flex-end;

    .btn {
        margin-left: unset !important;
    }
}
</style>