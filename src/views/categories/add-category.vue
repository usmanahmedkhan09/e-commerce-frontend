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
                    <input @change="handleImage($event)"
                           type="file"
                           class="input">
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
import { defineComponent, onMounted, ref } from 'vue'
import Category from '@/models/category.model';
import { useCategoryStore } from '@/stores/category'
import { popModal } from "jenesius-vue-modal";
import utilService from '@/services/util.service';

export default defineComponent({
    props: {
        isCreate: {
            type: Boolean,
            default: true,
        },
        category: {
            type: Category,
            default: null
        }

    },
    setup(props, context)
    {
        const category = ref<Category>(new Category())
        const { addCategory } = useCategoryStore()

        const sendStateToServer = () =>
        {
            addCategory(category.value)
            popModal()
        }

        const setInitialState = () =>
        {
            if (props.category)
                category.value = props.category
        }

        const handleImage = async (event: any) =>
        {
            let res = await utilService.uploadFileOnServer(event.target.file)
            console.log(res)
        }

        onMounted(() =>
        {
            setInitialState()
        })

        return { category, sendStateToServer, handleImage }
    },
})
</script>
