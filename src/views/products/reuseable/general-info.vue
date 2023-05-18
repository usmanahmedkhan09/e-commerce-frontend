<template>
    <div>
        <h3>General Info:</h3>
    </div>
    <div class="input__wrapper">
        <div>
            <Field v-model="product.name"
                   type="text"
                   name="name"
                   class="input"
                   rules="required|minLength:5"
                   placeholder="Enter product name" />
            <ErrorMessage class="error__message"
                          name="name" />
        </div>
        <div>
            <Field v-model="product.price"
                   type="number"
                   name="price"
                   rules="required"
                   placeholder="Enter product price"
                   class="input" />
            <ErrorMessage class="error__message"
                          name="price" />
        </div>

    </div>
    <div class="input__wrapper">
        <div>
            <Field name="quantity"
                   type="number"
                   placeholder="Enter product quantity"
                   class="input"
                   rules="required"
                   v-model="product.quantity" />
            <ErrorMessage class="error__message"
                          name="quantity" />
        </div>
        <div>
            <Field type="text"
                   placeholder="Enter product model"
                   class="input"
                   v-model="product.model"
                   name="model" />
            <ErrorMessage class="error__message"
                          name="model" />
        </div>
    </div>
    <div class="input__wrapper">
        <Field class="input"
               as="select"
               name="category"
               id="categoryId"
               v-slot="{ value }"
               v-model="product.categoryId">
            <option value=""
                    selected
                    disabled>Select a category</option>
            <option :value="category._id"
                    v-for="category in categories"
                    :key="category._id"
                    :selected="value">{{ category.name }}</option>
        </Field>
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
        <Field @change="uploadImages($event)"
               type="file"
               class="input"
               placeholder="Choose product images"
               name="image" />
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
