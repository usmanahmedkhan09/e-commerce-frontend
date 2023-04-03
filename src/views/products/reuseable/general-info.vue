<template>
    <div class="input__wrapper">
        <input v-model="product.name"
               type="text"
               class="input"
               placeholder="Enter product name"
               required>
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
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { useCategoryStore } from '@/stores/category'
import { useBrandStore } from '@/stores/brand.store'
import utilService from '@/services/util.service';

export default defineComponent({
    setup()
    {
        const { product, addProduct, updateProduct } = useproductStore()
        const color = ref('')
        const isEdit = ref(false)

        const categoryStore = useCategoryStore()
        const { getCategories } = categoryStore
        const categories = computed(() => categoryStore.get)

        const brandStore = useBrandStore()
        const { getBrands } = brandStore

        const brands = computed(() => brandStore.getBrandByCategory(product.categoryId as string))

        const uploadImages = async (event: any) =>
        {

            let res: any = await utilService.uploadFileOnServer(event.target.files)
            res.data["color"] = color
            product.productImages.push({ ...res.data, })
        }

        const removeMedia = async (index: any, image: any) =>
        {

            if (isEdit.value)
            {
                product.productImages.splice(index, 1)
                sendStateToServer()
            }
            await utilService.removeMedia(image.fileName, image.path)
        }

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

        onMounted(async () =>
        {
            await getCategories()
            await getBrands()
        })

        return {
            product,
            color,
            brands,
            categories,
            uploadImages,
            removeMedia,
            utilService
        }
    },
})
</script>