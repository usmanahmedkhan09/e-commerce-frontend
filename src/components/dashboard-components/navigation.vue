<template>
    <section class="dashboard__navigation">
        <ul class="nav__links">
            <li class="nav__links--item"
                v-for="link in links"
                :key="link.name">
                <img height="50"
                     width="50"
                     :src="getImageUrl(link.icon, 'svg')"
                     alt="">
                <p>{{ link.name }}</p>
            </li>
        </ul>
    </section>
</template>
<script lang="ts">
import utilService from '@/services/util.service'
import { defineComponent, ref } from 'vue'
import iconComponent from '../icon-component.vue'

export default defineComponent({
    components: { iconComponent },
    setup()
    {
        const links = ref([
            { name: 'mobiles', icon: 'mobile.svg' },
            { name: 'smart watches', icon: 'smart-watch.svg' },
            { name: 'wireless earbuds', icon: 'wireless-earbud.svg' },
            { name: 'bluetooth speakers', icon: 'bluetooth-speaker.svg' },
            { name: 'power banks', icon: 'power-bank.svg' },
            { name: 'laptops', icon: 'laptop.svg' },
            { name: 'tablets', icon: 'tablet.svg' },
        ])

        return { links, getImageUrl: utilService.getImageUrl }
    },
})
</script>
