<template>
    <div class="product__listing">
        <ProductsHeader />
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
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ProductsHeader from '@/components/products-components/products-header.vue';
import utilService from '@/services/util.service'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
    components: {
        ProductsHeader, Carousel, Navigation,
        Slide,
    },
    setup()
    {
        const banners = ref(['banner-1.jpg', 'banner-2.png', 'banner-3.jpg', 'banner-4.jpg'])
        return { banners, getImageUrl: utilService.getImageUrl }
    },
})
</script>
<style lang="scss" scoped>
.product__listing {
    background-color: #F1F3F6;
}
</style>

