<template>
    <div class="dashboard">
        <Header />
        <carousel class="dashboard__banner"
                  :items-to-show="1"
                  :autoplay="5000"
                  :wrap-around="true">
            <slide v-for="slide in banners"
                   :key="slide">
                <img :src="getImageUrl(slide, 'images')"
                     alt="">
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
        <latestProducts :title="'wireless earbuds'" />
        <bestSellerProducts />
        <latestProducts :title="'smart watches'" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from '@/components/dashboard-components/navigation.vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import utilService from '@/services/util.service'
import latestProducts from '@/components/dashboard-components/latest-products.vue';
import bestSellerProducts from '@/components/dashboard-components/best-seller-products.vue';

export default defineComponent({
    components: {
        Header,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        latestProducts,
        bestSellerProducts
    },
    setup()
    {
        const banners = ref(['banner-1.jpg', 'banner-2.png', 'banner-3.jpg', 'banner-4.jpg'])
        return {
            banners,
            getImageUrl: utilService.getImageUrl
        }
    },
})
</script>
