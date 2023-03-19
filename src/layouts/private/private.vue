<template>
    <header class="header">
        <div class="header__icons">
            <inline-svg class="bar__icon"
                        :src="require('@/assets/svg/bar.svg')"></inline-svg>
            <inline-svg class="logo__icon"
                        :src="require('@/assets/svg/logo.svg')"></inline-svg>
        </div>
    </header>
    <main class="content">
        <section class="container">
            <sidebar></sidebar>
            <RouterView></RouterView>
        </section>
    </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import sidebar from './sidebar.vue';
export default defineComponent({
    components: { sidebar },
    setup()
    {
        return {

        }
    },
})
</script>
