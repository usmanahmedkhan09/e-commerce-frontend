import { defineStore } from 'pinia'
import axios from '@/services/axios.service'
import type Brand from '@/models/brand.model'

export const useBrandStore = defineStore('brand', {
    state: () =>
    {
        return {
            brands: [] as Brand[]
        }
    },
    getters: {
        get: (state) => state.brands as Brand[]
    },
    actions: {
        // async addCategory(category: Category)
        // {
        //     let response: any = await axios.post('category/addCategory', category)
        //     if (response.isSuccess)
        //     {
        //         this.categories.unshift({ ...response.data })
        //     }
        // },

        async updateBrand(brand: Brand)
        {
            let response: any = await axios.put(`brand/updateBrand/${brand._id}`, brand)
            let index = this.brands.findIndex((x: any) => x._id == response.data._id)
            if (index != -1)
            {
                this.brands.splice(index, 1, { ...response.data })
            }
        },

        async getBrands()
        {
            let response: any = await axios.get('brand')
            if (response.isSuccess)
            {
                this.brands = [...response.data]
            }
        },

        // async deleteCategory(categoryId: Category)
        // {
        //     let response: any = await axios.delete('category/deleteCategory', { data: { categoryId: categoryId } })
        //     let index = this.categories.findIndex((x: any) => x._id == response.data._id)
        //     if (index != -1)
        //     {
        //         this.categories.splice(index, 1)
        //     }
        // }
    }
})