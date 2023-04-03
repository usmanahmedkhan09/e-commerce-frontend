<template>
    <div class="categories">
        <div class="card categoryCard">
            <div class="card__header border-bottom">
                <h4>{{ isCreate ? 'Add' : 'Update' }} Brand</h4>
            </div>
            <div class="categoryCard__body">
                <form class="category__form"
                      @submit.prevent.stop="sendStateToServer">
                    <input v-model="brand.name"
                           type="text"
                           class="input"
                           placeholder="Enter a brand name">
                    <multiselect v-model="brand.categories"
                                 :options="categories"
                                 :multiple="true"
                                 track-by="name"
                                 placeholder="Select a category"
                                 label="name"
                                 openDirection="bottom" />
                    <button type="submit"
                            class="btn w-100">
                        {{ isCreate ? 'Add' : 'Update' }} Brand
                    </button>
                </form>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useBrandStore } from '@/stores/brand.store'
import { useCategoryStore } from '@/stores/category'
import type Category from '@/models/category.model'
import Brand from '@/models/brand.model'
import { popModal } from 'jenesius-vue-modal'


export default defineComponent({
    props: {
        brand: {
            type: Object,
            default: new Brand()
        },
        isCreate: {
            type: Boolean,
            default: true
        }
    },
    setup(props)
    {
        const brand = ref(new Brand())
        const brandStore = useBrandStore()
        const { get, getBrands, updateBrand, addBrand } = brandStore

        const categoryStore = useCategoryStore()
        const { getCategories } = categoryStore

        const categories = computed<Category[]>(() => categoryStore.get)

        const setInitialState = () =>
        {
            brand.value.name = props.brand.name
            brand.value.categories = props.brand.categories
            brand.value._id = props.brand._id
        }

        const sendStateToServer = () =>
        {
            if (props.isCreate)
            {
                addBrand(brand.value)
            } else
            {
                updateBrand(brand.value)
            }
            popModal()
        }

        onMounted(async () =>
        {
            await getCategories()
            if (!props.isCreate)
                setInitialState()
        })

        return {
            categories,
            brand,
            sendStateToServer
        }
    },
})
</script>
