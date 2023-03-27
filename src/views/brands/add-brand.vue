<template>
    <div class="categories">
        <div class="card categoryCard">
            <div class="card__header border-bottom">
                <h4>Add Brand</h4>
            </div>
            <div class="categoryCard__body">
                <form class="category__form">
                    <input type="text"
                           class="input"
                           placeholder="Enter a brand name">
                    <multiselect v-model="brand.categories"
                                 :options="categories"
                                 :multiple="true"
                                 track-by="name"
                                 placeholder="Select a category"
                                 label="name"
                                 value="_id"></multiselect>
                    <button class="btn w-100">
                        Add Brand
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


export default defineComponent({
    setup()
    {
        const brand = ref(new Brand())
        const brandStore = useBrandStore()
        const { get, getBrands } = brandStore

        const categoryStore = useCategoryStore()
        const { getCategories } = categoryStore

        const categories = computed<Category[]>(() => categoryStore.get)
        onMounted(async () =>
        {
            await getCategories()
        })

        return {
            categories,
            brand
        }
    },
})
</script>
