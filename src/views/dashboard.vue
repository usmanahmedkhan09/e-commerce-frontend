<template>
    <div class="dashboard">
        <dashboard-navigation />
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
        <latestProducts :title="'Smart watches'" />
        <div class="static__banner">
            <img src="@/assets/images/dk-banner-static.jpg"
                 alt="">
        </div>
        <latestProducts :title="'mobiles'" />
        <shopFilters />
        <shopByBrand />
        <customerReviews />
        <reasonToBuy />
        <latestProducts :title="'tablets'" />
        <productServices />
        <TheFooter />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import dashboardNavigation from '@/components/dashboard-components/navigation.vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import utilService from '@/services/util.service'
import latestProducts from '@/components/dashboard-components/latest-products.vue';
import bestSellerProducts from '@/components/dashboard-components/best-seller-products.vue';
import shopFilters from '@/components/dashboard-components/shop-filters.vue';
import shopByBrand from '@/components/dashboard-components/shop-by-brand.vue';
import customerReviews from '@/components/dashboard-components/customer-reviews.vue';
import reasonToBuy from '@/components/dashboard-components/reason-to-buy.vue';
import productServices from '@/components/dashboard-components/product-services.vue';
import TheFooter from '@/components/footer.vue';

export default defineComponent({
    components: {
        dashboardNavigation,
        Carousel,
        Slide,
        Pagination,
        Navigation,
        latestProducts,
        bestSellerProducts,
        shopFilters,
        shopByBrand,
        customerReviews,
        reasonToBuy,
        productServices,
        TheFooter
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
