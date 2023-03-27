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
                                <th>Image</th>
                                <th>Name</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table__body">
                            <tr v-for="(category, index) in categories"
                                :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>
                                    <img class="image"
                                         :src="`${utilService.baseUrl}` + category.image"
                                         alt="">
                                </td>
                                <td>{{ category.name }}</td>
                                <td>{{ moment(category.createdAt).format("MMM Do YY") }}</td>
                                <td>
                                    <button class="btn rounded__icons"
                                            @click="handleEditCategory(category)">
                                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                    </button>
                                    <button class="btn rounded__icons danger"
                                            @click="deleteCategory(category._id)">
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </td>
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
import moment from 'moment'
import utilService from '@/services/util.service';
import type Category from '@/models/category.model';


export default defineComponent({
    setup()
    {
        const categoryStore = useCategoryStore()
        const { getCategories, deleteCategory } = categoryStore
        const open = () => openModal(addCategory)

        const categories = computed<Category[]>(() => categoryStore.get)

        const handleEditCategory = (category: any) =>
        {
            openModal(addCategory, { isCreate: false, category: category })
        }

        onMounted(async () =>
        {
            await getCategories()
        })

        return {
            categories,
            moment,
            utilService,
            open,
            handleEditCategory,
            deleteCategory
        }
    },
})
</script>
