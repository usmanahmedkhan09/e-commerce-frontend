<template>
    <div class="products">
        <div class="card">
            <div class="card__header border-bottom">
                <h4>Add Product</h4>
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
                             v-for="image in product.productImages"
                             :key="image.name">
                            <img class="image"
                                 :src="`${utilService.baseUrl}` + image.path"
                                 alt="">
                        </div>
                    </div>
                    <div class="button__wrapper">
                        <button class="btn"
                                type="submit">Add Product</button>
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

export default defineComponent({
    setup()
    {
        const color = ref('')
        const product = ref(new Product())
        const productStore = useproductStore()
        const { addProduct } = productStore

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
            addProduct(product.value)
        }

        onMounted(async () =>
        {
            await getCategories()
            await getBrands()
        })

        return { product, categories, brands, utilService, color, sendStateToServer, uploadImages }
    },
})
</script>
