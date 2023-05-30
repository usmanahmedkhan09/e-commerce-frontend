<template>
    <div class="input__wrapper">
        <div>
            <label for="name">Product Name:</label>
            <Field v-model="product.name"
                   type="text"
                   name="name"
                   class="input"
                   id="name"
                   rules="required|minLength:5"
                   placeholder="Enter product name" />
            <ErrorMessage class="error__message"
                          name="name" />
        </div>
        <div>
            <label for="price">Product Price:</label>
            <Field v-model="product.price"
                   type="number"
                   name="price"
                   id="price"
                   rules="required"
                   placeholder="Enter product price"
                   class="input" />
            <ErrorMessage class="error__message"
                          name="price" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <label for="quantity">Product Quantity:</label>
            <Field name="quantity"
                   type="number"
                   id="quantity"
                   placeholder="Enter product quantity"
                   class="input"
                   rules="required"
                   v-model="product.quantity" />
            <ErrorMessage class="error__message"
                          name="quantity" />
        </div>
        <div>
            <label for="model">Product Model:</label>
            <Field type="text"
                   placeholder="Enter product model"
                   class="input"
                   id="model"
                   v-model="product.model"
                   name="model" />
            <ErrorMessage class="error__message"
                          name="model" />
        </div>
    </div>
    <div class="input__wrapper">
        <div>
            <label for="category">Category:</label>
            <Field class="input select"
                   as="select"
                   id="category"
                   name="category"
                   v-slot="{ value }"
                   v-model="product.categoryId"
                   :class="{ 'active': product.categoryId == undefined }">
                <option value=""
                        selected
                        disabled>Select a category</option>
                <option :value="category._id"
                        v-for="category in categories"
                        :key="category._id"
                        :selected="value">{{ category.name }}</option>
            </Field>
        </div>
        <div>
            <label for="brand">Brand:</label>
            <select class="input select"
                    name="brandId"
                    id="brand"
                    v-model="product.brandId"
                    :class="{ 'active': product.brandId == undefined }">
                <option :value="undefined"
                        selected
                        disabled>Select a brand</option>
                <option :value="brand._id"
                        v-for="brand in brands"
                        :key="brand._id"> {{ brand.name }}</option>
            </select>
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <label for="discount">Discount:</label>
            <Field v-model="product.discount"
                   type="number"
                   name="discount"
                   id="discount"
                   placeholder="Enter product discount in percentage"
                   class="input" />
        </div>
    </div>
    <div class="input__wrapper">
        <div>
            <label for="variant">Variant:</label>
            <input type="text"
                   placeholder="Choose product variant"
                   class="input"
                   id="variant"
                   v-model="color">
        </div>
        <div>
            <label for="images">Images:</label>
            <Field @change="uploadImages($event)"
                   type="file"
                   class="input"
                   id="images"
                   placeholder="Choose product images"
                   name="image" />
        </div>

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
import { storeToRefs } from 'pinia';
import { Field, ErrorMessage } from 'vee-validate'
import customInput from '@/components/custom-input.vue';

export default defineComponent({
    components: { Field, ErrorMessage, customInput },
    setup()
    {
        const productStore = useproductStore()
        const { product } = storeToRefs(productStore)
        const { addProduct, updateProduct } = productStore
        const color = ref('')
        const isEdit = ref(false)

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
            product.value.productImages.push(res.data)
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

        onMounted(async () =>
        {
            await getCategories()
            await getBrands()
        })

        const handleSelectedCategory = (e: any) =>
        {
            console.log(e)
        }
        return {
            product,
            color,
            brands,
            categories,
            uploadImages,
            removeMedia,
            utilService,
            handleSelectedCategory
        }
    },
})
</script>
