import { defineStore } from 'pinia'
import axios from '@/services/axios.service'
import type Product from '@/models/product.model'

export const useproductStore = defineStore('product', {
    state: () =>
    {
        return {
            products: [] as Product[]
        }
    },
    getters: {
        get: (state) => state.products as Product[]
    },
    actions: {
        async addProduct(product: Product)
        {
            let response: any = await axios.post('product/addProduct', product)
            if (response.isSuccess)
            {
                this.products.unshift({ ...response.data })
            }
        },

        // async updateBrand(brand: Brand)
        // {
        //     brand.categories = brand.categories.map((x: any) => x._id) as any
        //     let response: any = await axios.put(`brand/updateBrand/${brand._id}`, brand)
        //     let index = this.brands.findIndex((x: any) => x._id == response.data._id)
        //     if (index != -1)
        //     {
        //         this.brands.splice(index, 1, { ...response.data })
        //     }
        // },

        async getProducts()
        {
            let response: any = await axios.get('product')
            if (response.isSuccess)
            {
                this.products = [...response.data]
            }
        },

        // async deleteBrand(brandId: Brand)
        // {
        //     let response: any = await axios.delete('brand/deleteBrand', { data: { brandId: brandId } })
        //     if (response.isSuccess)
        //     {
        //         let index = this.brands.findIndex((x: any) => x._id == brandId)
        //         if (index != -1)
        //             this.brands.splice(index, 1)

        //     }

        // }
    }
})