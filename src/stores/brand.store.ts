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
        get: (state) => state.brands as Brand[],

        getBrandByCategory(state) 
        {
            return (id: string) => state.brands.filter((brand: any) =>
            {
                if (brand.categories.some((x: any) => x._id == id))
                {
                    return brand
                }
            })
        }
    },
    actions: {
        async addBrand(brand: Brand)
        {
            let response: any = await axios.post('brand/addBrand', brand)
            if (response.isSuccess)
            {
                this.brands.unshift({ ...response.data })
            }
        },

        async updateBrand(brand: Brand)
        {
            brand.categories = brand.categories.map((x: any) => x._id) as any
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

        async deleteBrand(brandId: Brand)
        {
            let response: any = await axios.delete('brand/deleteBrand', { data: { brandId: brandId } })
            if (response.isSuccess)
            {
                let index = this.brands.findIndex((x: any) => x._id == brandId)
                if (index != -1)
                    this.brands.splice(index, 1)

            }

        },

        async getBrandsByCategoryName(categoryName: string)
        {
            let response: any = await axios.get(`brand/getBrandsByCategory/${categoryName}`)
            if (response.isSuccess)
            {
                this.brands = [...response.data]
            }
        }
    }
})