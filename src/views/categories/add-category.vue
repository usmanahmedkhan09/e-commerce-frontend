<template>
    <div class="categories">
        <div class="card categoryCard">
            <div class="card__header border-bottom">
                <h4>Add Category</h4>
            </div>
            <div class="categoryCard__body">
                <form class="category__form"
                      @submit.prevent="sendStateToServer()">
                    <input type="text"
                           v-model="category.name"
                           class="input"
                           placeholder="Enter a category name">
                    <button class="btn w-100"
                            type="submit">
                        Add Category
                    </button>
                </form>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Category from '@/models/category.model';
import { useCategoryStore } from '@/stores/category'
import { popModal } from "jenesius-vue-modal";

export default defineComponent({
    setup(props, context)
    {
        const category = ref(new Category())
        const { addCategory } = useCategoryStore()

        const sendStateToServer = () =>
        {
            addCategory(category.value)
            popModal()
        }
        return { category, sendStateToServer }
    },
})
</script>
