<template>
    <section class="brands__container">
        <div class="brands__container--header">
            <h1 class="title">Shop By brand</h1>
            <a href="#">View all</a>
        </div>
        <ul class="nav__links">
            <li class="nav__links--item"
                v-for="link in links"
                :key="link.name">
                <div class="image__wrapper">
                    <img :src="getImageUrl(link.icon, 'svg')"
                         alt="">
                </div>
                <p>{{ link.name }}</p>
            </li>
        </ul>
    </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service'
import iconComponent from '../icon-component.vue'

export default defineComponent({
    components: { iconComponent },
    setup()
    {
        const links = ref([
            { name: 'sumsung', icon: 'samsung.svg' },
            { name: 'infinix', icon: 'infinix.svg' },
            { name: 'Oppo', icon: 'oppo.svg' },
            { name: 'xiaomi', icon: 'xiaomi.svg' },
            { name: 'vivo', icon: 'vivo.svg' },
            { name: 'tecno', icon: 'tecno.svg' },
            { name: 'realme ', icon: 'realme.svg' },
            { name: 'itel ', icon: 'itel.svg' },
            { name: 'apple ', icon: 'apple.svg' },
            { name: 'nokia ', icon: 'nokia.svg' },
        ])
        return {
            links,
            getImageUrl: utilService.getImageUrl
        }
    },
})
</script>
<style lang="scss" scoped></style>
