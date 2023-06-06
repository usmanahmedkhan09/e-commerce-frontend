<template>
    <div class="sidebar__categories__title">Categories</div>
    <div class="all__categories">
        <div class="all__categories__item"
             v-for="category in categories"
             :key="category._id"
             :class="{ 'active': selectedCategory }"
             @click="toggleCategories(category)">
            <sidebarAccordian :category="category" />
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useCategoryStore } from '@/stores/category'
import sidebarAccordian from '../sidebar-accordian.vue'
import type Category from '@/models/category.model'

export default defineComponent({
    components: { sidebarAccordian },
    setup()
    {
        const categoriesStore = useCategoryStore()
        const { getCategories } = categoriesStore
        const selectedCategory = ref()

        const categories = computed<Category[]>(() => categoriesStore.get)
        onMounted(async () => { await getCategories() })


        const toggleCategories = (category: any) =>
        {

        }
        return { categories, selectedCategory, toggleCategories }
    },
})
</script>

<style lang="scss" scoped>
.sidebar__categories {


    &__title {
        color: #748a98;
        font-weight: 500;
        font-size: 1.2rem;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    .all__categories {
        .all__categories__item {
            .active {
                background: rgba(116, 138, 152, .05);
                border-radius: 10px;
            }

        }
    }
}
</style>