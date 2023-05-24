<template>
    <div class="products">
        <div class="card">
            <div class="card__header border-bottom">
                <h4>{{ isEdit ? 'Update' : 'Add' }} Product</h4>
                <button class="btn">Back To Products</button>
            </div>
            <div class="card__body">
                <Form class="product__form"
                      @submit="onSubmit()"
                      :initial-values="undefined">
                    <generalInfo v-if="step == 1" />
                    <generalFeaturesVue v-if="step == 2" />
                    <displayFeatures v-if="step == 3" />
                    <!-- <connectivityFeatures /> -->
                    <!-- <memoryFeatures /> -->
                    <!-- <cameraFeatures /> -->
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
                </Form>
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
import utilService from '@/services/util.service';
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { Field, useForm, Form } from 'vee-validate'
import Product from '@/models/product.model';

export default defineComponent({
    components: { generalInfo, displayFeatures, memoryFeatures, cameraFeatures, connectivityFeatures, generalFeaturesVue, Form, Field },
    setup()
    {

        const { handleSubmit } = useForm({ initialValues: new Product() });
        const route = useRoute()
        const isEdit = ref(false)
        const step = ref(1)
        const productStore = useproductStore()
        const { product } = storeToRefs(productStore)
        let { addProduct, getProducts, getProductById, updateProduct } = productStore

        const onSubmit = handleSubmit(values =>
        {
            if (step.value < 6)
                step.value++
            else
            {
                if (step.value == 6)
                {
                    if (!isEdit.value)
                        addProduct(product.value)
                    else
                    {
                        product.value["productId"] = product.value._id
                        updateProduct(product.value)
                    }
                }
            }
        })


        const setInitialState = async () =>
        {
            if (route.params.id)
            {
                let response = await getProductById(route.params.id) as Product
                console.log(response)
                if (response)
                {
                    product.value = { ...response as Product }
                    product.value.categoryId = product.value.categoryId
                    product.value.brandId = product.value.brandId
                }
                isEdit.value = true
            } else
            {
                product.value = new Product()

            }
        }

        onMounted(() =>
        {
            setInitialState()
        })

        return { product, utilService, isEdit, step, onSubmit }
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