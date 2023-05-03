import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/services/axios.service'
import Product from '@/models/product.model'

export const useproductStore = defineStore('product', {
    state: () =>
    {
        return {
            product: ref<Product>(new Product()),
            products: [] as Product[]
        }
    },
    getters: {
        get: (state) => state.products as Product[],

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

        async updateProduct(product: Product)
        {
            let response: any = await axios.put(`product/update`, product)
            let index = this.products.findIndex((x: any) => x._id == response.data._id)
            if (index != -1)
            {
                this.products.splice(index, 1, { ...response.data })
            }
        },

        async getProducts()
        {
            let response: any = await axios.get('product')
            if (response.isSuccess)
            {
                this.products = [...response.data]
            }
        },

        async getProductById(productId: any)
        {
            let response: any = await axios.get(`product/${productId}`)
            if (response.isSuccess)
            {
                this.product = response.data
                return response.data
            }
        },

        async deleteProduct(productId: Product)
        {
            let response: any = await axios.delete(`product/deleteProduct`, { data: { productId: productId } })
            if (response.isSuccess)
            {
                let index = this.products.findIndex((x: any) => x._id == productId)
                if (index != -1)
                    this.products.splice(index, 1)

            }

        },


    }
})