import { defineStore } from 'pinia'
import axios from '@/services/axios.service'
import type Category from '@/models/category.model'

export const useCategoryStore = defineStore('categoryStore', {
    state: () =>
    {
        return {
            categories: [] as Category[]
        }
    },
    getters: {
        get: (state) => state.categories
    },
    actions: {
        async addCategory(category: Category)
        {
            let response: any = await axios.post('category/addCategory', category)
            if (response.isSuccess)
            {
                this.categories.unshift({ ...response.data })
            }
        },

        async getCategories()
        {
            let response: any = await axios.get('category')
            if (response.isSuccess)
            {
                this.categories = [...response.data.categories]
            }
        }
    }
})