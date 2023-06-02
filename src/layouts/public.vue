<template>
    <header class="header">
        <div class="header__icons">
            <img class="bar__icon"
                 height="50"
                 width="50"
                 :src="getImageUrl('bar.svg', 'svg')"
                 alt=""
                 @click="showSidebar = !showSidebar">
            <img height=""
                 width="130"
                 :src="getImageUrl('logo.svg', 'svg')"
                 alt="">
        </div>
        <div class="header__buttons">
            <RouterLink to="/login"
                        class="btn btn__login">Log In</RouterLink>
            <RouterLink to="/register"
                        class="btn btn__register">Register</RouterLink>
        </div>
    </header>
    <main class="content">
        <router-view></router-view>
    </main>
    <sidebar :showSidebar="showSidebar"
             @toggleSidebar="showSidebar = !showSidebar" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router';
import utilService from '@/services/util.service'
import sidebar from './public/sidebar.vue';
export default defineComponent({
    components: { sidebar },
    setup()
    {
        const showSidebar = ref(false)
        return {
            RouterLink,
            getImageUrl: utilService.getImageUrl,
            showSidebar
        }
    },
})
</script>
