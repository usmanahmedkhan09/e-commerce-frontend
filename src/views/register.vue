<template>
    <div class="login__container">
        <div class="card">
            <inline-svg class="svg__icon"
                        :src="require('@/assets/svg/login-header-img.svg')"></inline-svg>
            <div class="card__body">
                <h4 class="title">Sign Up</h4>
                <p class="description">Enter your Email for a faster checkout, to track the status of your order and
                    more.</p>
                <form @submit="onSubmit">
                    <Field v-model="user.name"
                           name="name"
                           rules="required|alpha_num|username:3"
                           class="input"
                           placeholder="Enter your name"
                           type="text" />
                    <ErrorMessage class="error__message"
                                  name="name" />
                    <Field v-model="user.email"
                           name="email"
                           rules="required|email"
                           class="input"
                           placeholder="Enter your email"
                           type="email" />
                    <ErrorMessage class="error__message"
                                  name="email" />
                    <Field v-model="user.password"
                           name="password"
                           rules="required|minLength:8"
                           class="input"
                           placeholder="Enter your password"
                           type="password" />
                    <ErrorMessage class="error__message"
                                  name="password" />
                    <!-- <Field v-model="user.password"
                           name="confirmpassword"   
                           rules="required|minLength:8"
                           class="input"
                           placeholder="Enter Confirm password"
                           type="password" /> -->
                    <button class="btn btn__primary"
                            type="submit"
                            :disabled="isSubmitting">Create Account</button>
                </form>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Field, useForm, ErrorMessage } from 'vee-validate'
import { useAuthStore } from '@/stores/auth.store'
import User from '@/models/user.model'

export default defineComponent({
    components: { Field, ErrorMessage },
    setup()
    {
        const { handleSubmit, isSubmitting } = useForm();
        const { login } = useAuthStore()
        const user = ref(new User())

        const onSubmit = handleSubmit(values =>
        {
            login(values)
        })


        return {
            onSubmit,
            isSubmitting,
            user,
        }
    },
})
</script>
