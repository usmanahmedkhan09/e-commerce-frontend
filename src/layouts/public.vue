<template>
    <header class="header">
        <div class="header__icons">
            <inline-svg class="bar__icon"
                        :src="require('@/assets/svg/bar.svg')"></inline-svg>
            <inline-svg class="logo__icon"
                        :src="require('@/assets/svg/logo.svg')"></inline-svg>
        </div>
        <div class="header__buttons">
            <RouterLink to="/login"
                        class="btn btn__login">Log In</RouterLink>
            <RouterLink to="/register"
                        class="btn btn__register">Register</RouterLink>
            <!-- <button class="btn btn__login"></button>
            <button class="btn btn__register">Register</button> -->
        </div>
    </header>
    <main class="content">
        <router-view></router-view>
    </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router';

export default defineComponent({
    setup()
    {
        return {
            RouterLink
        }
    },
})
</script>
