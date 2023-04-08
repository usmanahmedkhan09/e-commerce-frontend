<template>
    <div class="products">
        <div class="card">
            <div class="card__header border-bottom">
                <h4>{{ isEdit ? 'Update' : 'Add' }} Product</h4>
                <button class="btn">Back To Products</button>
            </div>
            <div class="card__body">
                <form class="product__form"
                      @submit="sendStateToServer">
                    <generalInfo v-if="step == 1" />
                    <generalFeaturesVue v-if="step == 2" />
                    <displayFeatures v-if="step == 3" />
                    <memoryFeatures v-if="step == 4" />
                    <cameraFeatures v-if="step == 5" />
                    <connectivityFeatures v-if="step == 6" />
                    <div class="button__wrapper">
                        <button class="btn"
                                type="button"
                                v-if="step > 1"
                                @click.stop="step = step - 1">Back</button>
                        <button class="btn"
                                type="submit"
                                v-if="step < 6">Next</button>
                        <button class="btn"
                                type="submit"
                                v-if="step == 6">{{ isEdit ? 'Update' : 'Add' }} Product</button>
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
import generalFeaturesVue from './reuseable/general-features.vue';
import type Product from '@/models/product.model';

import utilService from '@/services/util.service';
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { Field, useForm, ErrorMessage } from 'vee-validate'

export default defineComponent({
    components: { generalInfo, displayFeatures, memoryFeatures, cameraFeatures, connectivityFeatures, generalFeaturesVue },
    setup()
    {
        const { handleSubmit, isSubmitting } = useForm();
        const route = useRoute()
        const isEdit = ref(false)
        const step = ref(1)
        const productStore = useproductStore()
        const { product } = storeToRefs(productStore)
        let { addProduct, getProducts, getProductById, updateProduct } = productStore


        const sendStateToServer = handleSubmit(values =>
        {
            console.log(values)
            // console.log(product.value)
            // return
            // if (!isEdit.value)
            //     addProduct(product.value)
            // else
            // {
            //     product.value["productId"] = product.value._id
            //     updateProduct(product.value)
            // }

        })

        const setInitialState = async () =>
        {
            if (route.params.id)
            {
                let response = await getProductById(route.params.id) as Product
                if (response)
                {
                    product.value = { ...response as Product }
                    product.value.categoryId = product.value.category
                    product.value.brandId = product.value.brand
                }
                // productStore.$patch({ product: response })

            }
        }

        onMounted(() => setInitialState())

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