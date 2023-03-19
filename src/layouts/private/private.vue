<template>
    <header class="header">
        <div class="header__icons">
            <inline-svg class="bar__icon"
                        :src="require('@/assets/svg/bar.svg')"
                        @click="showSidebar = true"></inline-svg>
            <inline-svg class="logo__icon"
                        :src="require('@/assets/svg/logo.svg')"></inline-svg>
        </div>
    </header>
    <main class="content">
        <section class="container">
            <backdropComponent :class="{ 'open': showSidebar }"
                               @close="showSidebar = false" />
            <sidebar :class="{ 'open': showSidebar }"></sidebar>
            <RouterView></RouterView>
        </section>
    </main>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import sidebar from './sidebar.vue';
import backdropComponent from '@/components/backdropComponent.vue';
export default defineComponent({
    components: { sidebar, backdropComponent },
    setup()
    {
        const showSidebar = ref(false)
        return {
            showSidebar
        }
    },
})
</script>
