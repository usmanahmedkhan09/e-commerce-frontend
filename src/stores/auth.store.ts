import { defineStore } from 'pinia'
import User from '@/models/user.model'
import axios from '@/services/axios.service'
import storageService from '@/services/storage.service'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
    state: () =>
    {
        return {
            user: new User()
        }
    },
    actions: {

        async login(user: User)
        {
            let response: any = await axios.post('/auth/login', user)
            if (response.isSuccess)
            {
                let { _id, email, name, token } = response.data
                storageService.setProperty('token', token)
                storageService.setProperty('user', { _id: _id, email: email, name: name })
                router.push('/products/products-list')
            }
        },

        async register(user: User)
        {
            let response: any = await axios.post('/auth/signup', user)
            if (response.isSuccess)
            {
                router.push('/login')
            }
        }
    }
})