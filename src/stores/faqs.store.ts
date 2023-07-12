import { defineStore } from 'pinia'
import axios from '@/services/axios.service'
import type Faqs from '@/models/faqs.model'

export const useFaqsStore = defineStore('faqs', {
    state: () => ({
        faqs: [] as Faqs[]
    }),

    getters: {
        getAllFaqs: (state) => state.faqs
    },

    actions: {
        async addFaqs(faq: Faqs)
        {
            let response: any = await axios.post('faq/addFaq', faq)
            if (response.isSuccess)
            {
                this.faqs.push(response.data)
            }
        },

        async getFaqs(productId: string)
        {
            let response: any = await axios.get(`faq/get/${productId}`)
            if (response.isSuccess)
            {
                this.faqs = [...response.data]
            }
        },
    }
}) 