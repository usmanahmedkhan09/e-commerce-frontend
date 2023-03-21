<template>
    <div class="container">
        <sidebar :class="{ 'open': showSidebar }"
                 @close="showSidebar = false"></sidebar>
        <main class="container__content">
            <div class="topbar"></div>
            <div class="page__content">
                <RouterView></RouterView>
            </div>
        </main>
    </div>
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
