import { defineStore } from 'pinia'
import User from '@/models/user.model'
import axios from '@/services/axios.service'

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
            let response = await axios.post('/auth/login', user)
            console.log(response)
        }
    }
})