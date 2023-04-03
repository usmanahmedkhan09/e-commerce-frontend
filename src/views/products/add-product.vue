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
                    <!-- <generalInfo /> -->
                    <!-- <displayFeatures /> -->
                    <!-- <memoryFeatures /> -->
                    <!-- <cameraFeatures /> -->
                    <connectivityFeatures />
                    <div class="button__wrapper">
                        <button class="btn"
                                type="submit">Next</button>
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
        // const color = ref('')
        const isEdit = ref(false)
        // const product = ref(new Product())
        const productStore = useproductStore()
        const { addProduct, getProducts, getProductById, updateProduct, product } = productStore

        // const categoryStore = useCategoryStore()
        // const { getCategories } = categoryStore
        // const categories = computed(() => categoryStore.get)

        // const brandStore = useBrandStore()
        // const { getBrands } = brandStore

        // const brands = computed(() => brandStore.getBrandByCategory(product.value.categoryId as string))

        // const uploadImages = async (event: any) =>
        // {

        //     let res: any = await utilService.uploadFileOnServer(event.target.files)
        //     res.data["color"] = color
        //     product.value.productImages.push({ ...res.data, })
        // }

        const sendStateToServer = () =>
        {
            if (!isEdit.value)
                addProduct(product.value)
            else
            {
                product.value["productId"] = product.value._id
                updateProduct(product.value)
            }

        }

        const setInitialState = async () =>
        {
            if (route.params.id)
            {
                isEdit.value = true
                let res: any = await getProductById(route.params.id) as Product
                product.value = res
                product.value["categoryId"] = res.category
                product.value.brandId = res.brand
            }
        }

        onMounted(async () =>
        {
            setInitialState()
        })

        return { product, utilService, isEdit, sendStateToServer }
    },
})
</script>
