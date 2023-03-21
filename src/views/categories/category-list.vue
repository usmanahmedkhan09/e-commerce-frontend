<template>
    <div class="categories">
        <div class="card">
            <div class="card__header">
                <h4>Manage Categories</h4>

            </div>
        </div>
        <div class="categories__content">
            <div class="card">
                <div class="card__header border-bottom">
                    <h4>All Categories</h4>
                    <button class="btn"
                            @click="open">Add Category</button>
                </div>
                <div class="card__body">
                    <table class="table">
                        <thead class="table__header">
                            <tr>
                                <th>S No</th>
                                <th>Name</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table__body">
                            <tr v-for="(category, index) in categories"
                                :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ category.name }}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { openModal } from "jenesius-vue-modal";
import addCategory from './add-category.vue';
import { useCategoryStore } from '@/stores/category'


export default defineComponent({
    setup()
    {
        const categoryStore = useCategoryStore()
        const { getCategories } = categoryStore
        const open = () => openModal(addCategory)

        const categories = computed(() => categoryStore.get)

        onMounted(async () =>
        {
            await getCategories()
        })

        return {
            categories,
            open
        }
    },
})
</script>
