import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/services/axios.service'
import { Product, ProductFilters } from '@/models/product.model'
import utilService from '@/services/util.service'
import Brand from '@/models/brand.model'

export const useproductStore = defineStore('product', {
    state: () =>
    {
        return {
            product: ref<Product>(new Product()),
            products: [] as Product[],
            filters: new ProductFilters(),
            totalProducts: 0
        }
    },
    getters: {
        get: (state) => state.products as Product[],

        getTotalProducts: (state) => state.totalProducts

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
            let response: any = await axios.get(`product/productById/${productId}`)
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

        async getProductByCategoryName(Name: string)
        {
            let query = utilService.makequerytString(this.filters)
            let response: any = await axios.get(`product/getproductsByCategoryName/${Name}${query}`)
            if (response.isSuccess)
            {
                this.products = [...response.data.products]
                this.totalProducts = response.data.totalCount
                return response.data.products
            } else
            {
                this.products = []
                this.totalProducts = 0
            }
        },

        async getBestSellingProducts()
        {
            let response: any = await axios.get(`product/getBestSellingProducts`)
            if (response.isSuccess)
            {
                let products = response.data.map((x: any) => x.product)
                return products
            }
        },

        async getProductByName(productName: string)
        {
            let response: any = await axios.get(`product/getProductByName/${productName}`)
            if (response.isSuccess)
            {
                return response.data
            }
        }

    }
})