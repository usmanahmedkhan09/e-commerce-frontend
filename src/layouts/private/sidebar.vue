<template>
    <section class="sidebar">
        <ul class="nav">
            <li class="nav__link"
                v-for="(route, index) in routes"
                :key="index">
                {{ route.name }}
            </li>
        </ul>
    </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    components: {},
    setup()
    {
        const routes = ref(
            [
                { name: 'Products' },
                { name: 'Categories' },
                { name: 'Brand' },
                { name: 'Series' },

            ]
        )
        return { routes }
    },
})
</script>
