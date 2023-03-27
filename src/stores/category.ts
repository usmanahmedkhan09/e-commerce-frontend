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
        get: (state) => state.categories as Category[]
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

        async updateCategory(category: Category)
        {
            let response: any = await axios.put(`category/updateCategory/${category._id}`, category)
            let index = this.categories.findIndex((x: any) => x._id == response.data._id)
            if (index != -1)
            {
                this.categories.splice(index, 1, { ...response.data })
            }
        },

        async getCategories()
        {
            let response: any = await axios.get('category')
            if (response.isSuccess)
            {
                this.categories = [...response.data.categories]
            }
        },

        async deleteCategory(categoryId: Category)
        {
            let response: any = await axios.delete('category/deleteCategory', { data: { categoryId: categoryId } })
            let index = this.categories.findIndex((x: any) => x._id == response.data._id)
            if (index != -1)
            {
                this.categories.splice(index, 1)
            }
        }
    }
})