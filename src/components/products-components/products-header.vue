<template>
    <section class="products__navigation">
        <ul class="nav__links">
            <li class="nav__links--item"
                v-for="link in links"
                :key="link.name">
                <img height="50"
                     width="50"
                     :src="getImageUrl(link.icon, 'images')"
                     alt="">
            </li>
        </ul>
    </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service'

export default defineComponent({
    setup()
    {
        const links = ref([
            { name: 'samsung', icon: 'samsung.jpg' },
            { name: 'infinix', icon: 'infinix.jpg' },
            { name: 'oppo', icon: 'oppo.jpg' },
            { name: 'xiaomi', icon: 'xiaomi.jpg' },
            { name: 'vivo', icon: 'vivo.jpg' },
            { name: 'tecno', icon: 'tecno.jpg' },
            { name: 'realme', icon: 'realme.jpg' },
            { name: 'itel', icon: 'itel.jpg' },
        ])

        return { links, getImageUrl: utilService.getImageUrl }
    },
})
</script>
<style lang="scss" scoped>
.products__navigation {
    background: #fff;
    height: 50px;
    padding: 0px 25px;
    margin-bottom: 2rem;

    .nav__links {
        display: flex;
        justify-content: center;
        align-items: center;

        &--item {
            width: 140px
        }
    }
}
</style>