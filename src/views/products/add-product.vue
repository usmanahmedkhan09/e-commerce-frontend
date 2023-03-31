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
                    <div class="input__wrapper">
                        <input v-model="product.name"
                               type="text"
                               class="input"
                               placeholder="Enter product name">
                        <input v-model="product.price"
                               type="number"
                               placeholder="Enter product price"
                               class="input">
                    </div>
                    <div class="input__wrapper">
                        <input type="number"
                               placeholder="Enter product quantity"
                               class="input"
                               v-model="product.quantity">
                        <input type="text"
                               placeholder="Enter product model"
                               class="input"
                               v-model="product.model">
                    </div>
                    <div class="input__wrapper">
                        <select class="input"
                                name="category"
                                id="categoryId"
                                v-model="product.categoryId">
                            <option :value="undefined"
                                    selected
                                    disabled>Select a category</option>
                            <option :value="category._id"
                                    v-for="category in categories"
                                    :key="category._id">{{ category.name }}</option>
                        </select>
                        <select class="input"
                                name="brandId"
                                id="brandId"
                                v-model="product.brandId">
                            <option :value="undefined"
                                    selected
                                    disabled>Select a brand</option>
                            <option :value="brand._id"
                                    v-for="brand in brands"
                                    :key="brand._id"> {{ brand.name }}</option>
                        </select>
                    </div>
                    <select class="input"
                            name="series"
                            id="series"
                            v-model="product.seriesId">
                        <option :value="undefined"
                                selected
                                disabled>Select a series</option>
                    </select>
                    <textarea type="number"
                              placeholder="Enter product description"
                              class="input textarea"
                              v-model="product.description" />
                    <div class="input__wrapper">
                        <input @change.exact.stop="uploadImages($event)"
                               type="file"
                               class="input"
                               placeholder="Choose product images">
                        <input type="text"
                               placeholder="Choose product color"
                               class="input"
                               v-model="color">
                    </div>

                    <div class="imagesContainer">
                        <div class="images"
                             v-for="(image, index) in product.productImages"
                             :key="index">
                            <img class="image"
                                 :src="`${utilService.baseUrl}` + image.path"
                                 alt="">
                            <div class="icon__wrapper"
                                 @click="removeMedia(index, image)">
                                <font-awesome-icon icon="fa-solid fa-minus" />
                            </div>
                        </div>
                    </div>
                    <div class="button__wrapper">
                        <button class="btn"
                                type="submit">{{ isEdit ? 'Update' : 'Add' }} Product</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import Product from '@/models/product.model';
import { useproductStore } from '@/stores/product.store'
import { useCategoryStore } from '@/stores/category'
import { useBrandStore } from '@/stores/brand.store'
import utilService from '@/services/util.service';
import { useRoute } from 'vue-router'

export default defineComponent({
    setup()
    {
        const route = useRoute()
        const color = ref('')
        const isEdit = ref(false)
        const product = ref(new Product())
        const productStore = useproductStore()
        const { addProduct, getProducts, getProductById, updateProduct } = productStore

        const categoryStore = useCategoryStore()
        const { getCategories } = categoryStore
        const categories = computed(() => categoryStore.get)

        const brandStore = useBrandStore()
        const { getBrands } = brandStore

        const brands = computed(() => brandStore.getBrandByCategory(product.value.categoryId as string))

        const uploadImages = async (event: any) =>
        {

            let res: any = await utilService.uploadFileOnServer(event.target.files)
            res.data["color"] = color
            product.value.productImages.push({ ...res.data, })
        }

        const sendStateToServer = () =>
        {
            if (!isEdit.value)
            {
                addProduct(product.value)
            }
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

        const removeMedia = async (index: any, image: any) =>
        {

            if (isEdit.value)
            {
                product.value.productImages.splice(index, 1)
                sendStateToServer()
            }
            await utilService.removeMedia(image.fileName, image.path)
        }
        onMounted(async () =>
        {
            await getProducts()
            await getCategories()
            await getBrands()
            setInitialState()
        })

        return { product, categories, brands, utilService, color, isEdit, sendStateToServer, uploadImages, removeMedia }
    },
})
</script>
