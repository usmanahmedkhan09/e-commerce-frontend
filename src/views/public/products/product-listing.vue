<template>
    <div class="product__dashboard">
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
        <div class="product__dashboard__content">
            <div class="header__card">
                <p class="title">Buy Mobiles Phones in Pakistan 2023</p>
                <p class="subTitle">395 results for Mobiles. Find a wide range of mobiles at the lowest rates in Pakistan,
                    only at PriceOye.
                </p>
            </div>
            <div class="listing">
                <ProductsFilters class="listing__filters" />
                <div class="listing__items">
                    <ProductsListingItems v-for="product in products"
                                          :key="product.name"
                                          :product="product"
                                          class="productBox" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import ProductsHeader from '@/components/products-components/products-header.vue';
import utilService from '@/services/util.service'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import ProductsFilters from '@/components/products-components/products-filters.vue';
import ProductsListingItems from '@/components/products-components/products-listing-items.vue';
import { useproductStore } from '@/stores/product.store'
import { useRoute } from 'vue-router'

export default defineComponent({
    components: {
        ProductsHeader,
        Carousel,
        Navigation,
        ProductsFilters,
        Slide,
        ProductsListingItems,
    },
    setup()
    {
        const route = useRoute()
        const productStore = useproductStore()
        const { getProductByCategoryName } = productStore
        const products = computed(() => productStore.get)
        const banners = ref(['banner-1.jpg', 'banner-2.png', 'banner-3.jpg', 'banner-4.jpg'])

        watch(() => route.params.category, () =>
        {
            setInitialState()
        })

        const setInitialState = async () =>
        {
            if (route.params.category)
                await getProductByCategoryName(route.params.category as string)

        }
        onMounted(() =>
        {
            setInitialState()
        })
        return { banners, getImageUrl: utilService.getImageUrl, products }
    },
})
</script>
<style lang="scss" scoped>
.product__dashboard {
    background-color: #F1F3F6;

    &__content {
        padding: 24px;

        .header__card {
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;

            .title {
                font-size: 1.6rem;
            }

            .subTitle {
                font-size: 1.2rem;
            }
        }

        .listing {
            display: flex;
            gap: 16px;
            margin-block: 20px;

            &__filters {
                flex: 1 0 25%;
                background: #fff;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
            }

            &__items {
                flex: 80%;
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                align-content: flex-start;

                .productBox {
                    flex: calc(100% / 4 - 16px);
                    max-width: calc(100% / 4 - 16px);
                }
            }
        }
    }
}
</style>

