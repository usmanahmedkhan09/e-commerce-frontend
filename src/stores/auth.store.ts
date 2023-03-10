import { defineStore } from 'pinia'
import User from '@/models/user.model'

export const useAuthStore = defineStore('auth', {
    state: () =>
    {
        return {
            user: new User()
        }
    },
    actions: {}
})